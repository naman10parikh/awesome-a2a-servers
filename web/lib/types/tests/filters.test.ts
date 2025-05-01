import { FilterOptions, SortField, SortDirection, SortOptions } from '../filters';

// This file doesn't actually run tests - it's a type check to verify 
// that our filter and sort type definitions work as expected

// Sample 1: Complete filter options
const fullFilterOptions: FilterOptions = {
  searchTerm: 'a2a protocol',
  languages: ['TypeScript', 'JavaScript', 'Go'],
  minStars: 10,
  dateRange: {
    from: new Date('2023-01-01'),
    to: new Date('2023-12-31')
  },
  topics: ['agent', 'protocol', 'ai'],
  archived: false
};

// Sample 2: Minimal filter options
const minimalFilterOptions: FilterOptions = {
  searchTerm: 'a2a'
};

// Sample 3: Partial filter options
const partialFilterOptions: FilterOptions = {
  languages: ['TypeScript'],
  minStars: 5,
  topics: ['agent']
};

// Sample sort options
const sortByStarsDesc: SortOptions = {
  field: SortField.STARS,
  direction: SortDirection.DESC
};

const sortByNameAsc: SortOptions = {
  field: SortField.NAME,
  direction: SortDirection.ASC
};

const sortByLastUpdated: SortOptions = {
  field: SortField.UPDATED,
  direction: SortDirection.DESC
};

// Verify that types match correctly
const filterOptions: FilterOptions[] = [
  fullFilterOptions,
  minimalFilterOptions,
  partialFilterOptions
];

const sortOptions: SortOptions[] = [
  sortByStarsDesc,
  sortByNameAsc,
  sortByLastUpdated
]; 