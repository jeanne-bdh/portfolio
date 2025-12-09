import Title from "./Title"
import { ChatBubbleIcon, MagnifyingGlassIcon, Share1Icon } from '@radix-ui/react-icons';

const About = () => {
    return (
        <section>
            <Title title="Soft Skills" />

            <div className="text-brown12 body-font">
                <div className="container px-5 pb-24 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-brown5 text-brown12 mb-4 flex-shrink-0">
                                <Share1Icon className="w-6 h-6" />
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-brown12 text-lg title-font font-medium mb-2">Organisation & Gestion de projet</h2>
                                <p className="leading-relaxed text-base">Expérience dans la conduite de projets. Compétence réutilisée pour structurer le travail, respecter les délais et coordonner les échanges.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-brown5 text-brown12 mb-4 flex-shrink-0">
                                <ChatBubbleIcon className="w-6 h-6" />
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-brown12 text-lg title-font font-medium mb-2">Communication & Pédagogie</h2>
                                <p className="leading-relaxed text-base">Habituée à animer des réunions et à collaborer avec des équipes non expertes dans mon domaine.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-brown5 text-brown12 mb-4 flex-shrink-0">
                                <MagnifyingGlassIcon className="w-6 h-6" />
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-brown12 text-lg title-font font-medium mb-2">Autonomie & Curiosité</h2>
                                <p className="leading-relaxed text-base">Formation de développeur sans encadrement, avec veille technologique, recherches personnelles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About
