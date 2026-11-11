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

## Publicar en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica el sitio en cada push a `main`.

1. Crea un repositorio vacío en GitHub (por ejemplo `mercadieval`).
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Sube el código:

```bash
git init -b main
git add .
git commit -m "Sitio de descarga de Mercadieval"
git remote add origin https://github.com/TU_USUARIO/mercadieval.git
git push -u origin main
```

La página quedará en `https://TU_USUARIO.github.io/mercadieval/` (el avance se ve en la pestaña **Actions**).
Las rutas son relativas (`base: './'`), así que funciona con cualquier nombre de repositorio.
