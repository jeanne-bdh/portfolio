import Title from "./Title"
import imgJS from '../assets/skills/javascript.svg'
import imgSF from '../assets/skills/symfony.svg'
import imgReact from '../assets/skills/react.svg'
import imgSQL from '../assets/skills/mysql-plain.svg'
import imgPHP from '../assets/skills/php.svg'
import imgMGDB from '../assets/skills/mongodb.svg'
import imgTW from '../assets/skills/tailwind.svg'

const stack = [
    { id: 1, name: "JavaScript", image: imgJS, category: "front" },
    { id: 2, name: "React", image: imgReact, category: "front" },
    { id: 3, name: "Tailwind", image: imgTW, category: "front" },
    { id: 4, name: "PHP", image: imgPHP, category: "back" },
    { id: 5, name: "Symfony", image: imgSF, category: "back" },
    { id: 6, name: "MySQL", image: imgSQL, category: "back" },
    { id: 7, name: "MongoDB", image: imgMGDB, category: "back" },
]

const Skills = () => {
    return (
        <section>
            <Title title="Compétences" />

            <div className="flex flex-col justify-around items-center lg:flex-row lg:items-start mx-16 mb-16 gap-6">

                <div className="flex flex-col items-center">
                    <h2 className="my-4 text-brown12">FRONT-END</h2>
                    <div className="flex flex-wrap justify-center items-center mt-4 gap-4">
                        {stack
                            .filter(skill => skill.category === "front")
                            .map(skill => (
                                <div className="flex flex-col justify-center items-center" key={skill.id}>
                                    <div className="w-24 h-24 p-2 rounded-full border-2 border-brown12">
                                        <img className="object-cover rounded-full h-full w-full" src={skill.image} alt={skill.name} />
                                    </div>
                                    <span className="mt-2 text-sm text-brown11">{skill.name}</span>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="my-4 text-brown12">BACK-END</h2>
                    <div className="flex flex-wrap justify-center items-center mt-4 gap-4">
                        {stack
                            .filter(skill => skill.category === "back")
                            .map(skill => (
                                <div className="flex flex-col justify-center items-center" key={skill.id}>
                                    <div className="w-24 h-24 p-2 rounded-full border-2 border-black">
                                        <img className="object-cover rounded-full h-full w-full" src={skill.image} alt={skill.name} />
                                    </div>
                                    <span className="mt-2 text-sm text-brown11">{skill.name}</span>
                                </div>
                            ))}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Skills
