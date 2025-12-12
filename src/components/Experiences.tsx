import Title from "./Title"
import { DotFilledIcon } from '@radix-ui/react-icons';

const Experiences = () => {
    return (
        <section>
            <Title title="Parcours professionnel & Formations" />

            <div className="text-brown12 body-font">
                <div className="container px-5 py-8 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap w-full">
                        <div className="mx-auto lg:w-2/5 md:w-1/2 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-brown5 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brown11 inline-flex items-center justify-center text-brown5 relative z-10">
                                    <DotFilledIcon className="w-6 h-6" />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h3 className="font-medium title-font text-sm text-brown11 mb-1 tracking-wider">Octobre 2025</h3>
                                    <h2 className="leading-relaxed font-semibold text-brown12">DIPLÔME DEVELOPPEUR WEB ET WEB MOBILE</h2>
                                    <p className="text-brown12">Titre professionnel RNCP37674</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-brown5 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brown11 inline-flex items-center justify-center text-brown5 relative z-10">
                                    <DotFilledIcon className="w-6 h-6" />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h3 className="font-medium title-font text-sm text-brown11 mb-1 tracking-wider">2024</h3>
                                    <h2 className="leading-relaxed font-semibold text-brown12">FORMATION STUDI</h2>
                                    <p className="text-brown12">Graduate Développeur Web Flutter (Bac+2) <br /> Projets d'études : EcoRide, Zoo Arcadia, Osez Nöel, etc.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-brown5 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brown11 inline-flex items-center justify-center text-brown5 relative z-10">
                                    <DotFilledIcon className="w-6 h-6" />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h3 className="font-medium title-font text-sm text-brown11 mb-1 tracking-wider">2012 - 2024</h3>
                                    <h2 className="leading-relaxed font-semibold text-brown12">CONTRÔLEUSE DE GESTION</h2>
                                    <p className="text-brown12">Différents types d'entreprises, tailles, secteurs, etc.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-brown5 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brown11 inline-flex items-center justify-center text-brown5 relative z-10">
                                    <DotFilledIcon className="w-6 h-6" />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h3 className="font-medium title-font text-sm text-brown11 mb-1 tracking-wider">2016</h3>
                                    <h2 className="leading-relaxed font-semibold text-brown12">DIPLÔME DE COMPTABILITE ET DE GESTION (DCG)</h2>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brown11 inline-flex items-center justify-center text-brown5 relative z-10">
                                    <DotFilledIcon className="w-6 h-6" />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h3 className="font-medium title-font text-sm text-brown11 mb-1 tracking-wider">2010</h3>
                                    <h2 className="leading-relaxed font-semibold text-brown12">BAC SCIENTIFIQUE</h2>
                                    <p className="text-brown12">Spécialité Mathématiques</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences
