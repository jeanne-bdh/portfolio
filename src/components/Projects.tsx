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

            <div className="text-brown12 body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {projects.map(project => (
                            <div className="p-4 md:w-1/3" key={project.id}>
                                <div className="h-full bg-brown3 rounded-lg overflow-hidden shadow-md border border-brown6/20">
                                    <div className="p-5">
                                        <img className="h-56 w-full rounded-lg object-cover object-top shadow-lg border border-brown6/20" src={project.image} alt="blog" />
                                    </div>
                                    <div className="p-5">
                                        <h1 className="title-font text-xl font-semibold text-brown12 mb-3">{project.title}</h1>
                                        <p className="leading-relaxed text-brown11 mb-4">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.stacks.map(stack => (
                                                <span key={stack.id} className="inline-flex items-center rounded-full bg-brown11/80 px-3 py-1 text-xs font-medium text-brown2 shadow-sm">{stack.name}</span>
                                            ))}
                                        </div>

                                        <div className="flex items-center flex-wrap justify-between">
                                            <a href={project.gitHub} className="text-brown11 hover:underline inline-flex items-center md:mb-2 lg:mb-0 gap-1">
                                                <Link2Icon />
                                                GitHub
                                            </a>
                                            <a href={project.site} className="text-brown11 hover:underline inline-flex items-center md:mb-2 lg:mb-0 gap-1">
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
