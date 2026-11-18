# Repaso general de implantación de aplicaciones web

> **Sesión de repaso** · Preparación de las pruebas de evaluación
>
> **Módulo:** IFCD0210 · MF0493_3 — Implantación de aplicaciones web
>
> **Objetivo:** recordar los conceptos fundamentales del módulo, relacionar las herramientas que hemos utilizado y comprobar qué sabemos hacer sin ayuda del ordenador.

## Contenidos

- [1. ¿Qué tipo de web vamos a crear?](#1-qué-tipo-de-web-vamos-a-crear)
- [2. WordPress: el CMS](#2-wordpress-el-cms)
- [3. Temas, plugins y personalización](#3-temas-plugins-y-personalización)
- [4. WooCommerce: creación de una tienda online](#4-woocommerce-creación-de-una-tienda-online)
- [5. SEO: hacer que nos encuentren](#5-seo-hacer-que-nos-encuentren)
- [6. Seguridad, HTTPS y RGPD](#6-seguridad-https-y-rgpd)
- [7. Publicación y despliegue de una web](#7-publicación-y-despliegue-de-una-web)
- [8. Uso básico de Git](#8-uso-básico-de-git)

## 1. ¿Qué tipo de web vamos a crear?

Antes de elegir herramientas, debemos saber qué queremos construir. El tipo de web y su finalidad determinan la tecnología.

> **Idea clave:** primero la necesidad, después la herramienta.

### Cómo se genera la web

| Tipo | Cómo funciona | Cuándo encaja |
| --- | --- | --- |
| Web estática (SSG) | El HTML se genera antes de publicar; todos los usuarios reciben las mismas páginas | Contenido estable y poca interacción |
| Web dinámica | El servidor genera la página en cada petición, normalmente con una base de datos | Contenido que cambia o depende del usuario |
| SPA | El navegador carga una aplicación y cambia de vistas sin recargar la página | Interfaces muy interactivas |

Un CMS o una tienda online no son otro tipo de generación: son soluciones que se montan sobre una web dinámica.

### Del proyecto a la tecnología

| Quiero… | Tecnología habitual | Por qué |
| --- | --- | --- |
| Una web corporativa, personal o de documentación | HTML, CSS y JS + Astro (SSG) | Contenido estable, rápida y fácil de alojar |
| Un blog o una web que actualiza otra persona | WordPress (CMS) | Panel de administración sin tocar código |
| Vender productos | WordPress + WooCommerce | Catálogo, pedidos, pagos y envíos |
| Una aplicación con mucha interacción | React (SPA) + API | Interfaz que cambia sin recargar |
| Un portal con usuarios y datos | Web dinámica (servidor + base de datos) | Contenido personalizado por usuario |

### No mezclemos niveles

- **HTML, CSS y JavaScript** son los lenguajes base: estructura, estilos e interactividad.
- **React** es una biblioteca de JavaScript para crear interfaces.
- **Astro** es un framework para webs de contenido; genera HTML estático.
- **WordPress** es un CMS y **WooCommerce** un plugin de ecommerce.
- **SSG** es una técnica de generación estática, no un lenguaje ni una herramienta.

### Astro en una idea

Astro permite generar las páginas HTML antes de que el usuario las solicite, en lugar de construirlas en el navegador en cada visita. Por eso encaja bien en webs de contenido que cambian poco y necesitan cargar rápido.

> **No necesitamos memorizar**
>
> - Comandos de Astro.
> - Configuración avanzada.
> - Sintaxis de componentes.
> - Programación avanzada.

> **Sí debemos comprender**
>
> - Que existen diferentes herramientas para construir webs.
> - Que WordPress es un CMS y Astro es un framework.
> - Que React se utiliza para crear interfaces.
> - Que una web estática puede ser rápida, sencilla de alojar y eficiente.
> - Que la elección de la tecnología depende del proyecto.

### Recordamos

- ¿Qué diferencia hay entre una web estática y una dinámica?
- ¿Qué significa SSG y qué ventaja tiene?
- Una empresa solo quiere presentar sus servicios: ¿qué web y qué tecnología elegirías?
- ¿Y si quiere vender productos?
- ¿Qué aporta un CMS? ¿Cuándo no lo necesitas?
- ¿En qué se diferencian React, Astro y WordPress?
- ¿Todas las webs necesitan una base de datos?

## 2. WordPress: el CMS

WordPress es un CMS (Content Management System) que permite crear y gestionar sitios web desde un panel de administración.

### Elementos fundamentales

| Elemento | ¿Para qué sirve? |
| --- | --- |
| Escritorio | Panel principal de administración |
| Entradas | Publicar contenidos, noticias y artículos |
| Páginas | Contenidos más permanentes, como Contacto o Nosotros |
| Medios | Gestionar imágenes, vídeos y documentos |
| Temas | Cambiar el diseño y apariencia de la web |
| Plugins | Añadir nuevas funcionalidades |
| Usuarios | Gestionar cuentas y permisos |
| Menús | Organizar la navegación de la web |
| Ajustes | Configurar aspectos generales del sitio |

### Preguntas rápidas

- ¿Qué diferencia hay entre una entrada y una página?
- ¿Dónde instalamos funcionalidades nuevas?
- ¿Qué elemento cambia la apariencia de WordPress?
- ¿Dónde subimos las imágenes?
- ¿Por qué no debemos utilizar siempre el usuario administrador?

## 3. Temas, plugins y personalización

### Tema (Theme)

Controla principalmente la apariencia y la estructura visual de la web.

Puede definir:

- Colores.
- Tipografías.
- Distribución.
- Cabecera.
- Pie de página.
- Diseño de páginas.

Ejemplo: GeneratePress.

### Plugin

Añade funcionalidades a WordPress.

Ejemplos:

| Necesidad | Plugin o solución |
| --- | --- |
| Formulario de contacto | Contact Form 7 |
| Tienda online | WooCommerce |
| Optimización de imágenes | Smush |
| Seguridad | Wordfence u otros |
| SEO | Plugins de SEO |

> **No confundir**
>
> - Tema → cómo se ve la web.
> - Plugin → qué funcionalidades incorpora.

### Mini reto oral

Una empresa quiere:

- Cambiar el aspecto de su web.
- Crear un formulario de contacto.
- Vender productos.
- Mejorar el posicionamiento.

¿Qué soluciones utilizaríamos para cada necesidad?

## 4. WooCommerce: creación de una tienda online

WooCommerce es un plugin que transforma WordPress en una plataforma de comercio electrónico.

### Lo que debemos recordar

| Concepto | Significado |
| --- | --- |
| Producto | Artículo o servicio que vendemos |
| Producto simple | Producto sin variaciones complejas |
| Producto variable | Producto con diferentes opciones, como talla o color |
| Categoría | Agrupa productos similares |
| Pedido | Compra realizada por un cliente |
| Cupón | Código que permite aplicar un descuento |
| Pasarela de pago | Sistema que permite realizar pagos |
| Método de envío | Forma en la que el pedido llega al cliente |

### Gestión de pedidos

Un pedido puede pasar por diferentes estados:

**Pendiente → Procesando → Completado**

- **Pendiente:** el pedido está pendiente de confirmación o pago.
- **Procesando:** el pedido está siendo preparado o gestionado.
- **Completado:** el pedido se ha terminado de gestionar, normalmente entregado o finalizado.

### Marketing básico en una tienda

- Cupones de descuento.
- Productos relacionados.
- Ventas cruzadas.
- Ofertas.
- Descuentos por cantidad.

### Preguntas rápidas

- ¿Qué diferencia hay entre un producto simple y uno variable?
- ¿Para qué sirve un cupón?
- ¿Qué necesitamos para cobrar a un cliente?
- ¿Qué diferencia hay entre gestionar un pedido y gestionar un producto?

## 5. SEO: hacer que nos encuentren

SEO (Search Engine Optimization) es el conjunto de acciones que realizamos para mejorar la visibilidad de una web en los buscadores.

### SEO básico

- Utilizar títulos claros.
- Crear contenido útil y original.
- Utilizar palabras clave relacionadas con el contenido.
- Organizar la web mediante páginas y categorías.
- Optimizar las imágenes.
- Utilizar enlaces internos.
- Crear una buena experiencia de usuario.

### SEO técnico

| Elemento | Función |
| --- | --- |
| Sitemap | Indica a los buscadores las URLs de nuestra web |
| Robots.txt | Da instrucciones a los rastreadores |
| HTTPS | Protege la comunicación con la web |
| Search Console | Permite supervisar la presencia de la web en Google |
| Datos estructurados | Facilitan información organizada sobre el contenido |
| Core Web Vitals | Ayudan a evaluar aspectos de experiencia y rendimiento |

### Conceptos que vimos más adelante

- SEO On Page → optimización dentro de la página.
- SEO Off Page → señales externas, enlaces y reputación.
- SEO técnico → aspectos técnicos que facilitan el rastreo, indexación y funcionamiento.
- Página pilar → contenido principal de un tema.
- Cluster de contenidos → conjunto de contenidos relacionados.
- Canibalización → varias páginas compiten por búsquedas similares.

### Preguntas rápidas

- ¿Para qué sirve un sitemap?
- ¿Qué es una palabra clave?
- ¿Qué diferencia hay entre SEO On Page y SEO técnico?
- ¿SEO garantiza aparecer primero en Google?

## 6. Seguridad, HTTPS y RGPD

Una web debe ser funcional, pero también debe ser segura y respetar la privacidad de los usuarios.

### Seguridad básica

- Utilizar contraseñas seguras.
- Mantener WordPress actualizado.
- Actualizar temas y plugins.
- Eliminar plugins que no se utilizan.
- Realizar copias de seguridad.
- Limitar permisos de los usuarios.
- Utilizar HTTPS.
- Evitar instalar plugins de fuentes desconocidas.

### HTTPS y certificado SSL/TLS

Permite cifrar la comunicación entre el navegador del usuario y el servidor.

> **HTTPS = comunicación protegida**

Ayuda a proteger los datos transmitidos y permite comprobar la identidad del servidor mediante certificados.

### RGPD y aspectos legales

Una web que recoge datos personales debe tener en cuenta:

- Política de privacidad.
- Información sobre el responsable del tratamiento.
- Finalidad de la recogida de datos.
- Formularios correctamente informados.
- Protección de los datos.
- Gestión adecuada de cookies y consentimiento cuando corresponda.
- Aviso legal, según las obligaciones aplicables.

### Preguntas rápidas

- ¿Por qué no debemos utilizar la misma contraseña para todo?
- ¿Para qué hacemos copias de seguridad?
- ¿Qué protege HTTPS?
- ¿Podemos recoger los datos de cualquier usuario sin informar?
- ¿Qué debemos tener en cuenta cuando instalamos plugins?

## 7. Publicación y despliegue de una web

Una web no está terminada cuando funciona en nuestro ordenador. Si queremos que otras personas puedan acceder a ella, tenemos que publicarla.

### Conceptos fundamentales

| Concepto | Función |
| --- | --- |
| Localhost | Web accesible desde el entorno local |
| XAMPP | Entorno local que incluye herramientas como Apache, PHP y MariaDB |
| LocalWP | Entorno local específico para desarrollar WordPress |
| Hosting | Servicio donde alojamos nuestra web |
| Dominio | Nombre con el que identificamos una web en Internet |
| FTP | Protocolo para transferir archivos |
| FileZilla | Programa que permite conectarnos mediante FTP/SFTP |
| Git | Sistema de control de versiones |
| GitHub | Plataforma para alojar repositorios Git |
| Netlify | Plataforma de despliegue de webs |

### ¿Qué hace cada herramienta?

**Git y GitHub**  
Git controla los cambios en local y GitHub aloja la copia remota. Su uso diario se repasa en el apartado 8.

**Netlify**  
Permite desplegar y publicar webs, por ejemplo desde un repositorio Git.

**FileZilla**  
Permite transferir archivos entre nuestro ordenador y un servidor compatible.

### Recordamos el flujo de publicación

> **Ordenador local** → **Git / GitHub** → **Netlify / Hosting** → **Usuario de Internet**

| Fase | Qué ocurre |
| --- | --- |
| Ordenador local | Desarrollamos y comprobamos la web |
| Git / GitHub | Versionamos y compartimos el proyecto |
| Netlify / Hosting | Desplegamos y publicamos la web |
| Usuario de Internet | Accede a la web publicada |

### Preguntas rápidas

- ¿Qué diferencia hay entre Git y GitHub?
- ¿Qué es un hosting?
- ¿Para qué sirve FileZilla?
- ¿Qué hace Netlify?
- ¿Qué diferencia hay entre trabajar en local y publicar en Internet?

## 8. Uso básico de Git

Git es un sistema de control de versiones que guarda el historial de cambios de un proyecto. GitHub aloja una copia remota. En el apartado 7 vimos dónde encaja dentro de la publicación; aquí repasamos el uso diario.

### Conceptos clave

| Concepto | Qué es |
| --- | --- |
| Repositorio | Carpeta del proyecto con su historial (`.git`) |
| Directorio de trabajo | Los archivos tal como los editamos |
| Staging (índice) | Zona donde preparamos lo que irá al próximo commit |
| Commit | Instantánea de los cambios con un mensaje |
| Rama | Línea de trabajo independiente |
| Remoto (`origin`) | Copia del repositorio en GitHub u otro servidor |

### El flujo básico

> Editar → `git status` → `git add` → `git commit` → `git push`

| Comando | Qué hace | Cuándo usarlo |
| --- | --- | --- |
| `git init` | Crea el repositorio | Al empezar un proyecto |
| `git clone <url>` | Copia un repositorio remoto | Al incorporarte a un proyecto |
| `git status` | Muestra el estado de los archivos | Antes y después de cada paso |
| `git add <archivo>` / `git add .` | Prepara cambios para el commit | Tras revisar qué vas a subir |
| `git commit -m "mensaje"` | Guarda una instantánea | Cada cambio con sentido |
| `git log --oneline` | Muestra el historial resumido | Para revisar qué se hizo |
| `git push` | Sube los commits al remoto | Para compartir |
| `git pull` | Trae los cambios del remoto | Antes de empezar a trabajar |

### Ramas

Una rama permite trabajar en una funcionalidad sin tocar `main`.

| Comando | Qué hace |
| --- | --- |
| `git branch` | Lista las ramas |
| `git switch -c nombre` | Crea una rama y cambia a ella |
| `git switch main` | Vuelve a la rama principal |
| `git merge nombre` | Integra la rama en la actual |

> **Uso típico:** una rama por funcionalidad; cuando está terminada, se integra en `main`.

### Deshacer cambios con `git reset --hard`

`git reset --hard` devuelve el repositorio al estado del último commit: elimina los cambios no confirmados del directorio de trabajo y del staging.

`git reset --hard HEAD~1` además mueve la rama al commit anterior, como si el último commit no se hubiera hecho.

| Situación | Comando | Resultado |
| --- | --- | --- |
| Cambios sin confirmar (en staging o solo en el archivo) | `git reset --hard` | Vuelve al último commit y descarta esos cambios |
| Último commit todavía sin subir | `git reset --hard HEAD~1` | Elimina el commit y sus cambios |
| Commit ya subido a GitHub | No usar `reset --hard` | Cambiaría el historial que ya tienen los demás |

> **Cuidado:** los cambios descartados no se pueden recuperar y `reset --hard` tampoco elimina los archivos nuevos que Git no sigue. Úsalo solo cuando estés seguro y nunca sobre commits que ya has compartido.

### Archivos que no deben subirse

Antes del primer commit conviene crear un archivo `.gitignore` con lo que no queremos versionar:

- `node_modules/` (dependencias que se reinstalan con `npm install`).
- `dist/` (archivos generados al compilar).
- `.env` (datos y contraseñas).

### Errores típicos

- "not a git repository" → carpeta incorrecta o falta `git init`.
- "nothing to commit" → no hay cambios o falta `git add`.
- Conflicto al hacer `git pull` → resolver las marcas, `git add` y `git commit`.
- ¿Qué he cambiado? → `git status` y `git diff`.
- Subí `node_modules/` → añadirlo a `.gitignore`.

### Recordamos

- ¿Qué diferencia hay entre Git y GitHub?
- ¿Qué pasos hay desde que editas un archivo hasta que lo subes?
- ¿Qué hace `git add`? ¿Y `git commit`?
- ¿Para qué sirve `git status`?
- ¿Qué es una rama y cuándo crearías una?
- ¿Qué hace `git reset --hard` y qué riesgo tiene?
- ¿Qué archivos incluirías en `.gitignore`?

