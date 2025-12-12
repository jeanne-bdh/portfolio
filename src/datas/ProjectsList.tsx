import imgEcoRide from '../assets/projects/ecoride.png'
import imgZooArcadia from '../assets/projects/zoo-arcadia.png'
import imgOsezNoel from '../assets/projects/osez-noel.jpg'

export const projects = [
    { id: 1, title: "EcoRide", description: "Covoiturages entre particuliers. Projet d'étude développé en PHP natif & JavaScript vanilla.", stacks: [{ id: 1, name: "JavaScript" }, { id: 2, name: "PHP" }, { id: 3, name: "MySQL" }, { id: 4, name: "MongoDB" }], image: imgEcoRide, gitHub: "https://github.com/jeanne-bdh/EcoRide.git", site: "https://bouchendhomme.alwaysdata.net/" },
    { id: 2, title: "Zoo Arcadia", description: "Site vitrine d'un parc zoologique, développé en Symfony lors d'un projet d'études.", stacks: [{ id: 1, name: "JavaScript" }, { id: 2, name: "Symfony" }, { id: 3, name: "MySQL" }, { id: 4, name: "MongoDB" }], image: imgZooArcadia, gitHub: "https://github.com/jeanne-bdh/ZooArcadia.git", site: "https://bouchendhomme.alwaysdata.net/" },
    { id: 3, title: "Osez Noël", description: "Calendrier de l'Avent numérique, développé en Symfony lors d'un projet d'études.", stacks: [{ id: 1, name: "JavaScript" }, { id: 2, name: "Symfony" }], image: imgOsezNoel, gitHub: "https://github.com/jeanne-bdh/OsezNoel.git", site: "https://bouchendhomme.alwaysdata.net/" }
]