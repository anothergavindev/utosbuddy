import { APP_LOCALE, APP_TIME_ZONE, CURRENCY } from "@/lib/constants";

const pesoFormatter = new Intl.NumberFormat(APP_LOCALE, {
  style: "currency",
  currency: CURRENCY,
  maximumFractionDigits: 2,
});

const pesoWholeFormatter = new Intl.NumberFormat(APP_LOCALE, {
  style: "currency",
  currency: CURRENCY,
  maximumFractionDigits: 0,
});

/**
 * Format an amount stored in centavos (integer) as PHP, e.g. 150050 → "₱1,500.50".
 * Store money as integer centavos everywhere to avoid floating-point errors.
 */
export function formatPeso(centavos: number, { whole = false } = {}) {
  const pesos = centavos / 100;
  return (whole ? pesoWholeFormatter : pesoFormatter).format(pesos);
}

/** Date/time in Philippine time regardless of the viewer's device setting. */
export function formatDateTime(
  value: Date | string | number,
  options: Intl.DateTimeFormatOptions = { dateStyle: "medium", timeStyle: "short" },
) {
  return new Intl.DateTimeFormat(APP_LOCALE, { timeZone: APP_TIME_ZONE, ...options }).format(
    new Date(value),
  );
}

/** Normalize PH mobile numbers to E.164 (+639XXXXXXXXX). Returns null if invalid. */
export function normalizePhMobile(input: string): string | null {
  const digits = input.replace(/\D/g, "");
  const local = digits.startsWith("63") ? digits.slice(2) : digits.replace(/^0/, "");
  return /^9\d{9}$/.test(local) ? `+63${local}` : null;
}
