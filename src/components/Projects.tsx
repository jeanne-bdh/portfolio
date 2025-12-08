import Title from "./Title"
import { Link2Icon } from '@radix-ui/react-icons';

import imgEcoRide from '../assets/projects/ecoride.png'
import imgZooArcadia from '../assets/projects/zoo-arcadia.png'
import imgOsezNoel from '../assets/projects/osez-noel.jpg'

const projects = [
    { id: 1, title: "EcoRide", description: "Covoiturages entre particuliers. Projet d'étude développé en PHP natif & JavaScript vanilla.", stacks: [{ id: 1, name: "JavaScript" }, { id: 2, name: "PHP" }, { id: 3, name: "MySQL" }, { id: 4, name: "MongoDB" }], image: imgEcoRide, gitHub: "https://github.com/jeanne-bdh/EcoRide.git", site: "https://bouchendhomme.alwaysdata.net/" },
    { id: 2, title: "Zoo Arcadia", description: "Site vitrine d'un parc zoologique, développé en Symfony lors d'un projet d'études.", stacks: [{ id: 1, name: "JavaScript" }, { id: 2, name: "Symfony" }, { id: 3, name: "MySQL" }, { id: 4, name: "MongoDB" }], image: imgZooArcadia, gitHub: "https://github.com/jeanne-bdh/ZooArcadia.git", site: "https://bouchendhomme.alwaysdata.net/" },
    { id: 3, title: "Osez Noël", description: "Calendrier de l'Avent numérique, développé en Symfony lors d'un projet d'études.", stacks: [{ id: 1, name: "JavaScript" }, { id: 2, name: "Symfony" }], image: imgOsezNoel, gitHub: "https://github.com/jeanne-bdh/OsezNoel.git", site: "https://bouchendhomme.alwaysdata.net/" }
]

const Projects = () => {
    return (
        <section>
            <Title title="Mes projets" />

            <div className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {projects.map(project => (
                            <div className="p-4 md:w-1/3" key={project.id}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="h-56 w-full object-cover object-top" src={project.image} alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{project.title}</h1>
                                        <p className="leading-relaxed mb-3">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.stacks.map(stack => (
                                                    <span key={stack.id} className="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">{stack.name}</span>
                                            ))}
                                        </div>

                                        <div className="flex items-center flex-wrap justify-between">
                                            <a href={project.gitHub} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 gap-1">
                                                <Link2Icon />
                                                GitHub
                                            </a>
                                            <a href={project.site} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 gap-1">
                                                <Link2Icon />
                                                Visiter le site
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
