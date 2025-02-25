import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/semeler/meu-portfolio.git', // Altere para o nome exato do repositório no GitHub
});
