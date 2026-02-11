# Architektura projektu

Tento projekt je postaven na frameworku **Next.js** s využitím **TypeScriptu** a **Tailwind CSS** pro rychlý vývoj moderního webu. Struktura projektu je navržena pro přehlednost, škálovatelnost a snadnou údržbu.

## Hlavní technologie
- **Next.js** – server-side rendering, statické generování stránek, API routes
- **TypeScript** – typová bezpečnost, lepší údržba kódu
- **Tailwind CSS** – utility-first CSS framework pro rychlý styling

## Struktura složek

- `app/` – hlavní složka pro stránky a layouty (Next.js App Router)
  - `layout.tsx` – hlavní layout aplikace
  - `page.tsx` – výchozí stránka
  - další stránky a podsložky (např. podmínky, zálohy, testovací sekce)
- `components/` – znovupoužitelné React komponenty
  - `sections/` – sekce pro jednotlivé části stránky (např. hero, about, contact)
  - `navigation/` – navigační komponenty (navbar, menu)
  - `hooks/` – vlastní React hooky
- `config/` – konfigurační soubory (breakpointy, fonty, nastavení webu)
- `public/` – statická aktiva (obrázky, favicony, obsah)
- `styles/` – globální a komponentové styly (Tailwind, vlastní CSS)
- `types/` – sdílené TypeScript typy
- `scripts/` – pomocné skripty (např. generování favicon)
- `docs/` – dokumentace projektu

## Hlavní principy návrhu
- **Modularita** – komponenty jsou rozděleny podle funkce a znovupoužitelnosti
- **Separation of Concerns** – logika, prezentace a konfigurace jsou odděleny
- **Typová bezpečnost** – důsledné využití TypeScriptu
- **Responsivita** – návrh s ohledem na různé velikosti zařízení (Tailwind breakpoints)
- **Přístupnost** – důraz na a11y (accessibility) v komponentách

## Popis hlavních komponent
- **Layouty** – určují základní strukturu stránky (header, footer, hlavní obsah)
- **Sekce** – jednotlivé části landing page (hero, služby, reference, kontakt)
- **Formuláře** – validace, odesílání, zpětná vazba uživateli
- **Navigace** – desktopová i mobilní, včetně rozbalovacích menu

## Další poznámky
- Projekt je připraven na rozšiřování o další stránky a sekce.
- Konfigurace (např. breakpoints, fonty) je centralizovaná v `config/`.
- Statická aktiva jsou organizována v `public/` pro snadný přístup.

---

Pro detailnější popis konkrétních částí nebo rozšíření architektury (např. API, deployment, CI/CD) upravte tento dokument dle potřeby.
