// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extract numeric value from credit string for sorting
 * Returns the maximum value found in the string
 */
export function extractCreditValue(credits: string | undefined): number {
  if (!credits) return 0;
  
  // Match numbers with optional commas and K/M suffixes
  const matches = credits.match(/[\d,]+(?:\.\d+)?[KkMm]?/g);
  if (!matches) return 0;
  
  const values = matches.map(match => {
    let num = parseFloat(match.replace(/,/g, ''));
    if (match.toLowerCase().includes('k')) num *= 1000;
    if (match.toLowerCase().includes('m')) num *= 1000000;
    return num;
  });
  
  return Math.max(...values);
}

/**
 * Format large numbers with K/M suffixes
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `$${(num / 1000000).toFixed(1)}M+`;
  }
  if (num >= 1000) {
    return `$${(num / 1000).toFixed(0)}K+`;
  }
  return `$${num}`;
}
