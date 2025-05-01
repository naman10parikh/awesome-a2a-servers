import { Repository } from './repository';

/**
 * GitHub API repository response format
 */
export interface GitHubApiRepository {
  /**
   * Unique id of the repository
   */
  id: number;
  
  /**
   * Name of the repository without the owner
   */
  name: string;
  
  /**
   * Full name of the repository including owner (owner/repo)
   */
  full_name: string;
  
  /**
   * Owner information
   */
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
  };
  
  /**
   * HTML URL of the repository
   */
  html_url: string;
  
  /**
   * Description of the repository
   */
  description: string | null;
  
  /**
   * Whether the repository is a fork
   */
  fork: boolean;
  
  /**
   * API URL for the repository
   */
  url: string;
  
  /**
   * Creation date of the repository
   */
  created_at: string;
  
  /**
   * Last update date of the repository
   */
  updated_at: string;
  
  /**
   * Last push date to the repository
   */
  pushed_at: string;
  
  /**
   * Repository homepage URL
   */
  homepage: string | null;
  
  /**
   * Size of the repository in KB
   */
  size: number;
  
  /**
   * Number of stargazers
   */
  stargazers_count: number;
  
  /**
   * Number of watchers
   */
  watchers_count: number;
  
  /**
   * Primary language of the repository
   */
  language: string | null;
  
  /**
   * Whether the repository has issues enabled
   */
  has_issues: boolean;
  
  /**
   * Number of open issues
   */
  open_issues_count: number;
  
  /**
   * Number of forks
   */
  forks_count: number;
  
  /**
   * Whether the repository is archived
   */
  archived: boolean;
  
  /**
   * Whether the repository is disabled
   */
  disabled: boolean;
  
  /**
   * License information
   */
  license: {
    key: string;
    name: string;
    url: string | null;
  } | null;
  
  /**
   * Topics associated with the repository
   */
  topics: string[];
  
  /**
   * Default branch of the repository
   */
  default_branch: string;
}

/**
 * GitHub API search response format
 */
export interface GitHubApiSearchResponse {
  /**
   * Total count of search results
   */
  total_count: number;
  
  /**
   * Whether the results are incomplete
   */
  incomplete_results: boolean;
  
  /**
   * List of repositories matching the search
   */
  items: GitHubApiRepository[];
}

/**
 * Parameters for GitHub API requests
 */
export interface ApiRequestParams {
  /**
   * Query string for search API
   */
  q?: string;
  
  /**
   * Sort field 
   */
  sort?: string;
  
  /**
   * Sort direction (asc or desc)
   */
  order?: string;
  
  /**
   * Number of results per page
   */
  per_page?: number;
  
  /**
   * Page number for paginated results
   */
  page?: number;
}

/**
 * Standardized API error format
 */
export interface ApiError {
  /**
   * HTTP status code
   */
  status: number;
  
  /**
   * Error message
   */
  message: string;
  
  /**
   * Original error object
   */
  originalError?: any;
}

/**
 * Type for converting between GitHub API repository format and our Repository interface
 */
export interface RepositoryConverter {
  /**
   * Convert from GitHub API repository format to our Repository interface
   */
  fromApiRepository: (apiRepo: GitHubApiRepository) => Repository;
  
  /**
   * Convert from our Repository interface to GitHub API repository format (optional)
   * May be used for mock data or simulations
   */
  toApiRepository?: (repo: Repository) => Partial<GitHubApiRepository>;
} 