import { Repository } from '../repository';

// This file doesn't actually run tests - it's a type check to verify
// that our Repository interface works as expected with different data shapes

// Sample 1: Repository with all fields
const completeRepository: Repository = {
  id: 'google-a2a',
  name: 'google/A2A',
  owner: 'google',
  description: 'An open protocol enabling communication and interoperability between opaque agentic applications.',
  url: 'https://github.com/google/A2A',
  stars: 420,
  forks: 32,
  issues: 15,
  lastUpdated: new Date('2023-07-15'),
  language: 'TypeScript',
  topics: ['ai', 'agents', 'protocol', 'a2a'],
  isArchived: false
};

// Sample 2: Repository with minimum required fields
const minimalRepository: Repository = {
  id: 'minimal-repo',
  name: 'user/minimal-repo',
  owner: 'user',
  description: null,
  url: 'https://github.com/user/minimal-repo'
};

// Sample 3: Repository with some optional fields
const partialRepository: Repository = {
  id: 'partial-repo',
  name: 'org/partial-repo',
  owner: 'org',
  description: 'This is a partial repository with some optional fields',
  url: 'https://github.com/org/partial-repo',
  stars: 15,
  language: null
};

// Verify that types match correctly
const repositories: Repository[] = [
  completeRepository,
  minimalRepository,
  partialRepository
]; 