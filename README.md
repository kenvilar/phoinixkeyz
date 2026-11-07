# Phoinix Keyz

A music artist website built with HTML, Sass, Bootstrap, and Parcel.

## Local development

Use Node.js 22, then run:

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
```

Parcel compiles the JavaScript and Sass, bundles referenced images and fonts,
and writes the finished site to `dist/`. Relative asset paths support the
`/phoinixkeyz/` GitHub Pages URL. Below-the-fold images use native browser
lazy loading.

## GitHub Pages

The **Build and deploy to GitHub Pages** workflow builds and publishes `dist/`
on pushes to `main`. Pull requests run the build without deploying.
Set **Settings → Pages → Source** to **GitHub Actions**.

No API keys or repository secrets are needed for deployment. The existing
sample social links, shop and ticket controls, and newsletter form need their
real destinations or service before they can accept orders or subscriptions.
