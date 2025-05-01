import { Repository } from '../repository';
import { GitHubApiRepository } from '../api';
import { 
  CsvRepository, 
  DisplayRepository, 
  RepositoryTransformer,
  PaginationOptions,
  PaginatedResult
} from '../transform';

// This file doesn't actually run tests - it's a type check to verify 
// that our transformation type definitions work as expected

// Sample CSV repository data
const csvRepo: CsvRepository = {
  repository_name: 'google/A2A',
  repository_url: 'https://github.com/google/A2A',
  description: 'An open protocol enabling communication and interoperability between opaque agentic applications.'
};

// Sample API repository data (simplified from api.test.ts)
const apiRepo: GitHubApiRepository = {
  id: 123456789,
  name: 'A2A',
  full_name: 'google/A2A',
  owner: {
    login: 'google',
    id: 1342004,
    avatar_url: 'https://avatars.githubusercontent.com/u/1342004?v=4',
    html_url: 'https://github.com/google'
  },
  html_url: 'https://github.com/google/A2A',
  description: 'An open protocol enabling communication and interoperability between opaque agentic applications.',
  fork: false,
  url: 'https://api.github.com/repos/google/A2A',
  created_at: '2023-06-15T12:00:00Z',
  updated_at: '2023-07-15T14:30:00Z',
  pushed_at: '2023-07-15T14:30:00Z',
  homepage: null,
  size: 2500,
  stargazers_count: 420,
  watchers_count: 40,
  language: 'TypeScript',
  has_issues: true,
  open_issues_count: 15,
  forks_count: 32,
  archived: false,
  disabled: false,
  license: {
    key: 'apache-2.0',
    name: 'Apache License 2.0',
    url: 'https://api.github.com/licenses/apache-2.0'
  },
  topics: ['agent', 'protocol', 'ai', 'a2a'],
  default_branch: 'main'
};

// Sample Repository object
const repository: Repository = {
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

// Sample repository transformer implementation
const repositoryTransformer: RepositoryTransformer = {
  fromCsv: (csvData: CsvRepository): Repository => {
    const [owner, repo] = csvData.repository_name.split('/');
    return {
      id: csvData.repository_name.replace('/', '-').toLowerCase(),
      name: csvData.repository_name,
      owner: owner,
      description: csvData.description,
      url: csvData.repository_url
    };
  },
  
  fromApi: (apiData: GitHubApiRepository): Repository => {
    return {
      id: apiData.full_name.replace('/', '-').toLowerCase(),
      name: apiData.full_name,
      owner: apiData.owner.login,
      description: apiData.description,
      url: apiData.html_url,
      stars: apiData.stargazers_count,
      forks: apiData.forks_count,
      issues: apiData.open_issues_count,
      lastUpdated: new Date(apiData.updated_at),
      language: apiData.language,
      topics: apiData.topics,
      isArchived: apiData.archived
    };
  },
  
  toDisplayFormat: (repo: Repository): DisplayRepository => {
    // Generate popularity score based on stars and forks
    const popularityScore = (repo.stars || 0) + (repo.forks || 0) * 2;
    
    return {
      ...repo,
      formattedDate: repo.lastUpdated ? new Date(repo.lastUpdated).toLocaleDateString() : undefined,
      isFeatured: popularityScore > 500,
      popularityScore,
      ownerAvatar: `https://github.com/${repo.owner}.png`,
      badges: [
        {
          label: repo.language || 'Unknown',
          color: getLanguageColor(repo.language)
        }
      ]
    };
  }
};

// Helper function (just for the test type-checking)
function getLanguageColor(language: string | null | undefined): string {
  if (!language) return '#aaaaaa';
  const languageColors: Record<string, string> = {
    'TypeScript': '#3178c6',
    'JavaScript': '#f1e05a',
    'Go': '#00ADD8',
    'Python': '#3572A5'
  };
  return languageColors[language] || '#aaaaaa';
}

// Test the transformations
const repoFromCsv: Repository = repositoryTransformer.fromCsv(csvRepo);
const repoFromApi: Repository = repositoryTransformer.fromApi(apiRepo);
const displayRepo: DisplayRepository = repositoryTransformer.toDisplayFormat(repository);

// Test pagination types
const paginationOptions: PaginationOptions = {
  page: 1,
  perPage: 10,
  totalItems: 100,
  totalPages: 10
};

const paginatedResult: PaginatedResult<Repository> = {
  items: [repository],
  pagination: {
    page: 1,
    perPage: 10,
    totalItems: 100,
    totalPages: 10
  }
}; 