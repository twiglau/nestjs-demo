export function toBoolean(value: unknown): boolean {
  if (typeof value === 'string') {
    const cleanedValue = value.trim().toLowerCase();
    return ['true', '1', 'yes'].includes(cleanedValue);
  } else if (typeof value === 'number') {
    return value !== 0;
  } else if (typeof value === 'boolean') {
    return value;
  }

  return false;
}
