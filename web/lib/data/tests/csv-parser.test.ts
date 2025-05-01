import { CsvParserService, repositoryTransformer } from '../csv-parser';
import { CsvRepository, Repository } from '../../types';

describe('CsvParserService', () => {
  const sampleCsvContent = `repository_name,repository_url,description
google/A2A,https://github.com/google/A2A,An open protocol enabling communication and interoperability between opaque agentic applications.
TheApeMachine/a2a-go,https://github.com/TheApeMachine/a2a-go,A2A server in Go for facilitating communication and interaction between software agents in applications.`;

  it('should parse CSV content into Repository objects', async () => {
    const repositories = await CsvParserService.parseRepositories(sampleCsvContent);
    
    expect(repositories.length).toBe(2);
    
    expect(repositories[0]).toEqual({
      id: 'google-a2a',
      name: 'google/A2A',
      owner: 'google',
      description: 'An open protocol enabling communication and interoperability between opaque agentic applications.',
      url: 'https://github.com/google/A2A'
    });
    
    expect(repositories[1]).toEqual({
      id: 'theapemachine-a2a-go',
      name: 'TheApeMachine/a2a-go',
      owner: 'TheApeMachine',
      description: 'A2A server in Go for facilitating communication and interaction between software agents in applications.',
      url: 'https://github.com/TheApeMachine/a2a-go'
    });
  });
  
  describe('repositoryTransformer', () => {
    const sampleCsvRepo: CsvRepository = {
      repository_name: 'google/A2A',
      repository_url: 'https://github.com/google/A2A',
      description: 'An open protocol enabling communication and interoperability between opaque agentic applications.'
    };
    
    const sampleApiData = {
      full_name: 'google/A2A',
      owner: {
        login: 'google'
      },
      description: 'An open protocol enabling communication and interoperability between opaque agentic applications.',
      html_url: 'https://github.com/google/A2A',
      stargazers_count: 420,
      forks_count: 32,
      open_issues_count: 15,
      updated_at: '2023-07-15T14:30:00Z',
      language: 'TypeScript',
      topics: ['agent', 'protocol', 'ai', 'a2a'],
      archived: false
    };
    
    const sampleRepo: Repository = {
      id: 'google-a2a',
      name: 'google/A2A',
      owner: 'google',
      description: 'An open protocol enabling communication and interoperability between opaque agentic applications.',
      url: 'https://github.com/google/A2A',
      stars: 420,
      forks: 32,
      issues: 15,
      lastUpdated: new Date('2023-07-15T14:30:00Z'),
      language: 'TypeScript',
      topics: ['agent', 'protocol', 'ai', 'a2a'],
      isArchived: false
    };

    it('should transform CSV data to Repository', () => {
      const repo = repositoryTransformer.fromCsv(sampleCsvRepo);
      
      expect(repo).toEqual({
        id: 'google-a2a',
        name: 'google/A2A',
        owner: 'google',
        description: 'An open protocol enabling communication and interoperability between opaque agentic applications.',
        url: 'https://github.com/google/A2A'
      });
    });
    
    it('should transform API data to Repository', () => {
      const repo = repositoryTransformer.fromApi(sampleApiData);
      
      expect(repo).toEqual({
        id: 'google-a2a',
        name: 'google/A2A',
        owner: 'google',
        description: 'An open protocol enabling communication and interoperability between opaque agentic applications.',
        url: 'https://github.com/google/A2A',
        stars: 420,
        forks: 32,
        issues: 15,
        lastUpdated: expect.any(Date),
        language: 'TypeScript',
        topics: ['agent', 'protocol', 'ai', 'a2a'],
        isArchived: false
      });
      
      expect(repo.lastUpdated?.toISOString()).toBe('2023-07-15T14:30:00.000Z');
    });
    
    it('should transform Repository to DisplayRepository', () => {
      const displayRepo = repositoryTransformer.toDisplayFormat(sampleRepo);
      
      expect(displayRepo).toEqual({
        ...sampleRepo,
        formattedDate: expect.any(String),
        isFeatured: true, // 420 stars + 32*2 forks = 484 > 100
        popularityScore: 484,
        ownerAvatar: 'https://github.com/google.png',
        badges: [
          {
            label: 'TypeScript',
            color: '#3178c6'
          }
        ]
      });
    });
  });
}); 