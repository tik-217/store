import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

export default defineConfig([
  ...fsd.configs.recommended,
  {
    // ignore all mock files for all rules
    ignores: ['**/__mocks__/**', './src/shared/shadcn'],
    rules: {
      'fsd/no-reserved-folder-names': 'off',
      'fsd/insignificant-slice': 'warn',
    },
  },
]);
