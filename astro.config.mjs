import { defineConfig } from 'astro/config';

// GitHub Pages publica en una subruta; Netlify publica en la raíz.
const enGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: enGitHubPages
    ? 'https://canodelacuadra.github.io/repaso-mf0493-3/'
    : process.env.URL || 'https://repaso-mf0493-3.netlify.app/',
  base: enGitHubPages ? '/repaso-mf0493-3' : '/',
  trailingSlash: 'always',
});
