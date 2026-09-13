# Fabrication des visuels

Le site est reconstruit à partir des **maquettes PNG** fournies. Aucune
photographie source séparée n'a été livrée : le logo et toutes les
photographies affichées sont donc **extraits des maquettes elles-mêmes**.

## Références

Les fichiers d'origine restent intacts dans `public/images/` (noms avec
espaces et accents). Des copies aux noms propres servent de référence de
travail :

```
public/references/
    moodboard.png   →  planche d'identité (logo)
    home.png        →  /
    portfolio.png   →  /portfolio
    weddings.png    →  /mariages
    civil.png       →  /ceremonies-civiles
    birthdays.png   →  /anniversaires
    maternity.png   →  /maternite-naissance
    about.png       →  /a-propos
    contact.png     →  /contact
```

## Extraction

```bash
npm install -D sharp        # seule dépendance du script
node scripts/extract-assets.js
```

Le script produit :

- **`public/brand/em-logo-black.png` / `em-logo-white.png`** — le monogramme EM
  est détouré de la planche d'identité par seuillage sur la luminance, puis
  recadré sur sa boîte d'encre. Le tracé, l'entrelacement des lettres et les
  proportions d'origine sont conservés ; aucune police ne le remplace.
- **`public/images/<page>/*.jpg`** — chaque zone photographique des maquettes,
  recadrée aux coordonnées relevées, agrandie ×3 (lanczos) puis légèrement
  accentuée.
- **Les bandeaux d'ouverture** (`*/hero.jpg`) demandent un traitement à part :
  les maquettes y incrustent le titre dans la photographie. Le texte est isolé
  par ouverture morphologique (les fines structures claires de la zone de
  titre), puis comblé par diffusion de Laplace. La composition complète du
  bandeau est ainsi récupérée sans jamais dupliquer le texte à l'écran.
- **Les voiles sombres** (`shared/dark-silk.jpg`, `maternity/experience.jpg`…)
  sont découpés dans des zones de tulle sans texte, puis étirés en fond.

## Limite connue

Les maquettes ne font que 971 px de large : les visuels extraits sont donc
plus doux qu'une photographie d'origine, en particulier sur les bandeaux
pleine largeur. Fournir les photographies d'origine (mêmes cadrages) aux
mêmes chemins remplacerait les extractions sans toucher au code.

## Contrôle visuel

```bash
npm run dev
node scripts/shoot.js            # capture chaque page à 1440 px
                                 # et la juxtapose à sa maquette
node scripts/compare.js home     # géométrie des blocs, maquette vs rendu
node scripts/bands.js home       # hauteurs de section
node scripts/rows.js home 432 810  # lignes de texte d'une tranche
node scripts/responsive.js       # débordements horizontaux, 1920 → 375
```

Les scripts de capture demandent `npm install -D playwright` (volontairement
hors `package.json` pour ne pas télécharger de navigateur au déploiement) et
utilisent le Chromium déjà présent via `executablePath`.
