import { describe, test, expect } from 'vitest';
import { validateSighting } from './sightingValidator';

describe('validateSighting() Unit Test Suite', () => {
  // ... rest of the 3 test cases remain exactly the same ...
  
  // Test Case 1: Normal Valid Case
  test('should pass validation when all required fields are correctly populated', () => {
    const validSighting = {
      observer_name: 'Emilio',
      sighting_date: '2026-06-28',
      location_name: 'Gosford Road'
    };
    
    const result = validateSighting(validSighting);
    expect(result.isValid).toBe(true);
    expect(result.error).toBeNull();
  });

  // Test Case 2: Normal Invalid Case
  test('should fail validation if a required field like location_name is missing', () => {
    const invalidSighting = {
      observer_name: 'Andrew',
      sighting_date: '2026-06-28',
      location_name: '' // Missing field
    };

    const result = validateSighting(invalidSighting);
    expect(result.isValid).toBe(false);
    expect(result.error).toContain('Missing required fields');
  });

  // Test Case 3: Edge Case
  test('should fail validation if fields contain only whitespace spaces or spam characters', () => {
    const edgeCaseSighting = {
      observer_name: 'E ', // Too short after trimming
      sighting_date: '2026-06-28',
      location_name: '   ' // White spaces only
    };

    const result = validateSighting(edgeCaseSighting);
    expect(result.isValid).toBe(false);
    expect(result.error).toContain('minimum length criteria');
  });
});