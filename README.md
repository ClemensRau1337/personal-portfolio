# clemensrau.de — Landingpage (React + Vite + Tailwind)

**Features**
- Schauspiel/IT Toggle, zentraler Hero mit Foto
- Warmes Farbschema passend zum Portrait
- Sedcard + Showreel + Projekte
- IT-Skills + Repos
- Kontaktformular (FormSubmit, AJAX + Fallback)
- Tests mit Vitest + Testing Library

## Setup
```bash
npm i
npm run dev
```
Öffne `http://localhost:5173`.

## Build & Deploy (FTP)
```bash
npm run build
```
Den **Inhalt** des Ordners `dist/` auf deinen Webspace (z. B. `/public_html`) hochladen.

## Bild & Mail konfigurieren
- Ersetze `public/portrait.jpg` bei Bedarf.
- E-Mail im Formular ist `mail@clemensrau.de`. Anpassen: In `src/ClemensRauLanding.jsx` `FORM_ENDPOINT` **und** `action` ändern.

## Tests
```bash
npm test
```
