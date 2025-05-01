import { NextRequest, NextResponse } from 'next/server';
import { RepositoryService } from '@/lib/data';
import { FilterOptions, SortField, SortDirection } from '@/lib/types';
// Import server-init to ensure data is loaded
import '@/lib/server-init';

/**
 * GET handler for repositories API
 * @param request Next.js server request
 * @returns Next.js server response with repository data
 */
export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const searchParams = request.nextUrl.searchParams;
    
    // Parse filter options
    const filterOptions: FilterOptions = {};
    
    // Search term
    const searchTerm = searchParams.get('search');
    if (searchTerm) {
      filterOptions.searchTerm = searchTerm;
    }
    
    // Languages filter
    const languages = searchParams.get('languages');
    if (languages) {
      filterOptions.languages = languages.split(',');
    }
    
    // Minimum stars filter
    const minStars = searchParams.get('minStars');
    if (minStars && !isNaN(parseInt(minStars))) {
      filterOptions.minStars = parseInt(minStars);
    }
    
    // Date range filter
    const fromDate = searchParams.get('fromDate');
    const toDate = searchParams.get('toDate');
    if (fromDate || toDate) {
      filterOptions.dateRange = {};
      
      if (fromDate) {
        filterOptions.dateRange.from = new Date(fromDate);
      }
      
      if (toDate) {
        filterOptions.dateRange.to = new Date(toDate);
      }
    }
    
    // Topics filter
    const topics = searchParams.get('topics');
    if (topics) {
      filterOptions.topics = topics.split(',');
    }
    
    // Archive status filter
    const archived = searchParams.get('archived');
    if (archived !== null) {
      filterOptions.archived = archived === 'true';
    }
    
    // Search for repositories with the given filters
    let repositories = await RepositoryService.search(filterOptions);
    
    // Handle sorting
    const sortField = searchParams.get('sortField') as SortField | null;
    const sortDirection = searchParams.get('sortDirection') as SortDirection | null;
    
    if (sortField && Object.values(SortField).includes(sortField as SortField)) {
      repositories = RepositoryService.sort(repositories, {
        field: sortField as SortField,
        direction: sortDirection === SortDirection.ASC ? SortDirection.ASC : SortDirection.DESC
      });
    } else {
      // Default sorting
      repositories = RepositoryService.sort(repositories, {
        field: SortField.STARS,
        direction: SortDirection.DESC
      });
    }
    
    // Convert to display format if requested
    const displayFormat = searchParams.get('displayFormat') === 'true';
    const data = displayFormat
      ? RepositoryService.toDisplayFormat(repositories)
      : repositories;
    
    // Return the repositories
    return NextResponse.json({
      success: true,
      data,
      count: repositories.length,
      filters: filterOptions
    });
  } catch (error) {
    console.error('Error handling repository request:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch repositories',
        message: (error as Error).message
      },
      { status: 500 }
    );
  }
} 