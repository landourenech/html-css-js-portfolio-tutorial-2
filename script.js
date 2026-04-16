// Fonction pour le menu mobile
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// 1. DONNÉES DES COMPÉTENCES (Mises à jour)
const skills = {
    frontend: [  "JavaScript / TypeScript", 
        "ReactJS (Native/DOM)", 
        "Three.js / 3D", 
        "VueJS / NextJS"],
    backend: ["Node JS",
        "SQL / ORM (Relationnel)", 
        "Architecture API", 
        "DevOps & Déploiement",
        "Langage C",
        "Langage C++"],
    marketing: ["Canva", "Photoshop", "Création de contenu", "Stratégie Digitale"],
    tools: ["Airtable", "Bureautique", "Gestion de projet", "Curiosité / Apprentissage"]
};

// 2. DONNÉES DES PROJETS
const projects = [
  {
    title: "eMairie",
    desc: "Mairie en ligne pour faciliter les démarches administratives au Gabon.",
    img: "./assets/mairie.png",
    github: "https://github.com",
    demo: "https://emairie.vercel.app/"
  },
  {
    title: "EKOLI",
    desc: "Plateforme éducative moderne.",
    img: "./assets/ekoli.png",
    github: "https://github.com",
    demo: "https://ekoli.vercel.app/"
  },
  {
    title: "GPM",
    desc: "Gestion portuaire et logistique au Gabon.",
    img: "./assets/2.png",
    github: "https://github.com",
    demo: "https://gpm-jet.vercel.app/"
  },
  {
    title: "L'Agence matrimoniale",
    desc: "Univers exclusif de rencontres haut de gamme.",
    img: "./assets/3.png",
    github: "https://github.com",
    demo: "https://agence-matrimoniale.vercel.app/"
  },
  {
    title: "ADN INGINEERING",
    desc: "Bureau d'études spécialisé en géotechnique et infrastructures.",
    img: "./assets/1.png",
    github: "https://github.com",
    demo: "https://adn-ingineering.vercel.app/"
  }
];

// FONCTION POUR INJECTER TOUTES LES COMPÉTENCES
function displaySkills() {
  // On définit les IDs correspondants dans ton HTML
  const categories = {
    'skills-frontend': skills.frontend,
    'skills-backend': skills.backend,
    'skills-marketing': skills.marketing,
    'skills-tools': skills.tools
  };

  const createSkillHTML = (skill) => `
    <article>
      <img src="./assets/checkmark.png" alt="Check icon" class="icon" />
      <div><h3>${skill}</h3></div>
    </article>`;

  // On boucle sur chaque catégorie pour remplir le HTML
  Object.keys(categories).forEach(id => {
    const container = document.getElementById(id);
    if (container) {
      container.innerHTML = categories[id].map(createSkillHTML).join('');
    }
  });
}

// FONCTION POUR INJECTER LES PROJETS
function displayProjects() {
  const projectGrid = document.getElementById('projects-grid');
  if (!projectGrid) return;
  
  projectGrid.innerHTML = projects.map(p => `
    <div class="details-container color-container">
      <div class="article-container">
        <img src="${p.img}" alt="${p.title}" class="project-img" />
      </div>
      <h2 class="experience-sub-title project-title">${p.title}</h2>
      <p>${p.desc}</p>
      <div class="btn-container">
        <button class="btn btn-color-2 project-btn" onclick="location.href='${p.github}'">Github</button>
        <button class="btn btn-color-2 project-btn" onclick="location.href='${p.demo}'">Démo</button>
      </div>
    </div>
  `).join('');
}

// Lancer le rendu au chargement
document.addEventListener('DOMContentLoaded', () => {
  displaySkills();
  displayProjects();
});
