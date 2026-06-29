/**
 * Validates a kit fox sighting entry before submission.
 * Returns an object with { isValid: boolean, error: string|null }
 */
export function validateSighting(sighting) {
  if (!sighting) {
    return { isValid: false, error: "Sighting data is completely missing." };
  }

  const { observer_name, sighting_date, location_name } = sighting;

  // 1. Normal Invalid Case: Check for required fields
  if (!observer_name || !sighting_date || !location_name) {
    return { isValid: false, error: "Missing required fields: observer name, date, or location." };
  }

  // 2. Edge Case: Prevent empty whitespace strings or single-character spam
  if (observer_name.trim().length < 2 || location_name.trim().length < 3) {
    return { isValid: false, error: "Names must meet minimum length criteria (Observer >= 2, Location >= 3)." };
  }

  // 3. Normal Valid Case
  return { isValid: true, error: null };
}