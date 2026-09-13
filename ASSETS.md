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
  est détouré de la planche d'identité, puis recadré sur sa boîte d'encre
  (226 × 176). Le tracé, l'entrelacement des lettres et les proportions
  d'origine sont conservés ; aucune police ne le remplace, aucune courbe n'est
  revectorisée.

  Le détourage est une conversion **linéaire** — `alpha = (papier − luminance)
  / papier` — et non un étalement de contraste : c'est ce qui décide de la
  fidélité du lockup. La boucle calligraphique ne fait qu'un pixel sur la
  planche et ne descend qu'à ~150 de luminance ; toute courbe qui ramène ce
  gris à l'opacité pleine épaissit le délié, alourdit PHOTOGRAPHY et fait
  perdre au monogramme son modelé plein/délié.

  Le lockup n'est jamais affiché à plus de 92 px de haut : la planche (176 px)
  couvre déjà le rendu à 1×, l'export ×4 couvre les écrans à 2 et 3×. Une
  vectorisation (potrace) a été essayée et écartée — un seuil binaire ne sait
  pas rendre un délié d'épaisseur variable inférieure au pixel : la boucle s'y
  coupe ou s'y épaissit, jamais autre chose.
- **`public/images/<page>/*.jpg`** — chaque zone photographique des maquettes,
  recadrée aux coordonnées relevées, agrandie ×3 (lanczos) puis légèrement
  accentuée.
- **Les bandeaux d'ouverture** (`*/hero.jpg`) demandent un traitement à part :
  les maquettes y incrustent le titre dans la photographie. Le texte est isolé
  par ouverture morphologique (les fines structures claires de la zone de
  titre), puis comblé par diffusion de Laplace. La composition complète du
  bandeau est ainsi récupérée sans jamais dupliquer le texte à l'écran.

  Le recadrage doit prendre **toute** la bande de la maquette, bord à bord :
  celle de l'accueil va de la ligne 74 à la ligne 429, soit 971 × 356. Un
  recadrage plus court est ensuite étiré aux proportions de la bande et la
  composition entière remonte — le ciel manque en haut, le cadrage paraît
  resserré. La maquette d'accueil y laisse déborder le bas de son lockup
  (PHOTOGRAPHY mord de cinq lignes sur la photographie) : ce rectangle est
  comblé par la même diffusion, le lockup étant affiché par l'en-tête.
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
node scripts/hero.js             # cotes du bandeau d'accueil, au pixel
node scripts/compare.js home     # géométrie des blocs, maquette vs rendu
node scripts/bands.js home       # hauteurs de section
node scripts/rows.js home 432 810  # lignes de texte d'une tranche
node scripts/responsive.js       # débordements horizontaux, 1920 → 375
```

Les scripts de capture demandent `npm install -D playwright` (volontairement
hors `package.json` pour ne pas télécharger de navigateur au déploiement) et
utilisent le Chromium déjà présent via `executablePath`.

`scripts/hero.js` mesure la maquette et le rendu **par le même code**, ramenés
à la même largeur, pour que les écarts lus soient des écarts de mise en page et
non de méthode : bord de bandeau, hauteur de capitale, largeur de ligne, filet,
surtitre. Attention : le serveur de développement garde en mémoire les images
qu'il a optimisées — après régénération d'un visuel, relancer `npm run dev`,
sans quoi la capture montre encore l'ancien fichier.
