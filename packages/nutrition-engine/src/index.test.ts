import { describe, expect, it } from 'vitest';

import { estimateKilocalories } from './index';

describe('estimateKilocalories', () => {
  it('calculates calories from grams and per-100g values', () => {
    expect(estimateKilocalories(150, 120)).toBe(180);
  });
});
