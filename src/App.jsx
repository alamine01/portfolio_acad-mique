import { useRef, useState } from 'react';
import { 
  Calendar, Target, Code, 
  Palette, Lightbulb, Search, Rocket, CheckCircle2, FileText,
  Sparkles, ArrowRight, Layers, X, FileSearch,
  Cpu, Wrench, CheckCircle, Info, ChevronLeft, Image as ImageIcon
} from 'lucide-react';

const competencesData = {
  develpper: {
    title: 'DÉVELOPPER',
    tagline: '01 / SYSTEM ARCHITECTURE & CODING',
    subtitle: 'Développer pour le web et les médias numériques',
    color: 'var(--accent-blue)',
    glowClass: 'neon-glow-blue',
    icon: <Code size={24} />,
    traces: [
      {
        id: 1,
        titre: 'Jeu Arcade 2D - Phaser 3',
        semestre: 'Semestre 3',
        ac: 'AC14.02',
        acLabel: 'AC14.02 - Intégrer des médias numériques dans un moteur ou une plateforme',
        ce: 'CE4.02',
        ceLabel: 'CE4.02 - Production de code propre, modulaire et structuré pour le web',
        contexte: 'SAÉ 3.01 (Projet Universitaire de fin de semestre)',
        summary: 'Développement d\'un jeu interactif multijoueur 2D avec gestion de physique et collisions.',
        tech: ['Phaser 3', 'JavaScript ES6', 'Canvas API', 'Audacity', 'Physics Engine'],
        learnings: [
          'Architecture modulaire orientée objet avec le système de "Scenes" Phaser.',
          'Implémentation de moteurs physiques 2D, gestion des vecteurs de vitesse et de friction.',
          'Gestion des listeners d\'événements clavier pour les mouvements fluides.',
          'Recentrage stratégique : recul réflexif sur l\'orientation professionnelle (développement d\'applications métier à valeur d\'usage plutôt que le jeu vidéo).'
        ],
        contenu: `En semestre 3, j'ai développé un jeu arcade 2D multi-joueur en utilisant Phaser 3. Mon rôle était complet : design des mécaniques, implémentation du code, intégration des effets sonores, création des obstacles et gestion des collisions.

Ce projet m'a permis de maîtriser les fondations du développement interactif. J'ai dû structurer mon code selon l'architecture Scene de Phaser, comprendre comment les événements déclenchent les interactions, et implémenter la physique 2D.

Cependant, au fil du semestre, j'ai réalisé que ma passion réside ailleurs : je ne suis pas passionné par la création de jeux vidéo. Je voulais plutôt appliquer mes compétences à des projets qui résolvent des besoins réels, à créer des plateformes utiles qui apportent de la valeur à des utilisateurs.`
      },
      {
        id: 2,
        titre: 'AESM - Plateforme associative étudiante',
        semestre: 'Semestre 4 (Stage)',
        ac: 'AC24.02',
        acLabel: 'AC24.02 - Développer pour des plateformes multiples et distribuer des applications',
        ce: 'CE4.05',
        ceLabel: 'CE4.05 - Intégration d\'API tierces complexes et sécurisation des données',
        contexte: 'Stage de fin d\'études - AESM (Montpellier)',
        summary: 'Développement de la plateforme officielle de l\'AESM avec guide d\'intégration, événements et cagnottes en ligne.',
        tech: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Stripe API', 'Brevo API'],
        images: [
          '/assets/aesm_mockup.jpg'
        ],
        learnings: [
          'Conception et déploiement d\'une architecture Next.js optimisée pour le SEO et la performance.',
          'Intégration de Supabase pour l\'authentification sécurisée et la gestion de la base de données.',
          'Mise en place de l\'API de messagerie Brevo pour l\'automatisation des notifications par e-mail.',
          'Développement d\'un module de cagnottes solidaires en ligne avec l\'API de paiement Stripe.',
          'Création d\'un guide interactif d\'accueil et d\'intégration pour les étudiants sénégalais à Montpellier.'
        ],
        contenu: `Lors de mon stage de fin de BUT 2, j'ai conçu et développé la plateforme officielle de l'Association des Étudiants Sénégalais de Montpellier (AESM). Ce projet répond à un besoin concret d'accueil, d'intégration et d'entraide pour la communauté étudiante.

La plateforme comprend plusieurs modules clés : un guide de l'étudiant interactif pour faciliter les démarches administratives et le logement, un gestionnaire d'événements culturels et académiques, un annuaire de services, et un système de cagnottes en ligne sécurisées pour soutenir les projets et urgences des membres.

D'un point de vue technique, j'ai opté pour Next.js pour assurer un excellent référencement naturel (SEO) et des performances optimales. L'authentification et la base de données sont gérées via Supabase, tandis que l'automatisation des e-mails transactionnels repose sur l'API Brevo, et le module de cagnottes intègre Stripe pour les transactions en ligne.

Ce projet de stage marque une transition décisive dans mon parcours de développeur. Contrairement aux projets universitaires fictifs, j'ai dû travailler sous de réelles contraintes de production, gérer la relation avec un commanditaire associatif, et concevoir une interface inclusive et accessible répondant aux besoins de centaines d'utilisateurs actifs.`
      }
    ]
  },
  exprimer: {
    title: 'EXPRIMER',
    tagline: '02 / BRAND IDENTITY & VISUAL DESIGN',
    subtitle: 'Exprimer un message avec les médias numériques',
    color: 'var(--accent-pink)',
    glowClass: 'neon-glow-pink',
    icon: <Palette size={24} />,
    traces: [
      {
        id: 1,
        titre: 'Motion design "Aides financières"',
        semestre: 'Semestre 3',
        ac: 'AC23.04',
        acLabel: 'AC23.04 - Produire des médias de communication visuelle et vidéo',
        ce: 'CE3.02',
        ceLabel: 'CE3.02 - Montage et synchronisation minutieuse de contenus dynamiques',
        contexte: 'SAÉ 3.03 (Projet Universitaire de Communication)',
        summary: 'Animation publicitaire de 15 secondes pour entreprises avec synchronisation voix off.',
        tech: ['After Effects', 'ElevenLabs AI', 'Adobe Illustrator', 'Premiere Pro'],
        images: ['/assets/motion_aides_screenshot.png'],
        learnings: [
          'Rédaction de scénarios courts avec contrainte temporelle forte (format pub 15s).',
          'Utilisation d\'outils de voix off synthétique haut de gamme (ElevenLabs) pour la narration.',
          'Animation d\'icônes vectorielles et calques de forme sous After Effects.',
          'Synchronisation audio-visuelle à l\'image près (storytelling dynamique).'
        ],
        contenu: `En semestre 3, j'ai créé un motion design court (15 secondes) destiné à informer les employeurs sur les aides financières liées à l'apprentissage.

Structure narrative : J'ai appliqué une structure classique de storytelling - accroche impactante, arguments clés présentés visuellement, appel à l'action. Le style visuel s'inspire de formats explicatifs comme Vox Media : clair, synthétique, accessible.

Le défi de la concision : Communiquer efficacement en 15 secondes est une contrainte majeure. Il a fallu sélectionner les informations les plus pertinentes, trouver les bonnes icônes, et créer un rythme narratif cohérent.

Production : J'ai utilisé ElevenLabs pour la voix off, obtenant une narration professionnelle en français, puis synchronisé avec l'animation After Effects pour que le timing soit parfait.`
      },
      {
        id: 2,
        titre: 'Liqaverse - Identité visuelle complète',
        semestre: 'Semestre 4',
        ac: 'AC13.02',
        acLabel: 'AC13.02 - Concevoir et décliner des chartes visuelles complexes multicanaux',
        ce: 'CE3.01',
        ceLabel: 'CE3.01 - Identité visuelle multi-canal cohérente et professionnelle',
        contexte: 'Projet Entrepreneurial et communication digitale',
        summary: 'Branding complet, chartes graphiques, motion designs, affiches et supports sociaux.',
        tech: ['Adobe Illustrator', 'After Effects', 'Figma Brand Guidelines', 'Photoshop'],
        pdfLink: '/assets/liqaverse/charte_graphique.pdf',
        images: [
          '/assets/liqaverse/photo_9_2026-06-02_18-12-51.jpg',
          '/assets/liqaverse/photo_10_2026-06-02_18-12-51.jpg',
          '/assets/liqaverse/photo_11_2026-06-02_18-12-51.jpg',
          '/assets/liqaverse/photo_12_2026-06-02_18-12-51.jpg',
          '/assets/liqaverse/photo_13_2026-06-02_18-12-51.jpg',
          '/assets/liqaverse/photo_14_2026-06-02_18-12-51.jpg',
          '/assets/liqaverse/photo_15_2026-06-02_18-12-51.jpg',
          '/assets/liqaverse/photo_16_2026-06-02_18-12-51.jpg'
        ],
        learnings: [
          'Création d\'un logotype et sélection de palettes colorimétriques harmonieuses adaptées au contexte culturel.',
          'Déclinaison de la charte sur supports physiques (3 affiches de communication).',
          'Production d\'une série de 3 vidéos de communication dynamiques de 50 secondes.',
          'Développement de carrousels et templates de publications pour les réseaux sociaux (cohérence de marque).'
        ],
        contenu: `En semestre 4, j'ai créé l'identité visuelle complète de Liqaverse : charte graphique, 3 motion designs (~50 secondes chacun), 3 affiches, et 2 carrousels pour réseaux sociaux.

Création de la charte graphique : J'ai défini l'identité visuelle incluant couleurs, typographies, formes, et système cohérent d'icônes. La charte devait refléter le contexte (apprentissage coranique) tout en restant moderne et accessible.

Motion designs : Les trois vidéos abordaient des sujets différents (promotion générale, annonces, lancement app mobile). J'ai utilisé After Effects pour créer des animations fluides et cohérentes.

Progression vs Trace 1 : Si le motion "Aides financières" m'a appris à condenser un message en 15 secondes, Liqaverse m'a permis de développer une communication visuelle cohérente multiplateforme. C'est un saut de la ponctualité vers la systématisation et la cohérence de brand.`
      }
    ]
  },
  concevoir: {
    title: 'CONCEVOIR',
    tagline: '03 / STRATEGY & CONCEPT DESIGN',
    subtitle: 'Concevoir ou co-concevoir une réponse stratégique',
    color: 'var(--accent-orange)',
    glowClass: 'neon-glow-orange',
    icon: <Lightbulb size={24} />,
    traces: [
      {
        id: 1,
        titre: 'Analyse stratégie com (On Air + Hydratis)',
        semestre: 'Semestre 3',
        ac: 'AC12.01',
        acLabel: 'AC12.01 - Analyser la présence numérique d\'organisations',
        ce: 'CE2.03',
        ceLabel: 'CE2.03 - Cartographie et audit de communication digitale sur différents canaux',
        contexte: 'SAÉ 3.02 (Stratégie de communication de marque)',
        summary: 'Audit approfondi de la communication digitale et ciblage de deux marques majeures.',
        tech: ['Canva Pro', 'Social Listening tools', 'Google Workspace'],
        learnings: [
          'Méthodologie d\'audit de réseaux sociaux (Instagram, LinkedIn, YouTube).',
          'Cartographie de cibles marketing (Persona B2B vs B2C).',
          'Analyse critique de positionnement de marque par rapport à la concurrence.',
          'Synthèse visuelle de rapports d\'analyses stratégiques pour des comités décisionnels.'
        ],
        contenu: `En semestre 3, j'ai réalisé une SAÉ consistant à analyser la stratégie de communication de deux acteurs : On Air et Hydratis, de manière séparée et approfondie.

Méthodologie d'analyse : Pour chacun, j'ai décortiqué leur présence sur les réseaux sociaux, analysé le contenu, compris les messages clés, cartographié leur stratégie de communication, étudié leurs campagnes publicitaires, et identifié leurs cibles.

Conception de la réponse : Cette analyse m'a permis de comprendre comment ces organisations conçoivent leurs services non pas en termes techniques, mais en termes d'usage et de fonctionnalité. En observant leurs usages de chaque canal et mode de communication, j'ai compris comment adapter un message à une audience.

Livrables : J'ai restitué cette analyse sous forme de présentation Canva, synthétisant les findings et recommandations de manière visuelle et compréhensible.`
      },
      {
        id: 2,
        titre: 'Événement Chandeleur - Festival Béziers',
        semestre: 'Semestre 4',
        ac: 'AC22.03',
        acLabel: 'AC22.03 - Modéliser une réponse stratégique adaptée à un commanditaire public',
        ce: 'CE2.01',
        ceLabel: 'CE2.01 - Conception de formulaires inclusive, respectueuse et accessible',
        contexte: 'SAÉ 4.02 (Conception événementielle municipale)',
        summary: 'Gestion agile et conception inclusive de formulaires et de vidéos de promotion événementielle.',
        tech: ['Jira Software', 'Figma Mockups', 'HTML5 Form API', 'Premiere Pro'],
        learnings: [
          'Application de normes d\'accessibilité (RGAA) pour la conception de formulaires.',
          'Rédaction de scripts narratifs de sensibilisation inclusive pour le grand public.',
          'Structuration de la récolte de données utilisateur sécurisées conforme RGPD.',
          'Passage du rôle d\'analyste de marque à celui de concepteur responsable.'
        ],
        contenu: `En semestre 4, j'ai participé à une SAÉ fictif mais contextualisé : concevoir et produire les supports de communication pour un festival organisé par la mairie de Béziers. Ma responsabilité était triple : créer les vidéos de promotion, rédiger les scripts narratifs, gérer le backlog sur Jira, et développer le formulaire d'inscription.

Plan d'action structuré : En équipe de 5 personnes, nous avons structuré notre approche en sprints de 2 mois via Jira. J'ai contribué à définir le contenu vidéo, les scripts narratifs, le formulaire, et la priorisation des tâches.

Responsabilité sociale : Concevoir pour un festival municipal, c'était penser au-delà de l'esthétique. Comment faire en sorte que les messages soient inclusifs et accessibles ? Comment valoriser les aspects culturels et communautaires de l'événement ?

Progression vs Trace 1 : En S3, j'ai appris à analyser une stratégie existante. En S4, j'ai appris à la construire de zéro pour un contexte réel. En S3, j'étais analyste. En S4, j'étais concepteur avec des responsabilités réelles.`
      }
    ]
  },
  comprendre: {
    title: 'COMPRENDRE',
    tagline: '04 / USER RESEARCH & ANALYTICS',
    subtitle: 'Comprendre les écosystèmes et les besoins utilisateurs',
    color: 'var(--accent-green)',
    glowClass: 'neon-glow-green',
    icon: <Search size={24} />,
    traces: [
      {
        id: 1,
        titre: 'MoodTrack - Entretiens utilisateurs',
        semestre: 'Semestre 3 - 4',
        ac: 'AC11.06',
        acLabel: 'AC11.06 - Conduire des tests utilisateurs qualitatifs et tests de prototypes',
        ce: 'CE1.02',
        ceLabel: 'CE1.02 - Modélisation de parcours utilisateurs et personas cibles',
        contexte: 'SAÉ 3.01 & 4.01 (Projet Mobile - Santé étudiante)',
        summary: 'Conduite d\'entretiens qualitatifs et création de personas cibles pour une application de santé.',
        tech: ['Figma Prototyping', 'Google Forms', 'Miro (Personas Mapping)'],
        images: [
          '/assets/moodtrack/photo_1.png',
          '/assets/moodtrack/photo_2.png',
          '/assets/moodtrack/photo_3.png',
          '/assets/moodtrack/photo_4.png',
          '/assets/moodtrack/photo_5.png'
        ],
        learnings: [
          'Rédaction de guides d\'entretiens semi-directifs et de scénarios utilisateurs complexes.',
          'Animation de séances d\'entrevue et de tests de pensées verbalisées ("Thinking Aloud").',
          'Synthèse d\'entretiens dans des profils types (Personas réels basés sur la donnée).',
          'Itération ergonomique sous Figma à partir des retours critiques collectés.'
        ],
        contenu: `De semestre 3 à semestre 4, j'ai participé à une SAÉ visant à créer une application mobile pour améliorer la santé physique et mentale des étudiants : MoodTrack.

Processus d'entretiens utilisateurs : Nous avons recruté et testé auprès de 6 étudiants ayant un intérêt pour le bien-être. Nous avons créé un protocole de test rigoureux incluant un scénario immersif, des tâches spécifiques, et un questionnaire mélangeant questions quantitatives et qualitatives.

Écoute et observation : Au-delà du questionnaire papier, les utilisateurs étaient invités à verbaliser leurs pensées pendant qu'ils utilisaient l'application. Cela m'a permis de collecter des données quantitatives ET d'observer directement les moments de confusion.

Création de personas : À partir des données, nous avons créé 3 personas distincts - synthèses des entretiens réels, ancrées dans les données.

Itération : Nous avons analysé systématiquement les suggestions des utilisateurs et adapté le prototype Figma en S4.`
      },
      {
        id: 2,
        titre: 'Analyses stratégie (On Air + Hydratis)',
        semestre: 'Semestre 3',
        ac: 'AC21.01',
        acLabel: 'AC21.01 - Modéliser des données quantitatives d\'engagement social',
        ce: 'CE1.03',
        ceLabel: 'CE1.03 - Analyse statistique comparée de comptes de réseaux sociaux',
        contexte: 'SAÉ 3.02 (Traitement de données statistiques digitales)',
        summary: 'Analyses statistiques et comparaisons de métriques d\'engagement social média.',
        tech: ['Microsoft Excel', 'Google Sheets Analytics', 'Meta Business Analytics'],
        learnings: [
          'Traitement et extraction de jeux de données sur réseaux sociaux (KPIs d\'abonnés, reach).',
          'Formulations de calculs statistiques complexes pour les taux d\'engagement globaux.',
          'Analyse chronologique pour détecter les pics de performance de posting.',
          'Comparaison statistique par rapport à des benchmarks concurrents de marché.'
        ],
        contenu: `En semestre 3, j'ai réalisé une SAÉ analysant la stratégie de communication de deux acteurs : On Air et Hydratis, en s'appuyant sur des données quantitatives réelles.

Données quantitatives : Pour chacun, j'ai extrait des données de leurs plateformes sociales : nombre de followers, taux d'engagement, reach, fréquence de posting, type de contenu performant, composition de l'audience.

Analyse statistique : J'ai compilé ces chiffres pour identifier des tendances : quel type de contenu génère le plus d'engagement ? À quel moment du jour/semaine postent-ils ? Comment leur stratégie a-t-elle évolué ?

Contextualisation : J'ai comparé leurs données avec celles des concurrents pour comprendre leur positionnement relatif dans le marché.

Conclusion stratégique : En croisant analyse quantitative et observation qualitative, j'ai pu conclure sur ce qui marche vraiment dans leur stratégie de communication.`
      }
    ]
  },
  entreprendre: {
    title: 'ENTREPRENDRE',
    tagline: '05 / DIGITAL BUSINESS & MANAGEMENT',
    subtitle: 'Entreprendre dans le secteur du numérique',
    color: 'var(--accent-cyan)',
    glowClass: 'neon-glow-cyan',
    icon: <Rocket size={24} />,
    traces: [
      {
        id: 1,
        titre: 'QR PRO CREATOR - Startup innovation',
        semestre: 'Semestre 3 (En Cours)',
        ac: 'AC15.01',
        acLabel: 'AC15.01 - Créer un business model pour un produit ou service numérique',
        ce: 'CE5.01',
        ceLabel: 'CE5.01 - Structuration commerciale d\'une offre physique & digitale combinée',
        contexte: 'Startup entrepreneuriale réelle (Sénégal)',
        summary: 'Création d\'une startup de cartes NFC, intégration de Wave/Orange Money et gestion d\'équipe.',
        tech: ['NFC Technology SDK', 'Wave API', 'Orange Money API', 'Lean Canvas', 'Canva Marketing'],
        images: ['/assets/qr_pro_screenshot.png'],
        learnings: [
          'Définition de modèles économiques (Freemium + matériel premium).',
          'Mise en place de supply chain physique pour l\'importation/programmation de cartes NFC.',
          'Intégration d\'APIs de paiements mobiles locales en Afrique de l\'Ouest (Wave & Orange Money).',
          'Gestion d\'équipe pluridisciplinaire en phase de pré-lancement (de 3 à 5 personnes).'
        ],
        contenu: `En semestre 3, j'ai lancé une startup réelle : QR PRO CREATOR. L'idée était innovante au contexte sénégalais - créer une plateforme permettant aux professionnels de générer des QR codes personnalisés et des cartes de visite digitales, complétée par des produits physiques (cartes NFC, autocollants).

Démarrage et concrétisation : L'un des plus gros défis était de concrétiser l'idée en produit réel. Nous avons dû concevoir une plateforme web complète, intégrer les paiements (Wave, Orange Money), créer une supply chain pour les produits physiques.

Équipe et gestion : J'ai commencé seul avec l'idée, puis recruté une équipe. Nous avons grandi de 3 à 5 personnes. J'ai utilisé Google Sheets pour tracker les tâches - simple mais efficace pour une startup en phase de lancement.

Sensibilisation du marché : Le plus grand défi était de faire connaître une solution innovante dans un marché non préparé.

Leçon critique : J'aurais dû créer du contenu marketing dès le départ. Avoir un bon produit ne suffit pas sans stratégie d'acquisition des clients.

Modèle économique : Freemium (création gratuite) + produits payants (cartes NFC premium, autocollants, packs). Toujours en croissance.`
      },
      {
        id: 2,
        titre: 'Chandeleur - Gestion projet Agile',
        semestre: 'Semestre 4',
        ac: 'AC25.01',
        acLabel: 'AC25.01 - Cadrer et piloter un projet sous méthodologie agile',
        ce: 'CE5.02',
        ceLabel: 'CE5.02 - Planification de sprints et animation des cérémonies de gestion de projet',
        contexte: 'SAÉ 4.02 (Projet Événementiel Agile)',
        summary: 'Gestion opérationnelle sous modèle Scrum/Jira pour des livrables de communication.',
        tech: ['Jira Software', 'Slack integrations', 'Confluence Documentation', 'Agile Scrum Board'],
        learnings: [
          'Animation des cérémonies Scrum (Sprint Planning, Daily Standup, Sprint Retrospective).',
          'Gestion opérationnelle de backlog d\'équipe multi-profils (design, dev, com) sur Jira.',
          'Adaptabilité agile : pivot de priorités suite aux retours clients lors des revues de sprint.',
          'Calcul et suivi de vélocité d\'équipe et mise en place d\'indicateurs d\'avancement.'
        ],
        contenu: `En semestre 4, j'ai expérimenté la gestion de projet agile : créer les supports de communication pour un festival fictif organisé par la mairie de Béziers.

Méthode Agile (Scrum) : Nous avons structuré le projet en sprints de 2 mois via Jira. Chaque sprint avait des objectifs clairs, des tâches priorisées, et des deadlines. Nous avons suivi les cérémonies Agile : planification, daily standups, rétrospectives.

Collaboration et parties prenantes : L'équipe était composée de 5 personnes avec des rôles différents (dev, design, marketing, etc.). Le défi était de favoriser la collaboration et d'aligner les efforts vers des objectifs communs.

Adaptabilité : La beauté de l'agile est la capacité à pivoter. Si une direction ne fonctionne pas, on peut l'ajuster rapidement. Les rétrospectives nous permettaient de demander : "Qu'est-ce qui a bien marché ? Qu'est-ce qu'on aurait pu faire mieux ?"

Livrables créatifs : Créer des vidéos, affiches, flyers sous un modèle agile m'a forcé à être discipliné sur les deadlines et itérer rapidement.

Leçon clé : En entrepreneuriat, la structure est moins importante que la capacité à apprendre, pivoter, et exécuter.`
      }
    ]
  }
};

