import { NextRequest, NextResponse } from 'next/server';
import { RepositoryService } from '@/lib/data';
// Import server-init to ensure data is loaded
import '@/lib/server-init';

/**
 * GET handler for a single repository by ID
 * @param request Next.js server request
 * @param params Route parameters
 * @returns Next.js server response with repository data
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const displayFormat = request.nextUrl.searchParams.get('displayFormat') === 'true';
    
    const repository = await RepositoryService.getById(id);
    
    if (!repository) {
      return NextResponse.json(
        {
          success: false,
          error: 'Repository not found',
          message: `No repository found with id "${id}"`
        },
        { status: 404 }
      );
    }
    
    // Convert to display format if requested
    const data = displayFormat
      ? RepositoryService.toDisplayFormat([repository])[0]
      : repository;
    
    return NextResponse.json({
      success: true,
      data
    });
  } catch (error) {
    console.error(`Error fetching repository with id "${params.id}":`, error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch repository',
        message: (error as Error).message
      },
      { status: 500 }
    );
  }
} 