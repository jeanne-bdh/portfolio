import Title from "./Title"
import imgJS from '../assets/skills/javascript.svg'
import imgSF from '../assets/skills/symfony.svg'
import imgReact from '../assets/skills/react.svg'
import imgSQL from '../assets/skills/mysql.svg'
import imgPHP from '../assets/skills/php.svg'
import imgMGDB from '../assets/skills/mongodb.svg'
import imgTW from '../assets/skills/tailwind.svg'

const categories = [
    { id: 1, name: "FRONT-END" },
    { id: 2, name: "BACK-END" }
]

const stack = [
    { id: 1, name: "JavaScript", image: imgJS, category: "FRONT-END" },
    { id: 2, name: "React", image: imgReact, category: "FRONT-END" },
    { id: 3, name: "Tailwind", image: imgTW, category: "FRONT-END" },
    { id: 4, name: "PHP", image: imgPHP, category: "BACK-END" },
    { id: 5, name: "Symfony", image: imgSF, category: "BACK-END" },
    { id: 6, name: "MySQL", image: imgSQL, category: "BACK-END" },
    { id: 7, name: "MongoDB", image: imgMGDB, category: "BACK-END" },
]

const Skills = () => {
    return (
        <section>
            <Title title="Compétences" />

            <div className="flex flex-col justify-around items-center lg:flex-row lg:items-start mx-5 py-8 gap-16">

                {categories.map(cat => (
                    <div className="flex flex-col items-center" key={cat.id}>
                        <h2 className="mb-4 text-brown12 text-xl font-bold">{cat.name}</h2>
                        <div className="flex flex-wrap justify-center items-center mt-4 gap-4">
                            {stack
                                .filter(skill => skill.category === cat.name)
                                .map(skill => (
                                    <div className="flex flex-col justify-center items-center" key={skill.id}>
                                        <div className="w-24 h-24 p-2 rounded-full border border-brown8 shadow-sm bg-brown3">
                                            <img className="object-contain rounded-full h-full w-full" src={skill.image} alt={skill.name} />
                                        </div>
                                        <span className="mt-2 text-sm text-brown12">{skill.name}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}

            </div>

        </section>
    )
}

export default Skills
