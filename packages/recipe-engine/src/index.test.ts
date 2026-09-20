import { describe, expect, it } from 'vitest';

import { scaleIngredient } from './index';

describe('scaleIngredient', () => {
  it('scales a measurable ingredient by servings', () => {
    expect(scaleIngredient({ name: '鸡肉', amount: 300, unit: 'g' }, 2, 5)).toEqual({
      name: '鸡肉', amount: 750, unit: 'g'
    });
  });

  it('keeps ambiguous quantities unchanged', () => {
    expect(scaleIngredient({ name: '盐', originalText: '适量' }, 2, 5)).toEqual({
      name: '盐', originalText: '适量'
    });
  });
});
