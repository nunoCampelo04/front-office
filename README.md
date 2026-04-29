  # EyesEverywhere — Front Office

  Public-facing website for the EyesEverywhere project. Built with plain HTML, CSS and JavaScript — no build tools, no
  frameworks. The site presents the project, lists areas of activity and lets citizens submit incidents via a form.
  Submitted incidents are stored in `localStorage` (kept on the device, not sent to a backend).

  This is the public/marketing side of the same project that has the PWA (`eyes-everywhere-pwa`) for fieldwork and the
  back office (`eyes-everywhere-back-office`) for admin.

  ## Pages

  - `index.html` — landing page with stats and areas of activity
  - `about.html` — about the project
  - `ocorrencias.html` — submit and view incidents
  - `contacto.html` — contact info

  ## Project layout

  .
  ├── index.html
  ├── about.html
  ├── ocorrencias.html
  ├── contacto.html
  ├── front-office.js          # form submission logic
  ├── storage-service.js       # localStorage helpers
  ├── css/
  │   └── styles.css
  ├── img/                     # site images and tipologia thumbnails
  └── eyes-everywhere-site/    # duplicate copy of the site (older snapshot)

  ## Run

  No build step. Just open `index.html` in a browser, or serve the folder statically:

  ```bash
  python -m http.server 5500
  # or
  npx serve .

  Then open http://localhost:5500.
```
  Notes

  - The numbers shown in the landing cards (Auditorias, Ocorrências resolvidas) are pulled at runtime — the others are
  hard-coded in the HTML.
  - All copy is in Portuguese.
  - Font Awesome is loaded from a CDN, so an internet connection is needed for the icons to show up.
  - The repo includes an eyes-everywhere-site/ folder that looks like an older copy of the same site. It's safe to
  remove if it isn't being used.
