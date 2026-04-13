export interface World {
  id: string;
  name: string;
  emoji: string;
  greeting: string;
  subtext: string;
  accent: string;
  accentSecondary: string;
  bgGradient: string;
  particleChar: string;
  font: string;
}

export const WORLDS: World[] = [
  {
    id: "medieval",
    name: "Royaume Médiéval",
    emoji: "🏰",
    greeting: "Salutations, noble visiteur !",
    subtext:
      "Bienvenue en ces terres glorieuses ! Notre sorcier informatique a travaillé dur pour faire apparaître cette page. Il a même arrêté de mâcher son parchemin, ce qui est rarissime.",
    accent: "#d4a017",
    accentSecondary: "#8b1a1a",
    bgGradient: "from-[#1a0f0a] via-[#2d1a0e] to-[#1a0f0a]",
    particleChar: "⚔",
    font: "MedievalSharp",
  },
  {
    id: "space",
    name: "Station Orion-7",
    emoji: "🚀",
    greeting: "TRANSMISSION REÇUE. BIENVENUE.",
    subtext:
      "Unité organique détectée dans le secteur Gamma. Votre présence a été enregistrée dans 47 bases de données intergalactiques. Le café est froid depuis 3 années-lumière. Désolé.",
    accent: "#00d4ff",
    accentSecondary: "#7b2fff",
    bgGradient: "from-[#020818] via-[#050d2a] to-[#020818]",
    particleChar: "★",
    font: "SpaceMono",
  },
  {
    id: "pirate",
    name: "Le Vaisseau Maudit",
    emoji: "🏴‍☠️",
    greeting: "ARRR ! Bienvenue à bord, moussaillon !",
    subtext:
      "Ye be walkin' sur le pont de l'Araignée Noire ! On cherche un trésor quelque part... enfin, on a perdu la carte. Quelqu'un a marché dessus avec des bottes mouillées.",
    accent: "#ff6b35",
    accentSecondary: "#c41e3a",
    bgGradient: "from-[#0a0805] via-[#1a120a] to-[#0a0805]",
    particleChar: "☠",
    font: "PirateFont",
  },
  {
    id: "underwater",
    name: "Cité d'Aquathar",
    emoji: "🐠",
    greeting: "~ Bienvenue dans les abysses ~",
    subtext:
      "Vous venez de pénétrer la cité sous-marine d'Aquathar, fondée il y a 3000 ans par un crevette philosophe. Notre spécialité : les réunions de 4 heures sur la salinité de l'eau.",
    accent: "#00e5cc",
    accentSecondary: "#0066cc",
    bgGradient: "from-[#010f1a] via-[#02192e] to-[#010f1a]",
    particleChar: "◈",
    font: "UnderwaterFont",
  },
  {
    id: "western",
    name: "Perdition Falls",
    emoji: "🤠",
    greeting: "Hé, l'étranger.",
    subtext:
      "T'es pas d'ici. Ça se voit. Le shérif aussi l'a vu. Le chien aussi. Même la poussière te regarde bizarrement. Commande quelque chose ou rentre chez toi.",
    accent: "#d4922a",
    accentSecondary: "#7a3b1e",
    bgGradient: "from-[#12090302] via-[#1e0f06] to-[#120903]",
    particleChar: "✦",
    font: "WesternFont",
  },
  {
    id: "zombie",
    name: "Zone Delta-9",
    emoji: "🧟",
    greeting: "...tu es... vivant ?",
    subtext:
      "On a pas vu quelqu'un de... comme toi... depuis des semaines. T'as de la nourriture ? Non ? Dommage. Reste quand même, la compagnie c'est rare et les morts-vivants racontent toujours les mêmes histoires.",
    accent: "#7fff00",
    accentSecondary: "#3a5a0a",
    bgGradient: "from-[#050a01] via-[#0a1202] to-[#050a01]",
    particleChar: "✗",
    font: "ZombieFont",
  },
  {
    id: "ancient",
    name: "Imperium Romanum",
    emoji: "🏛️",
    greeting: "AVE, HOSPES !",
    subtext:
      "Tu foules le sol de la plus grande civilisation que ce monde ait connue ! Nous avons inventé les routes, les aqueducs, et les réunions inutiles. Certains disent que la troisième invention est notre plus grande erreur.",
    accent: "#ffd700",
    accentSecondary: "#cc2200",
    bgGradient: "from-[#100a00] via-[#1e1200] to-[#100a00]",
    particleChar: "Ω",
    font: "AncientFont",
  },
  {
    id: "cyberpunk",
    name: "Neo-Ciudad 2087",
    emoji: "🤖",
    greeting: "JACK_IN // SYSTÈME EN LIGNE.",
    subtext:
      "Bienvenue dans la jungle de données. Ton implant neural est à 12% de batterie. Les mégacorps te regardent. Le café coûte 800 crédits. Mais au moins le WiFi est rapide — enfin, quand la pluie acide n'érode pas les antennes.",
    accent: "#ff00ff",
    accentSecondary: "#00ffff",
    bgGradient: "from-[#080010] via-[#0f001a] to-[#080010]",
    particleChar: "⬡",
    font: "CyberpunkFont",
  },
  {
    id: "wizard",
    name: "Tour de l'Omniscient",
    emoji: "🧙",
    greeting: "Ah… un visiteur. Ou est-ce un rêve ?",
    subtext:
      "Je t'attendais… ou peut-être c'était quelqu'un d'autre. Les prophéties sont si ambiguës. En tout cas, le thé est prêt. Il l'est toujours. C'est ma seule vraie magie.",
    accent: "#9b59b6",
    accentSecondary: "#1a6b8a",
    bgGradient: "from-[#060010] via-[#0d0020] to-[#060010]",
    particleChar: "✧",
    font: "WizardFont",
  },
];
