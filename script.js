function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }// Fonction pour le menu mobile (déjà existante)
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// 1. DONNÉES DES COMPÉTENCES
const skills = {
  frontend: ["JavaScript / TypeScript", "ReactJS (Native/DOM)", "Three.js / 3D", "VueJS / NextJS"],
  backend: ["Node.js", "SQL / ORM (Relationnel)", "Architecture API", "DevOps & Déploiement"]
};

// 2. DONNÉES DES PROJETS
const projects = [
  {
    title: "Weather App",
    desc: "Application météo (React/API)",
    img: "./assets/meteo.png",
    github: "https://github.com",
    demo: "https://netlify.app"
  },
    {
    title: "eMairie",
    desc: "la mairie en ligne pour faciliter les démarches administratives des citoyens gabonais ",
    img: "./assets/mairie.png", // Assure-toi d'avoir l'image
    github: "https://github.com",
    demo: "https://emairie.vercel.app/"
  },
   {
    title: "EKOLI",
    desc: "Platerfome educative",
    img: "./assets/ekoli.png", // Assure-toi d'avoir l'image
    github: "https://github.com",
    demo: "https://ekoli.vercel.app/"
  },
  {
    title: "OloStore",
    desc: "E-commerce (Next.js/Stripe)",
    img: "./assets/olo.png",
    github: "https://github.com",
    demo: "https://vercel.app"
  },
  {
    title: "GPM",
    desc: "Gabon Port Management (GPM) est un acteur clé dans la gestion portuaire et logistique au Gabon.",
    img: "./assets/2.png", // Assure-toi d'avoir l'image
    github: "https://github.com",
    demo: "https://gpm-jet.vercel.app/"
  },
  {
    title: "Clinique Espoir",
    desc: "Site vitrine pour une clinique au Gabon (VueJS)",
    img: "./assets/espoir.png",
    github: "https://github.com",
    demo: "https://clinique-espoir.vercel.app/"
  },{
    title: "Dashboard Admin",
    desc: "Gestion de données (VueJS)",
    img: "./assets/project-4.png",
    github: "https://github.com",
    demo: "#"
  }
    ,
    {
    title: "L'Agence matrimoniale",
    desc: "ntrez dans un univers où chaque rencontre est une œuvre d'art, protégée par le sceau de l'exclusivité.",
    img: "./assets/3.png",
    github: "https://github.com",
    demo: "https://agence-matrimoniale.vercel.app/"
  },
    {
    title: "ADN INGINEERING",
    desc: "Bureau d'études spécialisé en géotechnique, topographie et infrastructures au Gabon",
    img: "./assets/1.png",
    github: "https://github.com",
    demo: "https://adn-ingineering.vercel.app/"
  }

  
  // Tu peux ajouter autant de projets que tu veux ici !
];

// FONCTION POUR INJECTER LES COMPÉTENCES
function displaySkills() {
  const frontContainer = document.getElementById('skills-frontend');
  const backContainer = document.getElementById('skills-backend');

  const createSkillHTML = (skill) => `
    <article>
      <img src="./assets/checkmark.png" alt="Check icon" class="icon" />
      <div><h3>${skill}</h3></div>
    </article>`;

  frontContainer.innerHTML = skills.frontend.map(createSkillHTML).join('');
  backContainer.innerHTML = skills.backend.map(createSkillHTML).join('');
}

// FONCTION POUR INJECTER LES PROJETS
function displayProjects() {
  const projectGrid = document.getElementById('projects-grid');
  
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
