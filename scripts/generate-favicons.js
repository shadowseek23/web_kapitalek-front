#!/usr/bin/env node
const _fav = require("favicons");
const favicons = _fav && _fav.default ? _fav.default : _fav;
const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "..", "public", "logo_circle.png");
if (!fs.existsSync(source)) {
  console.error(`Source file not found: ${source}`);
  process.exit(1);
}
const outputDir = path.join(__dirname, "..", "public", "favicons");

const configuration = {
  path: "/favicons/",
  appName: "Kapitálek",
  appShortName: "Kapitálek",
  appDescription: "Kapitálek website",
  developerName: "Kapitálek",
  developerURL: null,
  dir: "auto",
  lang: "cs-CZ",
  background: "#ffffff",
  theme_color: "#ffffff",
  display: "standalone",
  orientation: "any",
  scope: "/",
  start_url: "/",
  version: "1.0",
  logging: true,
  pixel_art: false,
  loadManifestWithCredentials: false,
};

fs.mkdirSync(outputDir, { recursive: true });

favicons(source, configuration)
  .then((response) => {
    response.images.forEach((image) => fs.writeFileSync(path.join(outputDir, image.name), image.contents));
    response.files.forEach((file) => fs.writeFileSync(path.join(outputDir, file.name), file.contents));
    const htmlFile = path.join(outputDir, "favicons.html");
    fs.writeFileSync(htmlFile, response.html.join("\n"), "utf8");

    console.log("✅ Favicons generated in:", outputDir);
    console.log(`ℹ️ HTML snippet written to: ${htmlFile}`);
    console.log("Tip: vložte obsah tohoto HTML do <head> (např. do app/layout.tsx nebo použijte serverní čtení souboru).\n");
  })
  .catch((error) => {
    console.error("Favicons generation failed:", (error && error.message) || error);
    process.exit(1);
  });
