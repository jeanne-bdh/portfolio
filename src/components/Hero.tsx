import { GitHubLogoIcon, EnvelopeOpenIcon, PinBottomIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-xs lg:w-full md:w-1/2 md:max-w-xs w-2/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded-full" alt="hero" src="./src/assets/photo-cv.png" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Jeanne Bouchend'Homme
                        <br />Développeuse Web 🚀
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Aimant la technique et l’apprentissage continu, j’ai conçu des applications web avec créativité et méthode.
                        <br />Mon objectif : rejoindre une équipe pour développer des solutions web utiles et continuer à progresser techniquement.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a className="inline-flex items-center text-white bg-indigo-500 border-0 gap-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            <GitHubLogoIcon />
                            GitHub
                        </a>
                        <a className="inline-flex items-center text-gray-700 bg-gray-100 border-0 gap-2 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            <LinkedInLogoIcon />
                            LinkedIn
                        </a>
                        <a className="inline-flex items-center text-white bg-indigo-500 border-0 gap-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            <EnvelopeOpenIcon />
                            Email
                        </a>
                        <a className="inline-flex items-center text-gray-700 bg-gray-100 border-0 gap-2 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            <PinBottomIcon />
                            CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
