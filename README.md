# Mercadieval: sitio de descarga

Página en React + Vite para descargar Mercadieval Beta 1.0.

## Poner el enlace de descarga

En `src/App.jsx`, línea 2:

```js
const DOWNLOAD_URL = 'https://tu-enlace-de-descarga'
```

El build de Windows (zip con el .exe y la carpeta `_Data`) súbelo a itch.io, GitHub Releases, Google Drive o Mega y pega aquí ese enlace.

## Desarrollo

```bash
npm install
npm run dev
```

## Publicar

```bash
npm run build
```

Sube la carpeta `dist/` a Netlify, Vercel, Cloudflare Pages o GitHub Pages.
