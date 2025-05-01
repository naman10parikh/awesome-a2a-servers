import { RepositoryService } from './data';

/**
 * Initialize services for the server
 * This is called when the server starts
 */
export async function initializeServer() {
  console.log('Initializing server services...');
  
  try {
    // Initialize RepositoryService
    await RepositoryService.initialize();
    console.log('Server initialization complete');
  } catch (error) {
    console.error('Failed to initialize server:', error);
    throw error;
  }
}

// Initialize on module import
// This ensures the RepositoryService is initialized once the server starts
// If initialization fails, the server will crash immediately
initializeServer().catch(error => {
  console.error('Fatal server initialization error:', error);
  process.exit(1);
}); 