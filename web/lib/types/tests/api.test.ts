import { Repository } from '../repository';
import { 
  GitHubApiRepository, 
  GitHubApiSearchResponse, 
  ApiRequestParams, 
  ApiError, 
  RepositoryConverter 
} from '../api';

// This file doesn't actually run tests - it's a type check to verify 
// that our API type definitions work as expected

// Sample GitHub API repository response
const sampleApiRepo: GitHubApiRepository = {
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

// Sample GitHub API search response
const sampleSearchResponse: GitHubApiSearchResponse = {
  total_count: 2,
  incomplete_results: false,
  items: [
    sampleApiRepo,
    {
      ...sampleApiRepo,
      id: 987654321,
      name: 'a2a-go',
      full_name: 'TheApeMachine/a2a-go',
      owner: {
        login: 'TheApeMachine',
        id: 87654321,
        avatar_url: 'https://avatars.githubusercontent.com/u/87654321?v=4',
        html_url: 'https://github.com/TheApeMachine'
      },
      html_url: 'https://github.com/TheApeMachine/a2a-go',
      description: 'A2A server in Go for facilitating communication and interaction between software agents in applications.',
      stargazers_count: 15,
      language: 'Go',
      topics: ['go', 'agent', 'a2a']
    }
  ]
};

// Sample API request parameters
const sampleRequestParams: ApiRequestParams = {
  q: 'a2a in:name,description',
  sort: 'stars',
  order: 'desc',
  per_page: 30,
  page: 1
};

// Sample API error
const sampleError: ApiError = {
  status: 403,
  message: 'API rate limit exceeded',
  originalError: new Error('API rate limit exceeded')
};

// Sample repository converter implementation
const repositoryConverter: RepositoryConverter = {
  fromApiRepository: (apiRepo: GitHubApiRepository): Repository => {
    return {
      id: apiRepo.full_name.replace('/', '-').toLowerCase(),
      name: apiRepo.full_name,
      owner: apiRepo.owner.login,
      description: apiRepo.description,
      url: apiRepo.html_url,
      stars: apiRepo.stargazers_count,
      forks: apiRepo.forks_count,
      issues: apiRepo.open_issues_count,
      lastUpdated: new Date(apiRepo.updated_at),
      language: apiRepo.language,
      topics: apiRepo.topics,
      isArchived: apiRepo.archived
    };
  },
  
  toApiRepository: (repo: Repository): Partial<GitHubApiRepository> => {
    const [owner, name] = repo.name.split('/');
    return {
      id: 0, // ID would come from the API
      name: name,
      full_name: repo.name,
      owner: {
        login: owner,
        id: 0, // ID would come from the API
        avatar_url: '',
        html_url: `https://github.com/${owner}`
      },
      description: repo.description,
      html_url: repo.url,
      stargazers_count: repo.stars,
      language: repo.language || null,
      topics: repo.topics || []
    };
  }
};

// Verify that the converter works
const convertedRepo: Repository = repositoryConverter.fromApiRepository(sampleApiRepo);
const backToApiRepo: Partial<GitHubApiRepository> = repositoryConverter.toApiRepository!(convertedRepo); 