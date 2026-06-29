import {
  Award,
  Building2,
  CalendarDays,
  CheckCircle2,
  Factory,
  Globe2,
  Leaf,
  Medal,
  Milk,
  Newspaper,
  Phone,
  ShieldCheck,
  Snowflake,
  Sprout,
  Tractor,
  Truck,
} from "lucide-react";

export const siteContent = {
  company: {
    name: "AlMahdi AgriGroup",
    monogram: "AM",
    tagline: "Groupe Agroalimentaire Tunisien · 5ème Génération",
    shortTagline: "Tunisie — Tradition & Excellence depuis 5 Générations",
    generation: "5ème génération",
    phone: "+216 XX XXX XXX",
    email: "contact@almahdiagrigroup.tn",
    address: "[À compléter] — Tunisie",
    hours: "Lun–Ven 8h–17h · Sam 8h–12h",
    country: "Tunisie",
    description:
      "Groupe familial agroalimentaire tunisien à la 5ème génération. Fondé sur l’héritage d’AlMahdi, nous cultivons l’excellence dans la nutrition animale, le stockage frigorifique et l’export d’huile d’olive.",
  },

  languages: [
    {
      code: "FR",
      label: "Français",
      flag: "🇫🇷",
    },
    {
      code: "EN",
      label: "English",
      flag: "🇬🇧",
    },
    {
      code: "AR",
      label: "العربية",
      flag: "🇸🇦",
    },
  ],

  socialLinks: [
    {
      label: "Facebook",
      href: "#",
      iconText: "f",
    },
    {
      label: "LinkedIn",
      href: "#",
      iconText: "in",
    },
    {
      label: "Instagram",
      href: "#",
      iconText: "ig",
    },
    {
      label: "YouTube",
      href: "#",
      iconText: "▶",
    },
  ],

  navbar: {
    topBarText:
      "Téléphone direct du groupe + email + sélecteur de langues FR / EN / AR",
    links: [
      {
        label: "Accueil",
        href: "/",
      },
      {
        label: "Notre Groupe",
        href: "/notre-groupe",
        dropdown: [
          {
            label: "Notre Histoire",
            href: "/notre-groupe/histoire",
          },
          {
            label: "Notre Savoir-Faire",
            href: "/notre-groupe/savoir-faire",
          },
          {
            label: "Notre Équipe",
            href: "/notre-groupe/equipe",
          },
        ],
      },
      {
        label: "Nos Sociétés",
        href: "/nos-societes",
        dropdown: [
          {
            label: "Vitale",
            href: "/nos-societes/vitale",
          },
          {
            label: "Fruits AlMahdi",
            href: "/nos-societes/fruits-almahdi",
          },
          {
            label: "AlMahdi Olive",
            href: "/nos-societes/almahdi-olive",
          },
        ],
      },
      {
        label: "Qualité & Certifs",
        href: "/qualite",
      },
      {
        label: "Actualités",
        href: "/actualites",
        dropdown: [
          {
            label: "Médailles IOOC",
            href: "/actualites/medailles-iooc",
          },
          {
            label: "Foires & Salons",
            href: "/actualites/foires-salons",
          },
          {
            label: "Partenariats",
            href: "/actualites/partenariats",
          },
          {
            label: "Produits",
            href: "/actualites/produits",
          },
        ],
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
    cta: {
      label: "Demander un Devis",
      href: "/contact",
    },
  },

  home: {
    hero: {
      eyebrow: "Famille AlMahdi · Depuis 5 Générations · Tunisie",
      title: "L’Agroalimentaire Tunisien à son Excellence",
      description:
        "Groupe familial ancré dans cinq générations de savoir-faire agricole. Trois sociétés complémentaires, une même ambition : la qualité au service de la Tunisie et des marchés internationaux.",
      primaryButton: {
        label: "Découvrir le Groupe",
        href: "/notre-groupe",
      },
      secondaryButton: {
        label: "Nos Sociétés",
        href: "/nos-societes",
      },
      mediaNote:
        "Panorama aérien des terres du groupe AlMahdi au coucher du soleil : oliveraies en lignes, bâtiments d’exploitation, paysage tunisien.",
    },

    stats: [
      {
        value: "5ème",
        label: "Génération d’agriculteurs tunisiens",
      },
      {
        value: "3",
        label: "Sociétés spécialisées et complémentaires",
      },
      {
        value: "+1 000 T",
        label: "Capacité stockage frigorifique fruits & légumes",
      },
      {
        value: "+1 200 T",
        label: "Capacité stockage huile d’olive",
      },
      {
        value: "+15 ans",
        label: "Partenariats fidèles, pilier du groupe",
      },
    ],

    pillars: {
      eyebrow: "Nos Trois Piliers",
      title: "Un Groupe, Trois Sociétés d’Excellence",
      description:
        "Du champ à l’assiette, de la terre à l’export — AlMahdi AgriGroup maîtrise toute la chaîne de valeur agroalimentaire tunisienne.",
    },
  },

  societies: [
    {
      id: "vitale",
      name: "Vitale",
      slug: "vitale",
      href: "/nos-societes/vitale",
      emoji: "🐄",
      icon: Milk,
      category: "Nutrition Animale",
      tagline:
        "Nutrition Animale · Aliments Composés Haute Qualité · Bovins · Ovins · Vaches Laitières",
      shortDescription:
        "Aliments composés de haute qualité pour vaches laitières, bovins et ovins.",
      description:
        "Vitale est la marque de nutrition animale du groupe AlMahdi. Fondée sur des décennies d’expertise en élevage tunisien, elle formule des aliments composés de haute qualité, scientifiquement équilibrés pour maximiser les performances des troupeaux tout en préservant leur santé.",
      color: "#075B35",
      accentColor: "#F4C430",
      highlights: [
        "Qualité Contrôlée",
        "Formules Équilibrées",
        "Partenaires Fidèles",
      ],
      proofPoints: [
        "Partenaire des grands centres de collecte laitière",
        "Présence dans Sidi Bouzid, Gafsa, Kasserine, Kairouan et toute la Tunisie",
        "Accompagnement technique auprès des éleveurs partenaires",
      ],
      products: [
        {
          name: "Vitale Lait+",
          category: "Vaches Laitières",
          description:
            "Aliment complet haute énergie et riche en protéines, formulé pour les vaches en lactation. Optimise le taux butyreux et le taux protéique du lait.",
          packaging: "Sacs 25 kg & 40 kg · Vrac sur commande groupée",
          composition:
            "Tourteau de soja · Orge · Maïs · Minéraux · Vitamines A, D, E",
        },
        {
          name: "Vitale Croît+",
          category: "Bovins Engraissement",
          description:
            "Ration concentrée pour le finissage des bovins à viande. Accélère le gain moyen quotidien et améliore le rendement carcasse.",
          packaging: "Sacs 40 kg · Livraison en camion-grue",
          composition:
            "Son de blé · Maïs grain · Tourteau de colza · Sel de mer · Magnésium",
        },
        {
          name: "Vitale Ovin+",
          category: "Ovins",
          description:
            "Supplément alimentaire formulé pour les races ovines tunisiennes. Soutient la reproduction, l’engraissement des agneaux et la production laitière des brebis.",
          packaging: "Sacs 25 kg & 40 kg",
          composition:
            "Foin déshydraté · Orge · Son de blé · Phosphore · Calcium · Vitamines",
        },
      ],
      regions: [
        "Sidi Bouzid",
        "Kasserine",
        "Kairouan",
        "Gafsa",
        "Sfax",
        "Sousse",
        "Béja",
        "Siliana",
        "Le Kef",
        "Gabès",
        "Médenine",
        "Jendouba",
      ],
      contact: {
        email: "vitale@almahdiagrigroup.tn",
      },
    },

    {
      id: "fruits-almahdi",
      name: "Fruits AlMahdi",
      slug: "fruits-almahdi",
      href: "/nos-societes/fruits-almahdi",
      emoji: "❄️",
      icon: Snowflake,
      category: "Stockage Frigorifique",
      tagline:
        "Entrepôts Frigorifiques · +1 000 Tonnes · Fruits & Légumes · Leader Tunisie · +15 Ans de Confiance",
      shortDescription:
        "Leader du stockage frigorifique en Tunisie avec plus de 1 000 tonnes de capacité.",
      description:
        "Fruits AlMahdi est le leader tunisien du stockage frigorifique de fruits et légumes. Fort d’une capacité supérieure à 1 000 tonnes et d’une organisation reconnue par l’ensemble de la profession, le groupe gère la conservation et la logistique de produits frais avec rigueur.",
      color: "#0E7490",
      accentColor: "#F4C430",
      highlights: [
        "Chaîne du Froid Garantie",
        "+1 000 T de Capacité",
        "Leader du Domaine",
      ],
      proofPoints: [
        "+1 000 tonnes de capacité de stockage",
        "+15 ans de partenariats longs terme",
        "Organisation, rigueur et honnêteté commerciale",
      ],
      services: [
        {
          name: "Pommes & Poires",
          description:
            "Stockage longue durée en atmosphère contrôlée. Conservation 4–8 mois selon variété. Température : 0°C à +2°C.",
        },
        {
          name: "Agrumes",
          description:
            "Oranges, clémentines, citrons et grenades. Conservation 2–4 mois. Maintien de la brillance et prévention de la déshydratation.",
        },
        {
          name: "Légumes Saisonniers",
          description:
            "Pommes de terre, carottes, poivrons et oignons. Gestion des flux et des sorties selon calendrier et prix de marché.",
        },
        {
          name: "Logistique & Distribution",
          description:
            "Quai de chargement moderne, camions frigorifiques partenaires, gestion des entrées/sorties traçable et livraison aux marchés.",
        },
      ],
      contact: {
        email: "froid@fruitsalmahdi.tn",
      },
    },

    {
      id: "almahdi-olive",
      name: "AlMahdi Olive",
      slug: "almahdi-olive",
      href: "/nos-societes/almahdi-olive",
      emoji: "🫒",
      icon: Leaf,
      category: "Export Huile d’Olive",
      tagline:
        "Export Huile d’Olive Extra Vierge · +1 200 Tonnes · 3 Chaînes d’Extraction · Médailles IOOC · Bio · ISO · Halal",
      shortDescription:
        "Exportateur d’huile d’olive extra vierge certifié Bio, ISO 22000, ISO 9001 et Halal.",
      description:
        "AlMahdi Olive est la société d’export d’huile d’olive extra vierge du groupe. Avec plus de 1 200 tonnes de capacité de stockage et trois chaînes d’extraction ultramodernes, elle produit une huile d’exception récompensée aux concours internationaux IOOC.",
      color: "#075B35",
      accentColor: "#C79A00",
      highlights: ["Bio", "ISO 22000", "ISO 9001", "Halal", "IOOC Médailles"],
      proofPoints: [
        "+1 200 tonnes de stockage",
        "3 chaînes d’extraction modernes",
        "Médailles internationales IOOC",
        "Équipe jeune, formée et certifiée",
      ],
      installations: [
        {
          name: "3 Chaînes d’Extraction Modernes",
          description:
            "Extraction par centrifugation à froid en continu, sans solvant. Préserve les polyphénols, les antioxydants et les arômes.",
        },
        {
          name: "+1 200 Tonnes de Stockage",
          description:
            "Cuves inoxydables à température et azote contrôlés, limitant l’oxydation et garantissant la fraîcheur.",
        },
        {
          name: "Laboratoire d’Analyse Interne",
          description:
            "Analyses physico-chimiques systématiques à chaque lot : acidité libre, indice de peroxyde, polyphénols et spectrophotométrie UV.",
        },
      ],
      exportFormats: [
        "Vrac : IBC, fûts 200 L, flexitank",
        "Bidons 5 Litres",
        "Bouteilles 1 Litre & 750 ml",
        "Coffrets Premium",
      ],
      contact: {
        email: "export@almahdi-olive.tn",
      },
    },
  ],

  group: {
    hero: {
      eyebrow: "Preuve d’Excellence",
      title: "Cinq Générations de Maîtrise Agricole",
      description:
        "AlMahdi AgriGroup n’est pas né d’une idée d’entreprise. Il est le résultat de cinq générations de labeur, de passion et de transmission. Chaque produit livré porte l’empreinte d’un savoir-faire centenaire, enrichi par la technologie moderne et les certifications internationales.",
    },

    timeline: [
      {
        generation: "1ère Génération",
        title: "Les Origines — AlMahdi, Fondateur",
        description:
          "Grand-père AlMahdi pose les premières pierres de l’exploitation agricole familiale en Tunisie. Amour de la terre, culture de l’olive, élevage traditionnel.",
      },
      {
        generation: "2ème & 3ème Génération",
        title: "Expansion des Terres",
        description:
          "Développement des surfaces agricoles, diversification des activités : oliviers, cultures maraîchères, premières collaborations avec éleveurs régionaux.",
      },
      {
        generation: "4ème Génération",
        title: "Structuration du Groupe",
        description:
          "Création des trois sociétés spécialisées : Vitale, Fruits AlMahdi, AlMahdi Olive. Premières certifications. Modernisation des outils de production.",
      },
      {
        generation: "5ème Génération — Aujourd’hui",
        title: "Excellence & Rayonnement International",
        description:
          "Médailles IOOC, certifications Bio/ISO/Halal, partenariats long terme +15 ans, export vers les marchés européens et arabes.",
      },
    ],

    proofItems: [
      {
        number: "01",
        title: "Partenariats de 15+ ans",
        description:
          "Nos clients et partenaires ne nous quittent pas. Cette fidélité sur plus de 15 ans est la preuve de notre sérieux, notre honnêteté et la régularité de notre qualité.",
      },
      {
        number: "02",
        title: "Médailles Internationales IOOC",
        description:
          "AlMahdi Olive a décroché plusieurs médailles aux concours internationaux IOOC avec un haut ranking.",
      },
      {
        number: "03",
        title: "4 Certifications Actives",
        description:
          "Bio, ISO 22000, ISO 9001 et Halal — quatre certifications obtenues et maintenues.",
      },
      {
        number: "04",
        title: "Leader Régional Frigorifique",
        description:
          "Fruits AlMahdi est reconnu comme leader du stockage frigorifique de fruits et légumes.",
      },
      {
        number: "05",
        title: "Maillage National de Partenaires",
        description:
          "Vitale est présent dans toutes les grandes régions d’élevage tunisiennes : Sidi Bouzid, Gafsa, Kasserine, Kairouan et au-delà.",
      },
      {
        number: "06",
        title: "Équipe Jeune & Certifiée",
        description:
          "AlMahdi Olive dispose d’une équipe jeune, formée et certifiée, maîtrisant les 3 chaînes d’extraction et les protocoles qualité internationaux.",
      },
    ],
  },

  certifications: [
    {
      name: "Agriculture Biologique",
      shortName: "Bio",
      icon: Leaf,
      description:
        "Aucun pesticide de synthèse. Olives issues d’agriculture raisonnée certifiée. Audit annuel terrain et laboratoire.",
    },
    {
      name: "ISO 22000",
      shortName: "Sécurité Alimentaire",
      icon: ShieldCheck,
      description:
        "Management de la sécurité alimentaire tout au long de la chaîne. Norme internationale FSMS, essentielle pour l’export.",
    },
    {
      name: "ISO 9001",
      shortName: "Management Qualité",
      icon: CheckCircle2,
      description:
        "Amélioration continue, satisfaction client, traçabilité totale des processus et fiabilité pour les acheteurs internationaux.",
    },
    {
      name: "Certification Halal",
      shortName: "Halal",
      icon: Award,
      description:
        "Certification Halal accréditée pour accéder aux marchés du Moyen-Orient, de l’Asie du Sud-Est et de l’Afrique du Nord.",
    },
  ],

  medalsAndFairs: {
    medals: [
      {
        title: "Médaille d’Or IOOC",
        subtitle: "Huile Extra Vierge",
        description: "Classement International Top",
        icon: Medal,
      },
      {
        title: "Médaille d’Argent IOOC",
        subtitle: "Variété Chetoui",
        description: "Compétition Europe",
        icon: Medal,
      },
      {
        title: "High Ranking IOOC",
        subtitle: "Catégorie Export",
        description: "Reconnaissance Mondiale",
       
      },
      {
        title: "Distinction Qualité",
        subtitle: "Jury International Experts",
        description: "Sélection premium",
        icon: Award,
      },
    ],

    fairs: [
      "IOOC · International Olive Oil Competition",
      "SIAMAP Tunisie",
      "Anuga / SIAL Europe",
      "Gulfood / Saudi Foodex",
      "SIAM Maroc",
      "Expoagri Tunisie",
    ],
  },

  news: [
    {
      id: 1,
      title: "AlMahdi Olive — Médaille d’Or IOOC 2024",
      category: "Médailles",
      date: "2024",
      description:
        "Notre huile d’olive extra vierge a décroché une nouvelle médaille d’or au concours international IOOC, confirmant notre rang parmi les meilleures huiles du monde.",
      icon: Medal,
      href: "/actualites/medaille-or-iooc-2024",
    },
    {
      id: 2,
      title: "Participation au SIAMAP Sfax 2024",
      category: "Foire",
      date: "2024",
      description:
        "Le groupe a présenté ses trois sociétés — Vitale, Fruits AlMahdi et AlMahdi Olive — lors du Salon International de l’Agriculture et de la Pêche.",
      icon: CalendarDays,
      href: "/actualites/siamap-sfax-2024",
    },
    {
      id: 3,
      title: "Nouveau Contrat Export — Europe 2024",
      category: "Partenariat",
      date: "2024",
      description:
        "AlMahdi Olive signe un nouveau contrat de distribution avec un importateur européen, renforçant la présence de l’huile tunisienne sur les marchés premium.",
      icon: Globe2,
      href: "/actualites/contrat-export-europe-2024",
    },
  ],

  contact: {
    title: "Contactez-Nous",
    subtitle: "Parlons de Votre Projet",
    description:
      "Éleveur, producteur, distributeur, importateur ou partenaire potentiel — notre équipe vous répond sous 24h.",
    generalEmail: "contact@almahdiagrigroup.tn",
    phone: "+216 XX XXX XXX",
    address: "[À compléter] — Tunisie",
    hours: "Lun–Ven 8h–17h · Sam 8h–12h",
    companyEmails: [
      {
        company: "Vitale",
        emoji: "🐄",
        email: "vitale@almahdiagrigroup.tn",
      },
      {
        company: "Fruits AlMahdi",
        emoji: "❄️",
        email: "froid@fruitsalmahdi.tn",
      },
      {
        company: "AlMahdi Olive",
        emoji: "🫒",
        email: "export@almahdi-olive.tn",
      },
    ],
    formSubjects: [
      "Vitale",
      "Fruits AlMahdi",
      "AlMahdi Olive",
      "Groupe",
      "Demande de devis",
      "Export",
      "Partenariat",
      "Autre demande",
    ],
  },

  footer: {
    columns: [
      {
        title: "Le Groupe",
        links: [
          {
            label: "Accueil",
            href: "/",
          },
          {
            label: "Notre Histoire",
            href: "/notre-groupe/histoire",
          },
          {
            label: "Notre Savoir-Faire",
            href: "/notre-groupe/savoir-faire",
          },
          {
            label: "Notre Équipe",
            href: "/notre-groupe/equipe",
          },
          {
            label: "Qualité & Certifs",
            href: "/qualite",
          },
        ],
      },
      {
        title: "Nos Sociétés",
        links: [
          {
            label: "Vitale",
            href: "/nos-societes/vitale",
          },
          {
            label: "Fruits AlMahdi",
            href: "/nos-societes/fruits-almahdi",
          },
          {
            label: "AlMahdi Olive",
            href: "/nos-societes/almahdi-olive",
          },
        ],
      },
      {
        title: "Actualités",
        links: [
          {
            label: "Médailles IOOC",
            href: "/actualites/medailles-iooc",
          },
          {
            label: "Foires & Salons",
            href: "/actualites/foires-salons",
          },
          {
            label: "Partenariats",
            href: "/actualites/partenariats",
          },
        ],
      },
      {
        title: "Contact",
        links: [
          {
            label: "Formulaire Contact",
            href: "/contact",
          },
          {
            label: "Demander un Devis",
            href: "/contact",
          },
          {
            label: "Trouver Nos Bureaux",
            href: "/contact",
          },
          {
            label: "Carrières",
            href: "/carrieres",
          },
          {
            label: "Mentions Légales",
            href: "/mentions-legales",
          },
        ],
      },
    ],
    copyright: "© 2024 AlMahdi AgriGroup. Tous droits réservés.",
  },
} as const;



export type SiteContent = typeof siteContent;
export type Society = (typeof siteContent.societies)[number];
export type NewsArticle = (typeof siteContent.news)[number];