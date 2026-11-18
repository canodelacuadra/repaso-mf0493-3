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

El repositorio está configurado para publicar automáticamente en GitHub Pages:

1. En el repositorio, entra en **Settings → Pages**.
2. En **Build and deployment → Source**, elige **GitHub Actions**.

El workflow `.github/workflows/deploy.yml` construye el sitio y publica `dist/` en cada
`push` a `main`. La URL resultante es <https://canodelacuadra.github.io/repaso-mf0493-3/>.
Si cambias el nombre del repositorio, actualiza `site` y `base` en `astro.config.mjs`.
