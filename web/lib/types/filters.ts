/**
 * Interface for filtering repository data
 */
export interface FilterOptions {
  /**
   * Search term to filter repositories by name or description
   */
  searchTerm?: string;
  
  /**
   * List of programming languages to filter by
   */
  languages?: string[];
  
  /**
   * Minimum number of stars a repository should have
   */
  minStars?: number;
  
  /**
   * Date range for filtering repositories by their update date
   */
  dateRange?: {
    from?: Date;
    to?: Date;
  };
  
  /**
   * List of topics to filter repositories by
   */
  topics?: string[];
  
  /**
   * Whether to include archived repositories
   */
  archived?: boolean;
}

/**
 * Available fields for sorting repositories
 */
export enum SortField {
  STARS = 'stars',
  FORKS = 'forks',
  UPDATED = 'lastUpdated',
  NAME = 'name'
}

/**
 * Sort direction options
 */
export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc'
}

/**
 * Interface for sorting repository data
 */
export interface SortOptions {
  /**
   * Field to sort repositories by
   */
  field: SortField;
  
  /**
   * Direction to sort repositories in
   */
  direction: SortDirection;
} 