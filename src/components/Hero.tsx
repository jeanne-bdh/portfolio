import { GitHubLogoIcon, EnvelopeOpenIcon, PinBottomIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import photo from '../assets/photo-cv.png';
import cv from '../assets/cv-2025.pdf';

const Hero = () => {
    return (
        <section className="text-brown12 body-font">
            <div className="container mx-auto flex px-5 lg:px-16 md:pt-24 py-8 md:flex-row flex-col items-center justify-center md:gap-10">
                <div className="flex justify-center w-2/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded-full md:w-48 md:h-48 shadow-lg" alt="profil" src={photo} />
                </div>
                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                    
                    <div className="relative w-fit">
                        <h1 className="text-4xl font-bold text-brown11 z-10 relative">
                            Développeuse Web
                        </h1>
                        {/*<div className="absolute right-[-25px] h-2 w-60 bg-brown6"></div>*/}
                    </div>

                    <h1 className='title-font text-2xl mt-8 mb-2 font-medium text-brown12'>Jeanne Bouchend'Homme</h1>
                    <p className="mb-8 leading-relaxed text-brown12">
                        Aimant la technique et l’apprentissage continu, j’ai conçu des applications web avec créativité et méthode.
                        <br />Mon objectif : rejoindre une équipe pour développer des solutions web utiles et continuer à progresser techniquement.
                    </p>
                    <div className='flex items-center gap-2 mb-6'>
                        <svg className='w-6 fill-brown12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M352 348.4C416.1 333.9 464 276.5 464 208C464 128.5 399.5 64 320 64C240.5 64 176 128.5 176 208C176 276.5 223.9 333.9 288 348.4L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 348.4zM328 160C297.1 160 272 185.1 272 216C272 229.3 261.3 240 248 240C234.7 240 224 229.3 224 216C224 158.6 270.6 112 328 112C341.3 112 352 122.7 352 136C352 149.3 341.3 160 328 160z" />
                        </svg>
                        <p className='text-brown12'>Île-De-France</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href='https://github.com/jeanne-bdh' className="inline-flex items-center text-brown2 bg-brown11 border-0 gap-2 py-2 px-6 focus:outline-none hover:bg-brown10 rounded text-lg">
                            <GitHubLogoIcon />
                            GitHub
                        </a>
                        <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' className="inline-flex items-center text-brown2 bg-brown11 border-0 gap-2 py-2 px-6 focus:outline-none hover:bg-brown10 rounded text-lg">
                            <LinkedInLogoIcon />
                            LinkedIn
                        </a>
                        <a href='mailto:jbouchend@gmail.com' className="inline-flex items-center text-brown2 bg-brown11 border-0 gap-2 py-2 px-6 focus:outline-none hover:bg-brown10 rounded text-lg">
                            <EnvelopeOpenIcon />
                            Email
                        </a>
                        <a href={cv} download="CV-Jeanne-Bouchendhome.pdf" target='_blank' className="inline-flex items-center text-brown2 bg-brown11 border-0 gap-2 py-2 px-6 focus:outline-none hover:bg-brown10 rounded text-lg">
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
