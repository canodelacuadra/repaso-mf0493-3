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

## 1. ¿Qué tipo de web vamos a crear?

Antes de utilizar herramientas, debemos saber qué queremos construir.

### Tipos de web que debemos conocer

| Tipo | Características | Ejemplo |
| --- | --- | --- |
| Web estática | Contenido preparado, HTML, CSS y JS; puede servirse sin generar páginas en cada petición | Web corporativa sencilla |
| Web dinámica | Genera o modifica contenidos según usuarios, datos o peticiones | Portal, aplicación web |
| CMS | Permite gestionar contenidos sin programar cada página | WordPress |
| Ecommerce | Permite mostrar productos, gestionar pedidos y vender | WooCommerce |
| SPA | Aplicación que cambia vistas sin recargar completamente la página | Aplicación con React |

### Tecnologías para crear webs

En los últimos días hemos conocido otras formas de crear sitios web. No debemos confundir las herramientas ni pensar que todas sirven exactamente para lo mismo.

| Tecnología | ¿Qué es? | ¿Para qué se utiliza? |
| --- | --- | --- |
| HTML | Lenguaje de marcado | Estructurar contenidos |
| CSS | Lenguaje de estilos | Diseñar y dar formato |
| JavaScript | Lenguaje de programación | Añadir interactividad |
| React | Biblioteca de JavaScript | Crear interfaces interactivas |
| WordPress | CMS | Gestionar webs y contenidos |
| Astro | Framework web | Crear webs rápidas, especialmente de contenido |
| SSG | Técnica de generación estática | Generar HTML antes de que el usuario solicite la página |

### Astro

Astro permite crear webs que pueden generar páginas HTML estáticas previamente, en lugar de construir todo el contenido en el navegador cada vez que un usuario accede.

Esto resulta especialmente interesante para:

- Webs corporativas.
- Blogs.
- Documentación.
- Landing pages.
- Webs con mucho contenido y poca interacción compleja.

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
- ¿Qué ventaja tiene utilizar un CMS?
- ¿Todas las páginas web necesitan una base de datos?
- ¿Qué tipo de web elegiríamos para una tienda online?

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

**Git**  
Controla los cambios realizados en los archivos de un proyecto.

**GitHub**  
Almacena y comparte repositorios de código en Internet.

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

