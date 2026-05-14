// ============================================================
//  FICHES DU JEU — LinkedIn ou Interpol ?
//  Pour ajouter une fiche, copie un bloc et remplis les champs.
//
//  type     → "linkedin" ou "interpol"
//  name     → Prénom Nom
//  country  → Pays d'origine
//  photo    → Chemin vers la photo  ex: "photos/marie-dupont.jpg"
//  desc     → Ce qu'il/elle fait (LinkedIn) ou pourquoi recherché(e) (Interpol)
//  url      → Lien vers le profil LinkedIn ou la notice Interpol
// ============================================================

const FICHES = [

  // --- EXEMPLE LINKEDIN ---
  {
    type:    "linkedin",
    name:    "Marie Dupont",
    country: "France",
    photo:   "photos/marie-dupont.jpg",
    desc:    "Directrice Marketing chez TechCorp France. Spécialisée en stratégie digitale et growth hacking depuis 12 ans.",
    url:     "https://www.linkedin.com/in/exemple"
  },

  // --- EXEMPLE INTERPOL ---
  {
    type:    "interpol",
    name:    "Carlos Ramirez",
    country: "Colombie",
    photo:   "photos/carlos-ramirez.jpg",
    desc:    "Recherché pour trafic international de stupéfiants. Notice rouge émise en 2021. Opère sous plusieurs fausses identités.",
    url:     "https://www.interpol.int/fr/Comment-travailler-avec-Interpol/Notices/Notices-rouges"
  },

  // --- AJOUTE TES FICHES ICI ---
  // {
  //   type:    "linkedin",
  //   name:    "",
  //   country: "",
  //   photo:   "photos/",
  //   desc:    "",
  //   url:     ""
  // },



{
    type:    "interpol",
    name:    "Azizbek Toshtemirov",
    country: "Ouzbékistan",
    photo:   "https://ws-public.interpol.int/notices/v1/red/2026-32624/images/63902151",
    desc:    "Fraude",
    url:     "https://www.interpol.int/fr/Notre-action/Notices/Notices-rouges/Voir-les-notices-rouges#2026-32624"
  },

  ];
