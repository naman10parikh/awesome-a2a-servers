import { CsvRepository, Repository, RepositoryTransformer } from '../types';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

/**
 * Service for parsing CSV data into Repository objects
 */
export class CsvParserService {
  /**
   * Load and parse repositories from a CSV file
   * @param filePath Path to the CSV file
   * @returns Promise resolving to an array of Repository objects
   */
  public static async loadFromFile(filePath: string): Promise<Repository[]> {
    try {
      const csvContent = await fs.promises.readFile(filePath, 'utf-8');
      return this.parseRepositories(csvContent);
    } catch (error) {
      console.error(`Error loading CSV file from ${filePath}:`, error);
      throw new Error(`Failed to load CSV file: ${(error as Error).message}`);
    }
  }

  /**
   * Parse CSV content into Repository objects
   * @param csvContent CSV content as a string
   * @returns Promise resolving to an array of Repository objects
   */
  public static parseRepositories(csvContent: string): Promise<Repository[]> {
    return new Promise((resolve, reject) => {
      const csvRepositories: CsvRepository[] = [];
      
      parse(csvContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true
      })
      .on('data', (row: CsvRepository) => {
        csvRepositories.push(row);
      })
      .on('error', (error) => {
        reject(new Error(`CSV parsing error: ${error.message}`));
      })
      .on('end', () => {
        const repositories = csvRepositories.map(csvRepo => this.transformCsvToRepository(csvRepo));
        resolve(repositories);
      });
    });
  }

  /**
   * Transform a CSV repository record into a Repository object
   * @param csvRepo CSV repository record
   * @returns Repository object
   */
  private static transformCsvToRepository(csvRepo: CsvRepository): Repository {
    // Extract owner and repository name from the repository_name field
    const [owner, repoName] = csvRepo.repository_name.split('/');
    
    // Generate a unique ID from the repository name
    const id = csvRepo.repository_name.replace('/', '-').toLowerCase();
    
    return {
      id,
      name: csvRepo.repository_name,
      owner,
      description: csvRepo.description || null,
      url: csvRepo.repository_url,
      // Additional fields will be populated later through GitHub API
    };
  }
}

/**
 * Implementation of the RepositoryTransformer interface for transforming
 * between different repository formats
 */
export const repositoryTransformer: RepositoryTransformer = {
  /**
   * Convert from CSV data to Repository interface
   */
  fromCsv: (csvData: CsvRepository): Repository => {
    const [owner, repo] = csvData.repository_name.split('/');
    return {
      id: csvData.repository_name.replace('/', '-').toLowerCase(),
      name: csvData.repository_name,
      owner,
      description: csvData.description,
      url: csvData.repository_url
    };
  },
  
  /**
   * Convert from GitHub API data to Repository interface
   */
  fromApi: (apiData: any): Repository => {
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
  
  /**
   * Convert Repository to DisplayRepository with UI enhancements
   */
  toDisplayFormat: (repo: Repository) => {
    // Generate popularity score based on stars and forks
    const popularityScore = (repo.stars || 0) + (repo.forks || 0) * 2;
    
    return {
      ...repo,
      formattedDate: repo.lastUpdated ? new Date(repo.lastUpdated).toLocaleDateString() : undefined,
      isFeatured: popularityScore > 100,
      popularityScore,
      ownerAvatar: `https://github.com/${repo.owner}.png`,
      badges: repo.language ? [
        {
          label: repo.language,
          color: getLanguageColor(repo.language)
        }
      ] : []
    };
  }
};

/**
 * Helper function to get a color for a programming language
 * @param language Programming language
 * @returns Color code as string
 */
function getLanguageColor(language: string | null | undefined): string {
  if (!language) return '#aaaaaa';
  
  const languageColors: Record<string, string> = {
    'TypeScript': '#3178c6',
    'JavaScript': '#f1e05a',
    'Go': '#00ADD8',
    'Python': '#3572A5',
    'Java': '#b07219',
    'C#': '#178600',
    'Ruby': '#701516',
    'PHP': '#4F5D95',
    'Swift': '#F05138',
    'Kotlin': '#A97BFF',
    'Rust': '#DEA584'
  };
  
  return languageColors[language] || '#aaaaaa';
} 