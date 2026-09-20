export type Unit = 'g' | 'kg' | 'ml' | 'l' | 'piece' | 'spoon' | 'to-taste';

export interface IngredientInput {
  name: string;
  amount?: number;
  unit?: Unit;
  originalText?: string;
}

export interface RecipeServingInput {
  defaultServings: number;
  targetServings: number;
}
