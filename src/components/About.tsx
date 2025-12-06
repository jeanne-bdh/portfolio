import Title from "./Title"

const About = () => {
    return (
        <section>
            <Title title="À propos / Soft Skills" />

            <div className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Organisation & Gestion de projet</h2>
                                <p className="leading-relaxed text-base">Expérience dans la conduite de projets. Compétence réutilisée pour structurer le travail, respecter les délais et coordonner les échanges.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Communication & Pédagogie</h2>
                                <p className="leading-relaxed text-base">Habituée à animer des réunions et à collaborer avec des équipes non expertes dans mon domaine.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Autonomie & Curiosité</h2>
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
