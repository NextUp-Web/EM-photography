/* ------------------------------------------------------------------
   English — the site's words as they read in English. Titles set on
   several lines are arrays, one entry per line, so each language can
   break its own sentences where they read best.
   ------------------------------------------------------------------ */

export const en = {
  locale: "en",
  htmlLang: "en",

  meta: {
    siteTitle: "EM Photography | Wedding Photographer in Switzerland",
    siteDescription:
      "Editorial documentary wedding photography in Switzerland and across Europe. Honest, intimate and timeless imagery for modern love stories.",
    ogLocale: "en_GB",
    portfolioTitle: "Portfolio | EM Photography",
    portfolioDescription:
      "Documenting love in the softest way — selected wedding and couple stories in Switzerland, Italy and across Europe.",
    aboutTitle: "About Emra | EM Photography",
    aboutDescription:
      "Emra, the photographer behind EM Photography — a quiet attention to what remains.",
    contactTitle: "Contact | EM Photography",
    contactDescription:
      "Tell me what you want to remember — enquiries for weddings, couples and intimate celebrations in Switzerland and across Europe.",
    storyDescription: (name: string, place: string) =>
      `${name}, photographed in ${place} — a love story documented with softness, depth and intention.`,
  },

  common: {
    skipToContent: "Skip to content",
    nav: { home: "Home", portfolio: "Portfolio", about: "About", contact: "Contact" },
    primaryNav: "Primary",
    footerNav: "Footer",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backToTop: "EM Photography — back to the top of the page",
    logoAlt: "EM Photography — Wedding & Portrait Photographer",
    instagram: "EM Photography on Instagram",
    whatsapp: "EM Photography on WhatsApp",
    placeStart: "Switzerland based",
    placeEnd: "Available across Europe",
    menuPlace: ["Switzerland based", "Europe"],
    copyright: "Copyright",
    enquire: "Enquire",
    language: "Language",
    languageNames: { en: "English", fr: "Français" },
  },

  home: {
    heroLabel: "EM Photography",
    philosophyLabel: "Philosophy",
    philosophyTitle: ["Where refined imagery", "meets genuine emotion."],
    approachLabel: "Approach",
    approachTitle: ["For all that words", "cannot hold."],
    approachLead: ["The quiet details.", "The moments in between."],
    approachBody:
      "I photograph stories with a documentary sensitivity and a refined editorial eye — attentive to the subtle gestures, fleeting expressions and details that quietly shape the day.",
    viewPortfolio: "View portfolio",
    panelOneLines: ["For those drawn to photographs that", "reveal more the longer you look."],
    panelOneMeta: "The beauty of looking closer.",
    storiesLabel: "Selected stories",
    storiesBody:
      "A collection that feels natural, considered and deeply connected to the atmosphere of your celebration — unfolding chapter by chapter, each with its own rhythm and feeling.",
    aboutLabel: "About",
    aboutTitle: ["A quiet attention to", "what remains."],
    aboutBody:
      "Drawn to photographs that carry something beyond the moment — a sense of connection, presence, and the way people are with one another. I capture images that feel honest and natural, true to the people within them and to what mattered most in that moment.",
    moreAboutMe: "More about me",
    panelTwoText: "Documenting love in its softest form.",
    panelTwoMeta: ["Documentary presence. Editorial sensibility.", "Deeply felt."],
    inviteTitle: ["Let’s create", "something"],
    inviteTitleEm: "meaningful.",
    inviteTags: ["Weddings", "Love stories", "Portraits"],
    inviteLocation: ["Lausanne", "Switzerland", "Europe"],
  },

  gallery: {
    previous: "Previous photograph",
    next: "Next photograph",
  },

  portfolio: {
    label: "Portfolio",
    title: "Love, documented.",
    tagline: ["Where emotion, atmosphere", "and a refined eye meet."],
    photographs: "Photographs",
    closingLabel: "Let’s create something timeless",
    closingTitle: ["For the moments", "that remain."],
  },

  story: {
    allStories: "All stories",
    nextStory: "Next story",
  },

  about: {
    label: "About",
    title: ["A quiet attention to", "what remains."],
    lead: ["I’m Emra, the photographer", "behind EM PHOTOGRAPHY."],
    body:
      "Based in Lausanne and working throughout Switzerland, I’m drawn to photographs that carry something beyond the moment — a sense of connection, presence, and the way people are with one another.",
    traceTitle: ["More than a record", "of the day –", "a trace of what", "it felt like."],
    traceBody: [
      "Inspired by natural light, genuine connection and the beauty of what often goes unnoticed, I photograph with a sensitivity to atmosphere, rhythm and presence.",
      "I work intuitively and with a light touch — observing closely, guiding gently when needed, and preserving what feels true to you.",
    ],
    panelText: "Capturing how it felt.",
    panelMeta: ["Observed with intention. Shaped with sensitivity.", "Made to remain."],
    verticalLabel: "A couple walking through a stone loggia",
    inviteTitle: ["If my approach feels like you,", "I would love to hear your story."],
    inviteNote:
      "Share your date, location and plans, and I’ll be in touch with availability and next steps.",
  },

  contact: {
    label: "Get in touch",
    title: ["Tell me what you", "want to remember."],
    lead:
      "I’d love to hear what you’re imagining — where it will unfold, who will be there, and what matters most to you, whether it’s a wedding, an intimate gathering or simply a chapter of life you want to preserve.",
    photoLabel: "A couple on the terrace above the lake",
    formLabel: "Share your vision",
    formTitle: "Thoughtful photography for the meaningful moments.",
    formBody:
      "Every celebration has its own rhythm. Tell me what you’re planning, what feels important to you, and the atmosphere you’re drawn to. From there, I’ll shape the coverage with care and intention.",
  },

  form: {
    fullName: "Full name *",
    email: "Email *",
    phone: "Phone *",
    date: "Wedding / session date *",
    dateMissing: "Please choose a date",
    location: "Location / venue *",
    interest: "Interest *",
    pleaseSelect: "Please select",
    message: "Tell me a little about your story *",
    responseTime: "Response within 24 hours",
    send: "Send inquiry",
    sending: "Sending",
    sent: "Thank you — your message is on its way. I answer every enquiry personally, within 24 hours.",
    failed: "The message could not be sent. Please write to me directly at",
    interests: {
      Wedding: "Wedding",
      Engagement: "Engagement",
      Couple: "Couple",
      Maternity: "Maternity",
      Family: "Family",
      Portrait: "Portrait",
      Others: "Others",
    } as Record<string, string>,
  },

  datePicker: {
    intl: "en-GB",
    weekdays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    dialog: "Choose a date",
    previousMonth: "Previous month",
    nextMonth: "Next month",
  },

  /** the collections' places, dates and openings, by slug */
  collections: {} as Record<string, { place?: string; date?: string; intro?: string }>,

  /** photograph descriptions, keyed by their English text */
  alts: {} as Record<string, string>,
};

export type Dictionary = typeof en;
