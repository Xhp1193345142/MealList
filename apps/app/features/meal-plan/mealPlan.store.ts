import { create } from 'zustand';

type MealPlanState = {
  selectedRecipeIds: string[];
  toggleRecipe: (recipeId: string) => void;
  clear: () => void;
};

export const useMealPlanStore = create<MealPlanState>((set) => ({
  selectedRecipeIds: [],
  toggleRecipe: (recipeId) =>
    set((state) => ({
      selectedRecipeIds: state.selectedRecipeIds.includes(recipeId)
        ? state.selectedRecipeIds.filter((id) => id !== recipeId)
        : [...state.selectedRecipeIds, recipeId],
    })),
  clear: () => set({ selectedRecipeIds: [] }),
}));
