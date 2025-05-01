import { Repository } from './repository';
import { GitHubApiRepository } from './api';

/**
 * Interface matching the CSV data structure
 */
export interface CsvRepository {
  /**
   * Repository name in format "owner/repo"
   */
  repository_name: string;
  
  /**
   * URL to the GitHub repository
   */
  repository_url: string;
  
  /**
   * Description of the repository
   */
  description: string | null;
}

/**
 * Enhanced repository format with UI-specific properties
 */
export interface DisplayRepository extends Repository {
  /**
   * Formatted date string for UI display
   */
  formattedDate?: string;
  
  /**
   * Indicates whether the repository is featured
   */
  isFeatured?: boolean;
  
  /**
   * Custom color or theme for the repository card
   */
  cardColor?: string;
  
  /**
   * Owner's avatar URL for UI display
   */
  ownerAvatar?: string;
  
  /**
   * Computed popularity score based on stars, forks, etc.
   */
  popularityScore?: number;
  
  /**
   * Links to demos, documentation, etc.
   */
  relatedLinks?: {
    demo?: string;
    docs?: string;
    npm?: string;
  };
  
  /**
   * Badge indicators for special statuses
   */
  badges?: Array<{
    label: string;
    color: string;
  }>;
}

/**
 * Interface for handling repository data transformations
 */
export interface RepositoryTransformer {
  /**
   * Convert from CSV data to Repository interface
   */
  fromCsv: (csvData: CsvRepository) => Repository;
  
  /**
   * Convert from GitHub API data to Repository interface
   */
  fromApi: (apiData: GitHubApiRepository) => Repository;
  
  /**
   * Convert Repository to DisplayRepository with UI enhancements
   */
  toDisplayFormat: (repo: Repository) => DisplayRepository;
}

/**
 * Pagination options interface for repository lists
 */
export interface PaginationOptions {
  /**
   * Current page number (1-based)
   */
  page: number;
  
  /**
   * Number of items per page
   */
  perPage: number;
  
  /**
   * Total number of items (if known)
   */
  totalItems?: number;
  
  /**
   * Total number of pages (if known)
   */
  totalPages?: number;
}

/**
 * Result interface for paginated repository queries
 */
export interface PaginatedResult<T> {
  /**
   * Items on the current page
   */
  items: T[];
  
  /**
   * Pagination metadata
   */
  pagination: Required<PaginationOptions>;
}

/**
 * Export all transformation-related types
 */
export type { Repository } from './repository';
export type { 
  GitHubApiRepository, 
  GitHubApiSearchResponse, 
  ApiRequestParams, 
  ApiError, 
  RepositoryConverter 
} from './api';
export type {
  FilterOptions,
  SortField,
  SortDirection,
  SortOptions
} from './filters'; 