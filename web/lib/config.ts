import path from 'path';

/**
 * Configuration constants for the application
 */
const config = {
  /**
   * Path to the CSV file containing A2A server data
   * This path is relative to the project root
   */
  csvFilePath: process.env.CSV_FILE_PATH || path.resolve(process.cwd(), './scripts/a2a.csv'),
  
  /**
   * GitHub API configuration
   */
  github: {
    /**
     * Base URL for GitHub API
     */
    apiUrl: 'https://api.github.com',
    
    /**
     * GitHub API token from environment variables
     */
    token: process.env.GITHUB_TOKEN,
    
    /**
     * Rate limit configuration for GitHub API
     */
    rateLimit: {
      /**
       * Maximum number of requests per hour
       */
      maxRequests: 60,
      
      /**
       * Enabled/disabled state for using GitHub API
       */
      enabled: process.env.ENABLE_GITHUB_API === 'true'
    }
  },
  
  /**
   * Default cache ttl in seconds
   * Used for caching API responses and other data
   */
  cacheTtl: parseInt(process.env.CACHE_TTL || '3600', 10),
  
  /**
   * Site metadata
   */
  site: {
    /**
     * Site name
     */
    name: 'Awesome A2A Servers',
    
    /**
     * Site description
     */
    description: 'A curated list of Agent-to-Agent (A2A) servers and implementations',
    
    /**
     * Site URL
     */
    url: process.env.SITE_URL || 'https://awesome-a2a-servers.vercel.app'
  }
};

export default config; 