import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/meu-portfolio/', // Altere para o nome exato do repositório no GitHub
});
