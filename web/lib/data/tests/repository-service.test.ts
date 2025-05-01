import { RepositoryService } from '../repository-service';
import { CsvParserService } from '../csv-parser';
import { FilterOptions, SortField, SortDirection, Repository } from '../../types';

// Mock the CsvParserService
jest.mock('../csv-parser', () => {
  return {
    CsvParserService: {
      loadFromFile: jest.fn(),
    },
    repositoryTransformer: {
      toDisplayFormat: jest.fn((repo) => ({
        ...repo,
        formattedDate: 'mocked-date',
        popularityScore: (repo.stars || 0) + (repo.forks || 0) * 2,
        isFeatured: true,
        ownerAvatar: `https://github.com/${repo.owner}.png`,
        badges: []
      }))
    }
  };
});

describe('RepositoryService', () => {
  const mockedRepositories: Repository[] = [
    {
      id: 'google-a2a',
      name: 'google/A2A',
      owner: 'google',
      description: 'A2A Protocol',
      url: 'https://github.com/google/A2A',
      stars: 420,
      forks: 32,
      language: 'TypeScript',
      topics: ['agent', 'protocol', 'a2a'],
      lastUpdated: new Date('2023-07-15')
    },
    {
      id: 'theapemachine-a2a-go',
      name: 'TheApeMachine/a2a-go',
      owner: 'TheApeMachine',
      description: 'A2A server in Go',
      url: 'https://github.com/TheApeMachine/a2a-go',
      stars: 15,
      forks: 5,
      language: 'Go',
      topics: ['go', 'a2a'],
      lastUpdated: new Date('2023-06-01')
    },
    {
      id: 'example-a2a-js',
      name: 'example/a2a-js',
      owner: 'example',
      description: 'A2A in JavaScript',
      url: 'https://github.com/example/a2a-js',
      stars: 5,
      language: 'JavaScript',
      topics: ['javascript', 'a2a'],
      lastUpdated: new Date('2023-05-01')
    }
  ];

  beforeEach(async () => {
    jest.clearAllMocks();
    (CsvParserService.loadFromFile as jest.Mock).mockResolvedValue(mockedRepositories);
    
    // Reset the RepositoryService
    // @ts-ignore - Accessing private property for testing
    RepositoryService.repositories = [];
    // @ts-ignore - Accessing private property for testing
    RepositoryService.isInitialized = false;
    
    await RepositoryService.initialize('mock-path');
  });

  it('should initialize with repositories from CSV', async () => {
    expect(CsvParserService.loadFromFile).toHaveBeenCalledWith('mock-path');
    const repos = await RepositoryService.getAll();
    expect(repos).toEqual(mockedRepositories);
    expect(repos.length).toBe(3);
  });

  it('should get repository by ID', async () => {
    const repo = await RepositoryService.getById('google-a2a');
    expect(repo).toEqual(mockedRepositories[0]);
    
    const notFound = await RepositoryService.getById('non-existent');
    expect(notFound).toBeNull();
  });

  it('should get repositories by owner', async () => {
    const repos = await RepositoryService.getByOwner('google');
    expect(repos).toEqual([mockedRepositories[0]]);
    expect(repos.length).toBe(1);
  });

  it('should search repositories by search term', async () => {
    const options: FilterOptions = {
      searchTerm: 'go'
    };
    
    const results = await RepositoryService.search(options);
    
    // Verify all repositories containing 'go' in name, description, language, etc.
    expect(results).toContainEqual(mockedRepositories[1]); // TheApeMachine/a2a-go
    expect(results).toContainEqual(mockedRepositories[0]); // Contains 'go' in name (google)
    expect(results.length).toBe(2);
  });

  it('should filter repositories by language', async () => {
    const options: FilterOptions = {
      languages: ['TypeScript']
    };
    
    const results = await RepositoryService.search(options);
    expect(results).toEqual([mockedRepositories[0]]);
    expect(results.length).toBe(1);
  });

  it('should filter repositories by minimum stars', async () => {
    const options: FilterOptions = {
      minStars: 10
    };
    
    const results = await RepositoryService.search(options);
    expect(results).toEqual([mockedRepositories[0], mockedRepositories[1]]);
    expect(results.length).toBe(2);
  });

  it('should filter repositories by date range', async () => {
    const options: FilterOptions = {
      dateRange: {
        from: new Date('2023-06-01'),
        to: new Date('2023-08-01')
      }
    };
    
    const results = await RepositoryService.search(options);
    expect(results).toEqual([mockedRepositories[0], mockedRepositories[1]]);
    expect(results.length).toBe(2);
  });

  it('should filter repositories by topics', async () => {
    const options: FilterOptions = {
      topics: ['javascript']
    };
    
    const results = await RepositoryService.search(options);
    expect(results).toEqual([mockedRepositories[2]]);
    expect(results.length).toBe(1);
  });

  it('should sort repositories by name ASC', async () => {
    const repos = await RepositoryService.getAll();
    const sorted = RepositoryService.sort(repos, {
      field: SortField.NAME,
      direction: SortDirection.ASC
    });
    
    expect(sorted[0].name).toBe('example/a2a-js');
    expect(sorted[1].name).toBe('google/A2A');
    expect(sorted[2].name).toBe('TheApeMachine/a2a-go');
  });

  it('should sort repositories by stars DESC', async () => {
    const repos = await RepositoryService.getAll();
    const sorted = RepositoryService.sort(repos, {
      field: SortField.STARS,
      direction: SortDirection.DESC
    });
    
    expect(sorted[0].stars).toBe(420);
    expect(sorted[1].stars).toBe(15);
    expect(sorted[2].stars).toBe(5);
  });

  it('should get available languages', async () => {
    const languages = await RepositoryService.getAvailableLanguages();
    expect(languages).toEqual(['Go', 'JavaScript', 'TypeScript']);
  });

  it('should get available topics', async () => {
    const topics = await RepositoryService.getAvailableTopics();
    expect(topics).toContain('a2a');
    expect(topics).toContain('go');
    expect(topics).toContain('javascript');
    expect(topics).toContain('protocol');
  });

  it('should transform repositories to display format', async () => {
    const repos = await RepositoryService.getAll();
    const displayRepos = RepositoryService.toDisplayFormat(repos);
    
    expect(displayRepos[0]).toHaveProperty('formattedDate', 'mocked-date');
    expect(displayRepos[0]).toHaveProperty('isFeatured', true);
    expect(displayRepos[0]).toHaveProperty('popularityScore');
    expect(displayRepos[0]).toHaveProperty('ownerAvatar');
  });
}); 