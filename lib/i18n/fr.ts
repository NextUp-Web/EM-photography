import type { Dictionary } from "./en";

/* ------------------------------------------------------------------
   Français — written for the page rather than word for word: the
   register a Swiss wedding photographer uses with her couples
   ("vous", first person, Emra writing as a woman), the words the
   trade uses in French (reportage, élopement, prestation), and the
   same quiet, understated voice as the English.
   ------------------------------------------------------------------ */

export const fr: Dictionary = {
  locale: "fr",
  htmlLang: "fr-CH",

  meta: {
    siteTitle: "EM Photography | Photographe de mariage en Suisse",
    siteDescription:
      "Photographie de mariage documentaire et éditoriale, en Suisse et dans toute l’Europe. Des images sincères, intimes et intemporelles pour les histoires d’amour d’aujourd’hui.",
    ogLocale: "fr_CH",
    portfolioTitle: "Portfolio | EM Photography",
    portfolioDescription:
      "L’amour, tel qu’il est — une sélection de mariages et d’histoires de couples en Suisse, en Italie et dans toute l’Europe.",
    aboutTitle: "À propos d’Emra | EM Photography",
    aboutDescription:
      "Emra, la photographe derrière EM Photography — une attention discrète à ce qui demeure.",
    contactTitle: "Contact | EM Photography",
    contactDescription:
      "Dites-moi ce que vous souhaitez garder en mémoire — demandes pour mariages, séances couple et célébrations intimes, en Suisse et dans toute l’Europe.",
    storyDescription: (name: string, place: string) =>
      `${name} — ${place}. Une histoire d’amour racontée avec douceur, profondeur et intention.`,
  },

  common: {
    skipToContent: "Aller au contenu",
    nav: { home: "Accueil", portfolio: "Portfolio", about: "À propos", contact: "Contact" },
    primaryNav: "Navigation principale",
    footerNav: "Navigation du pied de page",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    homeLink: "EM Photography — accueil",
    logoAlt: "EM Photography — photographe de mariage et de portrait",
    instagram: "EM Photography sur Instagram",
    whatsapp: "EM Photography sur WhatsApp",
    placeStart: "Basée en Suisse",
    placeEnd: "Disponible dans toute l’Europe",
    menuPlace: ["Basée en Suisse", "Europe"],
    copyright: "Copyright",
    enquire: "Me contacter",
    language: "Langue",
    languageNames: { en: "English", fr: "Français" },
  },

  home: {
    heroLabel: "EM Photography",
    philosophyLabel: "Philosophie",
    philosophyTitle: ["Where refined imagery", "meets genuine emotion."],
    approachLabel: "Approche",
    approachTitle: ["Pour tout ce que les mots", "ne sauraient dire."],
    approachLead: ["Les détails discrets.", "Les instants qui se jouent entre deux."],
    approachBody:
      "Je photographie les histoires avec une sensibilité documentaire et un regard éditorial raffiné — attentive aux gestes subtils, aux expressions fugaces et aux détails qui façonnent discrètement la journée.",
    viewPortfolio: "Voir le portfolio",
    panelOneLines: ["Pour celles et ceux qui aiment les photographies", "qui en révèlent davantage à mesure qu’on les regarde."],
    panelOneMeta: "La beauté de regarder de plus près.",
    storiesLabel: "Sélection d’histoires",
    storiesBody:
      "Une collection d’images naturelle, pensée avec soin et profondément liée à l’atmosphère de votre célébration — qui se dévoile chapitre après chapitre, chacun avec son propre rythme et sa propre émotion.",
    aboutLabel: "À propos",
    aboutTitle: ["Une attention discrète", "à ce qui demeure."],
    aboutBody:
      "Sensible aux photographies qui portent quelque chose au-delà de l’instant — un lien, une présence, une manière d’être ensemble. Je cherche à créer des images sincères et naturelles, fidèles aux personnes qu’elles montrent et à ce qui comptait vraiment à cet instant.",
    moreAboutMe: "Quelques mots sur moi",
    panelTwoText: "Photographier l’amour dans ce qu’il a de plus doux.",
    panelTwoMeta: ["Documentary presence. Editorial sensibility.", "Deeply felt."],
    inviteTitle: ["Créons ensemble", "quelque chose"],
    inviteTitleEm: "qui compte.",
    inviteTags: ["Mariages", "Histoires d’amour", "Portraits"],
    inviteLocation: ["Lausanne", "Suisse", "Europe"],
  },

  gallery: {
    previous: "Photographie précédente",
    next: "Photographie suivante",
  },

  portfolio: {
    label: "Portfolio",
    title: "L’amour, tel qu’il est.",
    tagline: ["Là où se rencontrent l’émotion,", "l’atmosphère et un regard raffiné."],
    photographs: "Photographies",
    closingLabel: "Créons ensemble quelque chose d’intemporel",
    closingTitle: ["Pour les instants", "qui demeurent."],
  },

  story: {
    allStories: "Toutes les histoires",
    nextStory: "Histoire suivante",
  },

  about: {
    label: "À propos",
    title: ["Une attention discrète", "à ce qui demeure."],
    lead: ["Je suis Emra, la photographe", "derrière EM PHOTOGRAPHY."],
    body:
      "Basée à Lausanne et travaillant dans toute la Suisse, je suis sensible aux photographies qui portent quelque chose au-delà de l’instant — un lien, une présence, une manière d’être ensemble.",
    traceTitle: ["Plus qu’un souvenir", "de la journée,", "une trace de ce qu’elle", "vous a fait ressentir."],
    traceBody: [
      "Inspirée par la lumière naturelle, les liens sincères et la beauté de ce qui passe souvent inaperçu, je photographie avec une attention particulière à l’atmosphère, au rythme et à la présence.",
      "Je travaille de manière intuitive et avec discrétion — en observant attentivement, en guidant avec douceur lorsque c’est nécessaire et en préservant ce qui vous ressemble.",
    ],
    panelText: "Saisir l’émotion, telle qu’elle a été vécue.",
    panelMeta: ["Intention dans le regard. Une approche sensible.", "Des images faites pour durer."],
    verticalLabel: "Un couple marchant sous une loggia de pierre",
    inviteTitle: ["Si mon approche vous ressemble,", "je serais ravie de découvrir votre histoire."],
    inviteNote:
      "Indiquez-moi votre date, le lieu et vos projets : je vous répondrai avec mes disponibilités et les prochaines étapes.",
  },

  contact: {
    label: "Prendre contact",
    title: ["Dites-moi ce que vous", "souhaitez garder en mémoire."],
    lead:
      "J’aimerais découvrir ce que vous imaginez — où cela se déroulera, qui sera présent et ce qui compte le plus pour vous, qu’il s’agisse d’un mariage, d’une célébration intime ou simplement d’un chapitre de votre vie que vous souhaitez préserver.",
    photoLabel: "Un couple sur la terrasse au-dessus du lac",
    formLabel: "Parlez-moi de votre projet",
    formTitle: "Une photographie pensée avec soin pour les moments qui comptent.",
    formBody:
      "Chaque célébration a son propre rythme. Parlez-moi de ce que vous préparez, de ce qui compte pour vous et de l’atmosphère qui vous attire. À partir de là, je construirai le reportage avec soin et intention.",
  },

  form: {
    fullName: "Nom et prénom *",
    email: "E-mail *",
    phone: "Téléphone *",
    date: "Date du mariage / de la séance *",
    dateMissing: "Veuillez choisir une date",
    location: "Ville / lieu de réception *",
    interest: "Prestation *",
    pleaseSelect: "Veuillez choisir",
    message: "Parlez-moi un peu de votre histoire *",
    responseTime: "Réponse sous 24 heures",
    send: "Envoyer la demande",
    sending: "Envoi en cours",
    sent: "Merci — votre message est bien parti. Je réponds personnellement à chaque demande, sous 24 heures.",
    failed: "Le message n’a pas pu être envoyé. Écrivez-moi directement à",
    interests: {
      Wedding: "Mariage",
      Engagement: "Fiançailles",
      Couple: "Couple",
      Maternity: "Maternité",
      Family: "Famille",
      Portrait: "Portrait",
      Others: "Autres",
    },
  },

  datePicker: {
    intl: "fr-CH",
    weekdays: ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"],
    dialog: "Choisir une date",
    previousMonth: "Mois précédent",
    nextMonth: "Mois suivant",
  },

  collections: {
    "i-and-e": {
      place: "Montreux, Suisse",
      date: "Septembre 2026",
      intro:
        "Une matinée commencée en douceur au-dessus du lac, sans jamais vraiment se presser. Nous avons marché, attendu la lumière, et laissé la journée venir à son rythme.",
    },
    "m-and-j": {
      place: "Vuillerens, Suisse",
      date: "Juillet 2026",
      intro:
        "Un château, une longue table à la lueur des bougies, et une journée restée intime et sereine, du premier geste à la dernière danse.",
    },
    "a-and-l": {
      place: "Lac de Côme, Italie",
      date: "Juin 2026",
      intro:
        "Deux jours au fil de l’eau, un élopement à leur image — une promenade dans la vieille ville, un bateau à l’heure dorée et un dîner sous les oliviers.",
    },
  },

  alts: {
    "A & L at the water's edge, the village beyond them": "A & L au bord de l’eau, le village derrière eux",
    "A & L at the water's edge, the village of Lake Como beyond": "A & L au bord de l’eau, un village du lac de Côme au loin",
    "A bouquet of white roses and ranunculus held against a knitted sleeve":
      "Un bouquet de roses blanches et de renoncules tenu contre une manche en maille",
    "A bouquet of white roses and ranunculus": "Un bouquet de roses blanches et de renoncules",
    "A bouquet of white roses on a stone ledge": "Un bouquet de roses blanches sur un muret de pierre",
    "A bride and groom held close on the terrace, the lake and the mountains behind them":
      "Les mariés enlacés sur la terrasse, le lac et les montagnes derrière eux",
    "A bride at the balustrade looking out over the lake": "Une mariée à la balustrade, le regard tourné vers le lac",
    "A bride from behind, her veil falling towards the lake": "Une mariée de dos, son voile tombant vers le lac",
    "A couple on a balustraded terrace above the lake at sunset":
      "Un couple sur une terrasse à balustrade au-dessus du lac, au coucher du soleil",
    "A couple walking away together through a stone loggia": "Un couple s’éloignant ensemble sous une loggia de pierre",
    "A flowered terrace and its balustrade above the lake, the mountains beyond":
      "Une terrasse fleurie et sa balustrade au-dessus du lac, les montagnes au loin",
    "A hand resting on the lace of a wedding dress": "Une main posée sur la dentelle d’une robe de mariée",
    "A ringed hand resting against a dark suit": "Une main baguée posée contre un costume sombre",
    "A table laid for two beneath an olive tree at sunset": "Une table dressée pour deux sous un olivier, au coucher du soleil",
    "A table laid for two on the terrace, the village and the lake beyond":
      "Une table dressée pour deux sur la terrasse, le village et le lac au loin",
    "A table laid under an olive tree above the lake at sunset":
      "Une table dressée sous un olivier au-dessus du lac, au coucher du soleil",
    "A villa among cypresses above the lake": "Une villa parmi les cyprès au-dessus du lac",
    "A villa among cypresses on the hillside above the lake": "Une villa parmi les cyprès, à flanc de colline au-dessus du lac",
    "A village among cypresses on the shore of the lake": "Un village parmi les cyprès, sur la rive du lac",
    "A wooden boat below the village on the lake": "Un bateau en bois sur le lac, en contrebas du village",
    "A wooden boat crossing beneath the village": "Un bateau en bois passant en contrebas du village",
    "At the balustrade, looking out across the water": "À la balustrade, le regard porté vers l’eau",
    "Candlelight along the dinner table, white roses and cut glass":
      "La lueur des bougies le long de la table du dîner, roses blanches et verres en cristal",
    "Candlelight, white flowers and cut glass on the dinner table":
      "Bougies, fleurs blanches et verres en cristal sur la table du dîner",
    "Candles and white roses along the dinner table": "Des bougies et des roses blanches le long de la table du dîner",
    "Emra looking out over the lake and the mountains at sunset":
      "Emra contemplant le lac et les montagnes au coucher du soleil",
    "Emra on a terrace above the lake, the mountains catching the last light":
      "Emra sur une terrasse au-dessus du lac, les montagnes dans la dernière lumière",
    "Emra seated on the terrace, the lake and the mountains beyond her":
      "Emra assise sur la terrasse, le lac et les montagnes devant elle",
    "Emra, camera in hand, on a terrace above the lake": "Emra, appareil photo à la main, sur une terrasse au-dessus du lac",
    "Emra, camera in hand, on the shore of the lake": "Emra, appareil photo à la main, au bord du lac",
    "Emra looking out over the lake and the mountains in the early light":
      "Emra contemplant le lac et les montagnes dans la lumière du matin",
    "Emra on the hillside above the lake, the mountains catching the first light":
      "Emra sur la colline au-dessus du lac, les montagnes dans la première lumière",
    "Her hand holding the bouquet against her dress": "Sa main tenant le bouquet contre sa robe",
    "His hand over hers, the wedding ring on her finger": "Sa main sur la sienne, l’alliance à son doigt",
    "M & J on the terrace of the château, the lake and mountains behind them":
      "M & J sur la terrasse du château, le lac et les montagnes derrière eux",
    "M & J on the terrace, the lake and the mountains behind them":
      "M & J sur la terrasse, le lac et les montagnes derrière eux",
    "The bride under the loggia, her veil spread across the stone":
      "La mariée sous la loggia, son voile déployé sur la pierre",
    "The couple close, her hand on his cheek": "Le couple tout proche, la main de la mariée sur la joue du marié",
    "The couple embracing, the mountains behind them": "Le couple enlacé, les montagnes derrière eux",
    "The couple forehead to forehead, the lake behind them": "Le couple front contre front, le lac derrière eux",
    "The couple from behind, her veil the length of her dress": "Le couple de dos, son voile aussi long que sa robe",
    "The couple on a balustraded terrace above the lake at sunset":
      "Le couple sur une terrasse à balustrade au-dessus du lac, au coucher du soleil",
    "The couple on the balustraded terrace, the lake and the mountains behind them":
      "Le couple sur la terrasse à balustrade, le lac et les montagnes derrière eux",
    "The couple walking away down a wet cobbled street": "Le couple s’éloignant dans une ruelle pavée, encore mouillée",
    "The couple walking away through the old town": "Le couple s’éloignant dans la vieille ville",
    "The far shore of the lake at sunrise, the mountains behind it":
      "L’autre rive du lac au lever du soleil, les montagnes derrière",
    "The lake at sunset, mountains on either shore": "Le lac au coucher du soleil, des montagnes sur chaque rive",
    "The mountains and the lake at the end of the day": "Les montagnes et le lac à la fin du jour",
    "The two of them forehead to forehead beneath the veil": "Tous deux front contre front sous le voile",
    "The veil lifted and lit from behind under a stone loggia":
      "Le voile soulevé, éclairé à contre-jour sous une loggia de pierre",
    "The villa and cypresses above the lake at sunset": "La villa et les cyprès au-dessus du lac, au coucher du soleil",
    "Two wedding rings resting on a card": "Deux alliances posées sur une carte",
  },
};