function RadarChartComponent({ activeComp, onSelect }) {
  const cx = 150;
  const cy = 150;
  const r = 90;
  const skillKeys = ['develpper', 'exprimer', 'concevoir', 'comprendre', 'entreprendre'];
  const scores = { develpper: 90, exprimer: 85, concevoir: 80, comprendre: 75, entreprendre: 95 };

  const getCoordinates = (index, value) => {
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / 5;
    const distance = (value / 100) * r;
    return { x: cx + distance * Math.cos(angle), y: cy + distance * Math.sin(angle) };
  };

  const points = skillKeys.map((key, index) => {
    const coords = getCoordinates(index, scores[key]);
    return `${coords.x},${coords.y}`;
  }).join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', position: 'relative' }}>
      <svg viewBox="0 0 300 300" style={{ width: '100%', maxHeight: '290px', overflow: 'visible' }}>
        {[20, 40, 60, 80, 100].map((level, i) => {
          const levelPoints = skillKeys.map((_, idx) => {
            const coords = getCoordinates(idx, level);
            return `${coords.x},${coords.y}`;
          }).join(' ');
          
          return (
            <polygon
              key={i}
              points={levelPoints}
              fill="none"
              stroke="rgba(255, 255, 255, 0.035)"
              strokeWidth="1"
            />
          );
        })}

        {skillKeys.map((_, index) => {
          const outerCoords = getCoordinates(index, 100);
          return (
            <line
              key={index}
              x1={cx}
              y1={cy}
              x2={outerCoords.x}
              y2={outerCoords.y}
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1"
            />
          );
        })}

        <polygon
          points={points}
          fill="rgba(59, 130, 246, 0.12)"
          stroke="url(#radarGradient)"
          strokeWidth="2.5"
        />

        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-blue)" />
            <stop offset="100%" stopColor="var(--accent-cyan)" />
          </linearGradient>
        </defs>

        {skillKeys.map((key, index) => {
          const coords = getCoordinates(index, scores[key]);
          const isActive = activeComp === key;
          const colors = {
            develpper: '#3b82f6',
            exprimer: '#ec4899',
            concevoir: '#f59e0b',
            comprendre: '#10b981',
            entreprendre: '#06b6d4'
          };
          
          return (
            <g key={key} style={{ cursor: 'pointer' }} onClick={() => onSelect(key)}>
              <circle cx={coords.x} cy={coords.y} r={isActive ? 6 : 4.5} fill={colors[key]} stroke="#030712" strokeWidth="2" />
              <circle cx={coords.x} cy={coords.y} r={isActive ? 14 : 9} fill={colors[key]} opacity={isActive ? 0.35 : 0.08} />
            </g>
          );
        })}

        {skillKeys.map((key, index) => {
          const angle = -Math.PI / 2 + (index * 2 * Math.PI) / 5;
          const distance = r + 24;
          const labelCoords = { x: cx + distance * Math.cos(angle), y: cy + distance * Math.sin(angle) };
          const isActive = activeComp === key;
          
          const titles = {
            develpper: 'DÉVELOPPER',
            exprimer: 'EXPRIMER',
            concevoir: 'CONCEVOIR',
            comprendre: 'COMPRENDRE',
            entreprendre: 'ENTREPRENDRE'
          };
          
          let textAnchor = 'middle';
          if (labelCoords.x > cx + 15) textAnchor = 'start';
          if (labelCoords.x < cx - 15) textAnchor = 'end';

          return (
            <g key={key} onClick={() => onSelect(key)} style={{ cursor: 'pointer' }}>
              <text
                x={labelCoords.x}
                y={labelCoords.y + 4}
                fill={isActive ? '#ffffff' : 'var(--text-secondary)'}
                fontSize="9.5"
                fontWeight={isActive ? '800' : '600'}
                textAnchor={textAnchor}
                style={{
                  fontFamily: 'var(--font-title)',
                  letterSpacing: '0.05em',
                  userSelect: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {titles[key]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// Project Card with internal Slider/Carousel state
function ProjectCard({ proj }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = proj.images || [proj.image];

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="glass-panel dashboard-grid" style={{ 
      display: 'grid', 
      gridTemplateColumns: '1.15fr 1fr', 
      gap: '0', 
      overflow: 'hidden', 
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      
      {/* Visual mockup slot with interactive slider controls */}
      <div style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        height: '420px', 
        background: '#090d16',
        borderRight: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src={images[currentIdx]} 
          alt={proj.title} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain',
            padding: '1.5rem',
            transition: 'opacity 0.3s ease'
          }}
        />

        {/* Carousel indicators & arrows */}
        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrev}
              style={{
                position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(3, 7, 18, 0.6)', border: '1px solid rgba(255,255,255,0.1)',
                width: '32px', height: '32px', borderRadius: '50%', color: '#fff',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 5
              }}
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={handleNext}
              style={{
                position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(3, 7, 18, 0.6)', border: '1px solid rgba(255,255,255,0.1)',
                width: '32px', height: '32px', borderRadius: '50%', color: '#fff',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 5
              }}
            >
              <ArrowRight size={16} />
            </button>
            <div style={{
              position: 'absolute', bottom: '15px', right: '15px',
              background: 'rgba(3, 7, 18, 0.75)', padding: '0.25rem 0.65rem',
              borderRadius: '99px', fontSize: '0.72rem', color: '#fff',
              border: '1px solid rgba(255,255,255,0.08)', fontWeight: '700'
            }}>
              {currentIdx + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Details card slot */}
      <div style={{ padding: '2rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.68rem', fontWeight: '800', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>{proj.tagline}</span>
          <h3 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#ffffff', marginTop: '0.25rem' }}>{proj.title}</h3>
          <span style={{ fontSize: '0.85rem', color: proj.color, fontWeight: '700', marginTop: '0.25rem', display: 'block' }}>{proj.subtitle}</span>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.65' }}>{proj.desc}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
          {proj.bullets.map((bullet, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <CheckCircle2 size={14} style={{ color: proj.color, flexShrink: 0 }} />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
        
        {proj.siteUrl && (
          <a href={proj.siteUrl} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${proj.color}`,
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '0.85rem',
            marginTop: '1rem',
            width: 'fit-content',
            transition: 'background 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = `rgba(255,255,255,0.1)`}
          onMouseLeave={(e) => e.currentTarget.style.background = `rgba(255, 255, 255, 0.05)`}
          >
            Voir le site <ArrowRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
}

function App() {

  const [selectedComp, setSelectedComp] = useState('develpper');
  const [activeTraceModal, setActiveTraceModal] = useState(null);
  const [featuredModalImg, setFeaturedModalImg] = useState(null);

  const handleScroll = (refName) => {
    const targetRef = {
      accueil: accueilRef,
      competences: competencesRef,
      projets: projetsRef,
      matrice: matriceRef
    }[refName];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openTraceModal = (trace, color) => {
    setActiveTraceModal({ ...trace, compColor: color });
    if (trace.images && trace.images.length > 0) {
      setFeaturedModalImg(trace.images[0]);
    } else {
      setFeaturedModalImg(null);
    }
  };

  const projectsData = [
    {
      title: 'Plateforme AESM',
      subtitle: 'Next.js, Tailwind CSS, Supabase, Stripe & Brevo API',
      tagline: 'PLATEFORME ASSOCIATIVE / STAGE',
      desc: 'Création et déploiement de la plateforme officielle de l\'Association des Étudiants Sénégalais de Montpellier (AESM). Elle facilite l\'intégration des nouveaux arrivants via un guide interactif, propose un système de cagnottes solidaires en ligne et gère les événements et services de l\'association.',
      images: ['/assets/aesm_mockup.jpg'],
      color: 'var(--accent-blue)',
      siteUrl: 'https://www.assosaesm.fr/',
      bullets: [
        'Développement d\'une plateforme web moderne avec Next.js et Tailwind CSS',
        'Système d\'authentification et base de données avec Supabase',
        'Automatisation des notifications et confirmations d\'inscriptions via l\'API Brevo',
        'Intégration de cagnottes solidaires sécurisées avec l\'API Stripe',
        'Guide de l\'étudiant interactif et gestion d\'événements communautaires'
      ]
    },
    {
      title: 'QR PRO CREATOR',
      subtitle: 'FinTech, NFC Tech & Growth',
      tagline: 'DIGITAL BRAND / HARDWARE STARTUP',
      desc: 'Lancement d\'une startup physique et numérique en Afrique de l\'Ouest de cartes de visite NFC et profils professionnels en ligne. Gère la génération de profils, des paiements mobiles ainsi que la logistique d\'impression physique.',
      image: '/assets/qr_pro_screenshot.png',
      color: 'var(--accent-cyan)',
      siteUrl: 'https://qrprocreator.com',
      bullets: [
        'Production et supply chain de cartes professionnelles NFC',
        'Intégration de paiements mobiles d\'Afrique de l\'Ouest (Wave & Orange Money)',
        'Déploiement de stratégies de croissance commerciale et de contenu marketing',
        'Gestion agile d\'une équipe de 5 collaborateurs'
      ]
    },
    {
      title: 'MoodTrack',
      subtitle: 'UX Research, UI Design & Mobile Prototyping',
      tagline: 'USER ORIENTED DESIGN / HEALTH APP',
      desc: 'Conception ergonomique et recherche utilisateur pour une application mobile visant à améliorer la santé physique et mentale des étudiants. Comprend la conduite d\'entretiens qualitatifs semi-directifs, la modélisation de personas précis basés sur les données du terrain et le prototypage interactif.',
      images: [
        '/assets/moodtrack/photo_1.png',
        '/assets/moodtrack/photo_2.png',
        '/assets/moodtrack/photo_3.png',
        '/assets/moodtrack/photo_4.png',
        '/assets/moodtrack/photo_5.png'
      ],
      color: 'var(--accent-green)',
      bullets: [
        'Conduite d\'entretiens de santé et de tests utilisateurs semi-directifs',
        'Modélisation de 3 personas étudiants basés sur des données réelles du terrain',
        'Design d\'interface et prototypage mobile haute fidélité sur Figma',
        'Optimisation de l\'architecture de l\'information et du parcours utilisateur'
      ]
    }
  ];

  const accueilRef = useRef(null);
  const competencesRef = useRef(null);
  const projetsRef = useRef(null);
  const matriceRef = useRef(null);

  return (
    <div className="app-container">
      <div className="bg-glow-1" />
      <div className="bg-glow-2" />

      {/* Floating Top Navbar with premium blur and thin layout */}
      <header style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        right: '20px',
        height: '64px',
        background: 'rgba(3, 7, 18, 0.45)',
        backdropFilter: 'blur(20px)',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2.5rem'
      }} className="navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '900',
            color: '#ffffff',
            fontSize: '1rem',
            boxShadow: 'var(--shadow-glow)'
          }}>
            M
          </div>
          <div>
            <h2 style={{ fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.02em' }}>MMI PORTFOLIO</h2>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '600' }}>BUT 2 • BÉZIERS</span>
          </div>
        </div>

        <nav style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="nav-link" onClick={() => handleScroll('accueil')}>Accueil</button>
          <button className="nav-link" onClick={() => handleScroll('competences')}>Compétences</button>
          <button className="nav-link" onClick={() => handleScroll('projets')}>Projets</button>
          <button className="nav-link" onClick={() => handleScroll('matrice')}>Matrice</button>
        </nav>
      </header>

      {/* Main landing sections */}
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '140px 2rem 5rem 2rem' }}>
        
        {/* HERO SECTION */}
        <section ref={accueilRef} style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4rem', marginBottom: '6rem' }} className="animate-fade-in">
          <div className="dashboard-grid" style={{ alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-cyan)', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                <Sparkles size={14} /> SAÉ & Démarches Réflexives
              </div>
              <h1 style={{ fontSize: '4.25rem', fontWeight: '900', lineHeight: '1.05', letterSpacing: '-0.04em' }} className="gradient-text">
                Construire pour l'impact.
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
                Étudiant en BUT 2 Métiers du Multimédia et de l'Internet à l'IUT de Béziers. Ce portfolio met en lumière la progression de mes compétences de S3 à S4, à travers des cas concrets de développement et d'entrepreneuriat numérique.
              </p>
              
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <button onClick={() => handleScroll('projets')} className="glass-panel" style={{ padding: '0.85rem 2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  Découvrir mes projets <ArrowRight size={16} />
                </button>
                <button onClick={() => handleScroll('competences')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }} className="nav-link">
                  Voir mes acquis
                </button>
              </div>
            </div>

            {/* Radar chart component box */}
            <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.05em', color: 'var(--text-primary)', alignSelf: 'flex-start', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                PROFIL ACADÉMIQUE
              </h3>
              <RadarChartComponent activeComp={selectedComp} onSelect={(key) => {
                setSelectedComp(key);
                handleScroll('competences');
              }} />
            </div>
          </div>

          {/* Statistics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {[
              { val: '05', tag: 'MMI COMPÉTENCES', desc: 'Développement, Design, Com, Strategie, Gestion' },
              { val: '10', tag: 'LIVRABLES ACQUIS', desc: 'Preuves techniques et analyses réflexives' },
              { val: '03', tag: 'PROJETS PHARES', desc: 'Asso Web, FinTech & Santé étudiante (UX)' },
              { val: '01', tag: 'STARTUP LANCÉE', desc: 'QR Pro Creator en production active' }
            ].map((s, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '2.75rem', fontWeight: '900', color: '#ffffff', lineHeight: '1', fontFamily: 'var(--font-title)', background: 'linear-gradient(135deg, #ffffff, rgba(255,255,255,0.25))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.val}</span>
                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '0.08em' }}>{s.tag}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem', lineHeight: '1.4' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: COMPETENCES SECTION */}
        <section ref={competencesRef} style={{ padding: '6rem 0', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-blue)', letterSpacing: '0.15em' }}>ACQUIS ACADÉMIQUES</span>
            <h2 style={{ fontSize: '2.75rem', fontWeight: '900', letterSpacing: '-0.03em', marginTop: '0.5rem' }} className="gradient-text">Compétences BUT MMI</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', marginTop: '0.5rem' }}>
              Sélectionnez une compétence pour analyser les traces S3 & S4 et la progression associée.
            </p>
          </div>

          {/* Horizontal buttons to select competence - VERY STRUCTURED */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', flexWrap: 'wrap' }} className="card-grid">
            {Object.entries(competencesData).map(([key, comp]) => {
              const isSelected = selectedComp === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedComp(key)}
                  className="glass-panel"
                  style={{
                    padding: '1.25rem',
                    borderRadius: '16px',
                    border: '1px solid',
                    borderColor: isSelected ? comp.color : 'var(--border-color)',
                    background: isSelected ? `rgba(${comp.color === 'var(--accent-blue)' ? '59,130,246' : comp.color === 'var(--accent-pink)' ? '236,72,153' : comp.color === 'var(--accent-orange)' ? '245,158,11' : comp.color === 'var(--accent-green)' ? '16,185,129' : '6,182,212'}, 0.12)` : 'var(--bg-card)',
                    color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                >
                  <span style={{ color: isSelected ? '#ffffff' : comp.color }}>{comp.icon}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.05em' }}>{comp.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Competency Display Panel */}
          {selectedComp && competencesData[selectedComp] && (
            <div 
              className="glass-panel animate-fade-in" 
              style={{ 
                padding: '3rem', 
                borderRadius: '24px', 
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderTop: `4px solid ${competencesData[selectedComp].color}`
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>{competencesData[selectedComp].tagline}</span>
                  <h3 style={{ fontSize: '2rem', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em', marginTop: '0.25rem' }}>
                    {competencesData[selectedComp].title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '1.05rem' }}>
                    {competencesData[selectedComp].subtitle}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span className="badge" style={{ borderColor: 'rgba(255,255,255,0.06)' }}><Layers size={12} /> 2 Traces</span>
                  <span className="badge" style={{ borderColor: 'rgba(255,255,255,0.06)' }}><Calendar size={12} /> S3 & S4</span>
                </div>
              </div>

              {/* Traces Cards Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="dashboard-grid">
                {competencesData[selectedComp].traces.map((trace, idx) => (
                  <div 
                    key={idx} 
                    className="glass-panel"
                    style={{ 
                      padding: '2.25rem', 
                      background: 'rgba(255,255,255,0.015)', 
                      border: '1px solid rgba(255,255,255,0.04)', 
                      borderRadius: '18px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '260px',
                      transition: 'border-color 0.3s ease'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                        <span className="badge" style={{ background: 'rgba(255,255,255,0.03)' }}><Calendar size={11} /> {trace.semestre}</span>
                        <span className="badge badge-blue"><Target size={11} /> {trace.ac}</span>
                        <span className="badge badge-cyan">{trace.ce}</span>
                      </div>
                      <h4 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.75rem', color: '#ffffff' }}>
                        {trace.titre}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        {trace.summary}
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <button 
                        onClick={() => openTraceModal(trace, competencesData[selectedComp].color)}
                        className="glass-panel"
                        style={{
                          alignSelf: 'flex-start',
                          padding: '0.6rem 1.25rem',
                          borderRadius: '10px',
                          fontSize: '0.8rem',
                          fontWeight: '700',
                          color: competencesData[selectedComp].color,
                          borderColor: `rgba(${selectedComp === 'develpper' ? '59,130,246' : selectedComp === 'exprimer' ? '236,72,153' : selectedComp === 'concevoir' ? '245,158,11' : selectedComp === 'comprendre' ? '16,185,129' : '6,182,212'}, 0.25)`,
                          background: 'transparent',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <FileSearch size={14} /> Lire la réflexion
                      </button>
                      
                      {trace.pdfLink && (
                        <a 
                          href={trace.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-panel"
                          style={{
                            alignSelf: 'flex-start',
                            padding: '0.6rem 1.25rem',
                            borderRadius: '10px',
                            fontSize: '0.8rem',
                            fontWeight: '700',
                            color: '#ffffff',
                            borderColor: 'rgba(255,255,255,0.25)',
                            background: 'rgba(255,255,255,0.05)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            textDecoration: 'none',
                            transition: 'background 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        >
                          <FileText size={14} /> Voir la charte
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* SECTION 3: PROJETS PHARES */}
        <section ref={projetsRef} style={{ padding: '6rem 0', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-pink)', letterSpacing: '0.15em' }}>RÉALISATIONS PROFESSIONNELLES</span>
            <h2 style={{ fontSize: '2.75rem', fontWeight: '900', letterSpacing: '-0.03em', marginTop: '0.5rem' }} className="gradient-text">Études de cas & Livrables</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', marginTop: '0.5rem' }}>Découvrez mes projets les plus marquants créés dans des contextes réels ou académiques.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {projectsData.map((proj, idx) => (
              <ProjectCard key={idx} proj={proj} />
            ))}
          </div>
        </section>

        {/* SECTION 4: MATRICE D'ACQUISITION */}
        <section ref={matriceRef} style={{ padding: '6rem 0', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-orange)', letterSpacing: '0.15em' }}>SYNTHÈSE PÉDAGOGIQUE</span>
            <h2 style={{ fontSize: '2.75rem', fontWeight: '900', letterSpacing: '-0.03em', marginTop: '0.5rem' }} className="gradient-text">Matrice de validation académique</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', marginTop: '0.5rem' }}>Tableau récapitulatif permettant de lier chaque livrable d'apprentissage critique (AC) aux compétences et composantes d'évaluation (CE).</p>
          </div>

          <div className="glass-panel" style={{ overflowX: 'auto', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <table className="matrix-table">
              <thead>
                <tr>
                  <th>Code AC</th>
                  <th>Compétence</th>
                  <th>CE associée</th>
                  <th>Livrables & Preuves physiques</th>
                  <th>Niveau</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ac: 'AC11.06', comp: 'Comprendre', ce: 'CE1.02', proof: 'MoodTrack UX - Interviews et Protocoles de tests', level: 'BUT2 S3-S4', status: 'Validé' },
                  { ac: 'AC21.01', comp: 'Comprendre', ce: 'CE1.03', proof: 'Audits quantitatifs - KPI réseaux sociaux On Air', level: 'BUT2 S3', status: 'Validé' },
                  { ac: 'AC12.01', comp: 'Concevoir', ce: 'CE2.03', proof: 'Analyses concurrentielles strategiques de services', level: 'BUT2 S3', status: 'Validé' },
                  { ac: 'AC22.03', comp: 'Concevoir', ce: 'CE2.01', proof: 'Backlog Jira & Formulaire inclusive Béziers', level: 'BUT2 S4', status: 'Validé' },
                  { ac: 'AC13.02', comp: 'Exprimer', ce: 'CE3.01', proof: 'Charte visuelle & 3 Motion designs Liqaverse', level: 'BUT2 S4', status: 'Validé' },
                  { ac: 'AC23.04', comp: 'Exprimer', ce: 'CE3.02', proof: 'Storytelling court - Motion design 15s Aides', level: 'BUT2 S3', status: 'Validé' },
                  { ac: 'AC14.02', comp: 'Développer', ce: 'CE4.02', proof: 'Jeu Arcade Phaser 3 - Intégration physique', level: 'BUT2 S3', status: 'Validé' },
                  { ac: 'AC24.02', comp: 'Développer', ce: 'CE4.05', proof: 'Plateforme Web Next.js, Stripe, Supabase & Brevo AESM', level: 'BUT2 S4', status: 'Validé' },
                  { ac: 'AC15.01', comp: 'Entreprendre', ce: 'CE5.01', proof: 'Startup QR PRO - Business Plan & cartes NFC', level: 'BUT2 S3', status: 'Validé' },
                  { ac: 'AC25.01', comp: 'Entreprendre', ce: 'CE5.02', proof: 'Gestion agile Scrum & cycles de sprint Béziers', level: 'BUT2 S4', status: 'Validé' }
                ].map((row, i) => (
                  <tr key={i} style={{ 
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent',
                    transition: 'background 0.3s ease'
                  }}>
                    <td style={{ fontWeight: '700', color: '#ffffff' }}>
                      <span className="badge badge-blue">{row.ac}</span>
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>{row.comp}</td>
                    <td>
                      <span className="badge badge-cyan">{row.ce}</span>
                    </td>
                    <td style={{ color: '#ffffff', fontWeight: '600' }}>{row.proof}</td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{row.level}</td>
                    <td>
                      <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.08)', borderColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>

      {/* OVERLAY MODAL FOR REFLEXIVE TEXT - KEEPS LANDING CLEAN */}
      {activeTraceModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(3, 7, 18, 0.85)',
          backdropFilter: 'blur(16px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}
        onClick={() => setActiveTraceModal(null)}
        >
          <div 
            className="glass-panel animate-fade-in"
            style={{
              width: '100%',
              maxWidth: '900px',
              maxHeight: '92vh',
              overflowY: 'auto',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              background: '#040814',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ 
              padding: '2rem 2.5rem', 
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
            }}>
              <div>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.05)' }}><Calendar size={12} /> {activeTraceModal.semestre}</span>
                  <span className="badge badge-blue"><Target size={12} /> {activeTraceModal.ac}</span>
                  <span className="badge badge-cyan">{activeTraceModal.ce}</span>
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' }}>{activeTraceModal.titre}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>{activeTraceModal.contexte}</span>
              </div>
              <button 
                onClick={() => setActiveTraceModal(null)}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content - Multi Column */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '2.5rem', padding: '2.5rem' }} className="dashboard-grid">
              
              {/* Left Column - Full Reflection & Visual Gallery */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* Reflection text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '850', color: '#ffffff', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileText size={16} style={{ color: activeTraceModal.compColor }} /> DEMARCHE REFLEXIVE
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {activeTraceModal.contenu.split('\n\n').map((p, i) => (
                      <p key={i} style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '0.95rem', 
                        lineHeight: '1.75', 
                        textAlign: 'justify' 
                      }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Preuves Visuelles / Image Gallery */}
                {activeTraceModal.images && activeTraceModal.images.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '850', color: '#ffffff', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <ImageIcon size={16} style={{ color: activeTraceModal.compColor }} /> ILLUSTRATIONS & PREUVES
                    </h4>
                    
                    {/* Active preview */}
                    <div style={{
                      width: '100%',
                      height: '240px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img 
                        src={featuredModalImg || activeTraceModal.images[0]} 
                        alt="Preuve" 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>

                    {/* Thumbnail list */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '0.5rem' }}>
                      {activeTraceModal.images.map((img, idx) => {
                        const isFeatured = featuredModalImg === img;
                        return (
                          <div 
                            key={idx}
                            onClick={() => setFeaturedModalImg(img)}
                            style={{
                              aspectRatio: '1',
                              borderRadius: '8px',
                              overflow: 'hidden',
                              cursor: 'pointer',
                              border: '2px solid',
                              borderColor: isFeatured ? activeTraceModal.compColor : 'transparent',
                              opacity: isFeatured ? 1 : 0.6,
                              transition: 'all 0.2s ease',
                              background: 'rgba(0,0,0,0.5)'
                            }}
                          >
                            <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Rich Metadata Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* Academic Standards */}
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.01)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: '800', color: '#ffffff', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Info size={14} style={{ color: activeTraceModal.compColor }} /> Fiche Académique
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8rem' }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block', fontWeight: '600' }}>Apprentissage Critique (AC)</span>
                      <span style={{ color: '#ffffff', fontWeight: '500', lineHeight: '1.4', display: 'block', marginTop: '0.15rem' }}>{activeTraceModal.acLabel}</span>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '0.75rem' }}>
                      <span style={{ color: 'var(--text-muted)', display: 'block', fontWeight: '600' }}>Composante Essentielle (CE)</span>
                      <span style={{ color: '#ffffff', fontWeight: '500', lineHeight: '1.4', display: 'block', marginTop: '0.15rem' }}>{activeTraceModal.ceLabel}</span>
                    </div>
                  </div>
                </div>

                {/* Technologies Stack */}
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.01)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: '800', color: '#ffffff', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Wrench size={14} style={{ color: activeTraceModal.compColor }} /> Stack Technique
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {activeTraceModal.tech.map((t, idx) => (
                      <span key={idx} className="badge" style={{ background: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255, 255, 255, 0.08)', color: '#ffffff' }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Key Learnings */}
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.01)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: '800', color: '#ffffff', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Cpu size={14} style={{ color: activeTraceModal.compColor }} /> Enseignements Clés
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {activeTraceModal.learnings.map((l, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle size={12} style={{ color: activeTraceModal.compColor, marginTop: '0.15rem', flexShrink: 0 }} />
                        <span style={{ lineHeight: '1.45' }}>{l}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
