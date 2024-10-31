import { isObject } from "../type-guards/is-object";

/**
 * Recursively checks if two values are deeply equal.
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns True if the values are deeply equal, otherwise false.
 */
export function deepEqual(a: unknown, b: unknown): boolean {
  // Check for strict equality
  if (a === b) return true;

  // If types are different, not equal
  if (typeof a !== typeof b) return false;

  // If not objects or arrays, and not equal (handled above), return false
  if (typeof a !== "object" || a === null || b === null) return false;

  // Handle arrays
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return false; // One is array, other is not
    if (a.length !== b.length) return false; // Different lengths

    // Recursively compare array elements
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  // At this point, both a and b are non-null objects (excluding arrays)
  if (isObject(a) && isObject(b)) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    // Different number of keys
    if (aKeys.length !== bKeys.length) return false;

    // Check for the presence of each key and recursively compare values
    for (const key of aKeys) {
      if (!b.hasOwnProperty(key)) return false; // Key missing in b
      if (!deepEqual(a[key], b[key])) return false; // Values not equal
    }

    return true;
  }

  // Fallback for cases not handled above
  return false;
}
