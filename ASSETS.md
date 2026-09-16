# Fabrication des visuels

Le site est reconstruit à partir des **maquettes PNG** fournies. Aucune
photographie source séparée n'a été livrée : le logo et toutes les
photographies affichées sont donc **extraits des maquettes elles-mêmes**.

## Bandeau de tête

> **Note.** Ce paragraphe décrit la mise en surimpression de la **première**
> version du site. Depuis la refonte éditoriale, l'en-tête (`components/layout/Header.tsx`)
> est une bande Soft Ivory qui réserve sa propre hauteur au-dessus de la
> photographie — il n'y a plus de dégradé de lisibilité ni de composant Hero
> dédié, chaque page composant sa première photographie directement.

## Références

Les fichiers d'origine restent intacts dans `public/images/` (noms avec
espaces et accents). Des copies aux noms propres servent de référence de
travail :

```
public/references/
    moodboard.png   →  planche d'identité (logo)
    home.png · portfolio.png · about.png · contact.png
    weddings.png · civil.png · birthdays.png · maternity.png
```

> **Note.** Ces maquettes documentent la **première** version du site. Depuis
> la refonte éditoriale, le site public tient en quatre pages en anglais
> (`/`, `/about`, `/portfolio`, `/contact`) et ne reprend plus ces mises en
> page. Les fichiers restent ici comme archive et comme source des visuels :
> les photographies extraites sont, elles, toujours celles utilisées.
> Les anciennes catégories (mariages, cérémonies civiles, anniversaires,
> maternité) ne sont plus des pages publiques — leurs URLs redirigent vers le
> portfolio — mais **leurs images sont conservées** et plusieurs d'entre elles
> sont réutilisées dans les nouvelles séquences.

## Extraction

```bash
npm install -D sharp        # seule dépendance du script
node scripts/extract-assets.js
```

Le script produit :

- **`public/brand/em-logo-black.png` / `em-logo-white.png`** — le monogramme EM
  officiel (`public/brand/em-logo-source.png`, fourni par le client) est
  détouré sur la luminance, puis recadré sur sa boîte d'encre. Le tracé,
  l'entrelacement des lettres et les proportions d'origine sont conservés ;
  aucune police ne le remplace, aucune courbe n'est revectorisée. Pour changer
  de logo, remplacez `em-logo-source.png` et relancez
  `node scripts/extract-assets.js`.

  Le détourage est une conversion **linéaire** — `alpha = (papier − luminance)
  / papier` — et non un étalement de contraste : un seuil d'encre ramène à
  l'opacité pleine des gris qui n'y sont pas, épaissit les déliés du M et
  alourdit PHOTOGRAPHY, dont les fûts ne font que deux pixels. Le recadrage
  imprime en console les proportions de la boîte d'encre. Le header actuel
  affiche un lockup texte (EM / Photography) plutôt que ce monogramme ; les
  PNG détourés restent disponibles comme favicon et pour un usage futur.

  Une vectorisation (potrace) a été essayée et écartée : un seuil binaire ne
  sait pas rendre un délié d'épaisseur variable inférieure au pixel — il s'y
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
                                 # et la juxtapose à sa maquette d'origine
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
