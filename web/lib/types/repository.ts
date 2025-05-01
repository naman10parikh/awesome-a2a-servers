/**
 * Core Repository interface defining the data structure for A2A server repositories
 */
export interface Repository {
  /**
   * Unique identifier for the repository
   */
  id: string;
  
  /**
   * Name of the repository in the format "owner/repo"
   */
  name: string;
  
  /**
   * GitHub username or organization that owns the repository
   */
  owner: string;
  
  /**
   * Human-readable description of the repository's purpose
   * May be null if no description is provided
   */
  description: string | null;
  
  /**
   * Full URL to the repository on GitHub
   */
  url: string;
  
  /**
   * Number of stars the repository has on GitHub
   * Optional as it may not be available for all repositories
   */
  stars?: number;
  
  /**
   * Number of forks the repository has on GitHub
   * Optional as it may not be available for all repositories
   */
  forks?: number;
  
  /**
   * Number of open issues in the repository
   * Optional as it may not be available for all repositories
   */
  issues?: number;
  
  /**
   * Date when the repository was last updated
   * Optional as it may not be available for all repositories
   */
  lastUpdated?: Date;
  
  /**
   * Primary programming language used in the repository
   * May be null if language information is not available
   */
  language?: string | null;
  
  /**
   * List of topics/tags associated with the repository
   * Optional as it may not be available for all repositories
   */
  topics?: string[];
  
  /**
   * Whether the repository is archived (read-only)
   * Optional as it may not be available for all repositories
   */
  isArchived?: boolean;
} 