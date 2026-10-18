import { defineConfig } from 'eslint/config';
import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  {
    ignores: ['.agents/**', '.next/**', 'node_modules/**', 'dist/**'],
  },
  {
    extends: [...next, prettier],
  },
]);
