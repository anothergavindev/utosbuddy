/** Global TypeScript type definitions shared across the app. */

/** Money as integer centavos. Use formatPeso() to display. */
export type Centavos = number & { readonly __brand: "Centavos" };

export type ISODateString = string;

export type ID = string;

export type UserRole = "customer" | "buddy" | "admin";

export type Paginated<T> = {
  items: T[];
  nextCursor: string | null;
};
