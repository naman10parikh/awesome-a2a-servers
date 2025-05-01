import { NextResponse } from 'next/server';
import { RepositoryService } from '@/lib/data';
// Import server-init to ensure data is loaded
import '@/lib/server-init';

/**
 * GET handler for repository filter options
 * @returns Next.js server response with available filter options
 */
export async function GET() {
  try {
    // Get available languages and topics
    const [languages, topics] = await Promise.all([
      RepositoryService.getAvailableLanguages(),
      RepositoryService.getAvailableTopics()
    ]);
    
    return NextResponse.json({
      success: true,
      data: {
        languages,
        topics
      }
    });
  } catch (error) {
    console.error('Error fetching filter options:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch filter options',
        message: (error as Error).message
      },
      { status: 500 }
    );
  }
} 