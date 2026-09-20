export interface ScalableIngredient {
  name: string;
  amount?: number;
  unit?: string;
  originalText?: string;
}

export function scaleIngredient(
  ingredient: ScalableIngredient,
  defaultServings: number,
  targetServings: number
): ScalableIngredient {
  if (!Number.isInteger(defaultServings) || defaultServings <= 0) {
    throw new Error('defaultServings must be a positive integer');
  }
  if (!Number.isInteger(targetServings) || targetServings <= 0) {
    throw new Error('targetServings must be a positive integer');
  }
  if (ingredient.amount === undefined || !ingredient.unit) return ingredient;

  return {
    ...ingredient,
    amount: Math.round((ingredient.amount * targetServings * 10) / defaultServings) / 10
  };
}
