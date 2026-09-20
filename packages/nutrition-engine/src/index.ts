export function estimateKilocalories(grams: number, kcalPer100g: number): number {
  if (grams < 0 || kcalPer100g < 0) throw new Error('Nutrition values cannot be negative');
  return Math.round((grams * kcalPer100g) / 10) / 10;
}
