export const isString = (val: unknown): val is string =>
  typeof val === 'string';

export const isNullable = (val?: unknown): val is undefined | null =>
  typeof val === 'undefined' || val === null;
