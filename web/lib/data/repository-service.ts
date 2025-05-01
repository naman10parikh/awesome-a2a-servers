import path from 'path';
import { Repository, FilterOptions, SortOptions, SortField, SortDirection, DisplayRepository } from '../types';
import { CsvParserService, repositoryTransformer } from './csv-parser';
import config from '../config';

/**
 * Service for managing repository data
 */
export class RepositoryService {
  private static repositories: Repository[] = [];
  private static isInitialized = false;

  /**
   * Initialize the repository service
   * @param csvFilePath Optional path to the CSV file
   */
  public static async initialize(csvFilePath?: string): Promise<void> {
    if (this.isInitialized) return;
    
    try {
      // Use provided path or default from config
      const filePath = csvFilePath || config.csvFilePath;
      this.repositories = await CsvParserService.loadFromFile(filePath);
      this.isInitialized = true;
      console.log(`Initialized repository service with ${this.repositories.length} repositories`);
    } catch (error) {
      console.error('Failed to initialize repository service:', error);
      throw error;
    }
  }

  /**
   * Get all repositories
   * @returns Array of all repositories
   */
  public static async getAll(): Promise<Repository[]> {
    await this.ensureInitialized();
    return [...this.repositories];
  }

  /**
   * Get repository by ID
   * @param id Repository ID
   * @returns Repository or null if not found
   */
  public static async getById(id: string): Promise<Repository | null> {
    await this.ensureInitialized();
    return this.repositories.find(repo => repo.id === id) || null;
  }

  /**
   * Get repositories by owner
   * @param owner Repository owner
   * @returns Array of repositories by the specified owner
   */
  public static async getByOwner(owner: string): Promise<Repository[]> {
    await this.ensureInitialized();
    return this.repositories.filter(repo => repo.owner === owner);
  }

  /**
   * Search and filter repositories
   * @param options Filter options
   * @returns Filtered array of repositories
   */
  public static async search(options: FilterOptions): Promise<Repository[]> {
    await this.ensureInitialized();
    
    return this.repositories.filter(repo => {
      // Apply search term filter
      if (options.searchTerm && !this.matchSearchTerm(repo, options.searchTerm)) {
        return false;
      }
      
      // Filter by language
      if (options.languages && options.languages.length > 0) {
        if (!repo.language || !options.languages.includes(repo.language)) {
          return false;
        }
      }
      
      // Filter by minimum stars
      if (options.minStars !== undefined && (repo.stars === undefined || repo.stars < options.minStars)) {
        return false;
      }
      
      // Filter by date range
      if (options.dateRange) {
        if (!repo.lastUpdated) return false;
        
        const repoDate = new Date(repo.lastUpdated);
        
        if (options.dateRange.from && repoDate < options.dateRange.from) {
          return false;
        }
        
        if (options.dateRange.to && repoDate > options.dateRange.to) {
          return false;
        }
      }
      
      // Filter by topics
      if (options.topics && options.topics.length > 0) {
        if (!repo.topics || !options.topics.some(topic => repo.topics?.includes(topic))) {
          return false;
        }
      }
      
      // Filter by archive status
      if (options.archived !== undefined) {
        if ((repo.isArchived ?? false) !== options.archived) {
          return false;
        }
      }
      
      return true;
    });
  }

  /**
   * Sort repositories
   * @param repositories Repositories to sort
   * @param sortOptions Sort options
   * @returns Sorted array of repositories
   */
  public static sort(repositories: Repository[], sortOptions: SortOptions): Repository[] {
    const { field, direction } = sortOptions;
    const directionMultiplier = direction === SortDirection.ASC ? 1 : -1;
    
    return [...repositories].sort((a, b) => {
      let valueA = (a[field] as any) ?? null;
      let valueB = (b[field] as any) ?? null;
      
      // Handle nulls
      if (valueA === null && valueB === null) return 0;
      if (valueA === null) return directionMultiplier;
      if (valueB === null) return -directionMultiplier;
      
      // Sort strings
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.localeCompare(valueB) * directionMultiplier;
      }
      
      // Sort dates
      if (valueA instanceof Date && valueB instanceof Date) {
        return (valueA.getTime() - valueB.getTime()) * directionMultiplier;
      }
      
      // Sort numbers and other values
      return ((valueA > valueB ? 1 : -1) * directionMultiplier);
    });
  }

  /**
   * Transform repositories to display format
   * @param repositories Repositories to transform
   * @returns Display-ready repositories
   */
  public static toDisplayFormat(repositories: Repository[]): DisplayRepository[] {
    return repositories.map(repo => repositoryTransformer.toDisplayFormat(repo));
  }

  /**
   * Get all available languages from the repositories
   * @returns Array of unique languages
   */
  public static async getAvailableLanguages(): Promise<string[]> {
    await this.ensureInitialized();
    
    const languages = new Set<string>();
    this.repositories.forEach(repo => {
      if (repo.language) {
        languages.add(repo.language);
      }
    });
    
    return Array.from(languages).sort();
  }

  /**
   * Get all available topics from the repositories
   * @returns Array of unique topics
   */
  public static async getAvailableTopics(): Promise<string[]> {
    await this.ensureInitialized();
    
    const topics = new Set<string>();
    this.repositories.forEach(repo => {
      if (repo.topics) {
        repo.topics.forEach(topic => topics.add(topic));
      }
    });
    
    return Array.from(topics).sort();
  }

  /**
   * Check if repository matches a search term
   * @param repo Repository to check
   * @param searchTerm Search term to match
   * @returns Whether the repository matches the search term
   */
  private static matchSearchTerm(repo: Repository, searchTerm: string): boolean {
    const term = searchTerm.toLowerCase();
    return (
      repo.name.toLowerCase().includes(term) ||
      repo.owner.toLowerCase().includes(term) ||
      (repo.description && repo.description.toLowerCase().includes(term)) ||
      (repo.language && repo.language.toLowerCase().includes(term)) ||
      (repo.topics && repo.topics.some(topic => topic.toLowerCase().includes(term)))
    );
  }

  /**
   * Ensure the service is initialized
   */
  private static async ensureInitialized(): Promise<void> {
    if (!this.isInitialized) {
      await this.initialize();
    }
  }
} 