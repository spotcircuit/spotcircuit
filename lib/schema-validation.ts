/**
 * Schema validation utilities for structured data
 * Ensures all schema.org markup is valid and properly formatted
 */

export interface SchemaValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validates numeric values in schema properties
 */
export function validateNumericValue(value: any, fieldName: string): SchemaValidationResult {
  const result: SchemaValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  if (value === undefined || value === null) {
    result.warnings.push(`${fieldName} is not defined`);
    return result;
  }

  if (typeof value === 'string') {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      result.isValid = false;
      result.errors.push(`${fieldName} must be a valid number, got "${value}"`);
    }
  } else if (typeof value !== 'number') {
    result.isValid = false;
    result.errors.push(`${fieldName} must be a number, got ${typeof value}`);
  }

  return result;
}

/**
 * Validates required schema properties
 */
export function validateRequiredFields(
  schema: Record<string, any>,
  requiredFields: string[]
): SchemaValidationResult {
  const result: SchemaValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  for (const field of requiredFields) {
    if (!(field in schema) || schema[field] === undefined || schema[field] === null) {
      result.isValid = false;
      result.errors.push(`Required field "${field}" is missing`);
    }
  }

  return result;
}

/**
 * Validates URL format
 */
export function validateUrl(url: string, fieldName: string): SchemaValidationResult {
  const result: SchemaValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  try {
    new URL(url);
  } catch {
    result.isValid = false;
    result.errors.push(`${fieldName} must be a valid URL, got "${url}"`);
  }

  return result;
}

/**
 * Validates ISO 8601 date format
 */
export function validateISODate(date: string, fieldName: string): SchemaValidationResult {
  const result: SchemaValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  const iso8601Regex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?)?$/;
  
  if (!iso8601Regex.test(date)) {
    result.isValid = false;
    result.errors.push(`${fieldName} must be in ISO 8601 format, got "${date}"`);
  }

  return result;
}

/**
 * Sanitizes schema object by removing undefined values
 */
export function sanitizeSchema(schema: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {};
  
  for (const [key, value] of Object.entries(schema)) {
    if (value !== undefined && value !== null) {
      if (typeof value === 'object' && !Array.isArray(value)) {
        const sanitizedNested = sanitizeSchema(value);
        if (Object.keys(sanitizedNested).length > 0) {
          sanitized[key] = sanitizedNested;
        }
      } else if (Array.isArray(value)) {
        const sanitizedArray = value
          .filter(item => item !== undefined && item !== null)
          .map(item => typeof item === 'object' ? sanitizeSchema(item) : item);
        if (sanitizedArray.length > 0) {
          sanitized[key] = sanitizedArray;
        }
      } else {
        sanitized[key] = value;
      }
    }
  }
  
  return sanitized;
}

/**
 * Merges multiple schema validation results
 */
export function mergeValidationResults(
  ...results: SchemaValidationResult[]
): SchemaValidationResult {
  const merged: SchemaValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  for (const result of results) {
    merged.isValid = merged.isValid && result.isValid;
    merged.errors.push(...result.errors);
    merged.warnings.push(...result.warnings);
  }

  return merged;
}