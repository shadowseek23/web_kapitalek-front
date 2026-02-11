Generování favicon pomocí `favicons` (skript automaticky vytvoří soubory v `public/favicons`)

Použití:

1. Zkontrolujte, že zdrojový obrázek existuje: `public/logo_circle.png` (velikost doporučená >= 512x512).
2. Spusťte: `npm run generate:favicons` (nebo `node scripts/generate-favicons.js`).
3. Výstup bude v `public/favicons` a HTML snippet v `public/favicons/favicons.html`.

Jak vložit do Next.js (app router):

Možnosti:

- Ručně: zkopírujte obsah `public/favicons/favicons.html` do `<head>` v `app/layout.tsx`.

- Programaticky (server component):

  import fs from 'fs'
  import path from 'path'

  export default function RootLayout(...) {
    const favHtml = fs.readFileSync(path.join(process.cwd(), 'public', 'favicons', 'favicons.html'), 'utf8')

    return (
      <html>
        <head dangerouslySetInnerHTML={{ __html: favHtml }} />
        ...
      </html>
    )
  }

Poznámky:
- Skript vytvoří ikony, manifest a další soubory (apple-touch, browserconfig, atd.).
- Pokud chcete změnit konfiguraci (cesta, barvy, jméno apod.), upravte `scripts/generate-favicons.js`.
