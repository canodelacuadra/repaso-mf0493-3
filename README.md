# Repaso MF0493_3

Web estática de repaso del módulo **MF0493_3 — Implantación de aplicaciones web** del certificado de profesionalidad **IFCD0210**.

Generada con [Astro](https://astro.build/) y publicada en GitHub Pages en:

<https://canodelacuadra.github.io/repaso-mf0493-3/>

## Contenido

Todo el material está en `temas.md`. No hay contenido duplicado: la web lee ese archivo y genera automáticamente:

- la portada con las 8 tarjetas;
- una página por apartado (`/tema/1` … `/tema/8`);
- una vista de temario completo para imprimir (`/imprimir`).

Para editar el temario, modifica `temas.md` manteniendo los encabezados `## 1. Título`, `## 2. Título`, etc. El bloque anterior al apartado 1 se usa como cabecera de la portada.

## Desarrollo local

Requiere Node.js 22.23.4 o superior.

```bash
npm install
npm run dev
```

Para comprobar la versión de producción:

```bash
npm run build
npm run preview
```

## Publicación

El proyecto sirve tanto para GitHub Pages como para Netlify. La ruta base se decide sola:
GitHub Pages usa `/repaso-mf0493-3/` y Netlify publica en la raíz.

### Netlify

El archivo `netlify.toml` ya trae el comando de construcción (`npm run build`) y el
directorio `dist/`. En Netlify solo hay que importar el repositorio; la variable
`URL` que Netlify define automáticamente se usa para las URLs absolutas.

### GitHub Pages

1. Sube los cambios a la rama `main`.
2. En el repositorio, entra en **Settings → Pages**.
3. En **Build and deployment → Source**, elige **GitHub Actions**.

El workflow `.github/workflows/deploy.yml` construye con `GITHUB_PAGES=true` y publica
`dist/`. Si cambias el nombre del repositorio, actualiza la ruta base en `astro.config.mjs`.
