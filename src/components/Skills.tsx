import Title from "./Title"
import imgJS from '../assets/skills/js.png'
import imgSF from '../assets/skills/symfony.png'
import imgReact from '../assets/skills/react.png'
import imgSQL from '../assets/skills/mysql.png'
import imgPHP from '../assets/skills/php.png'
import imgMGDB from '../assets/skills/mongodb.png'
import imgTW from '../assets/skills/tailwind.png'

const stack = [
    { id: 1, name: "JavaScript", image: imgJS, category: "front" },
    { id: 2, name: "React", image: imgReact, category: "front" },
    { id: 3, name: "MySQL", image: imgSQL, category: "back" },
    { id: 4, name: "Tailwind", image: imgTW, category: "front" },
    { id: 5, name: "PHP", image: imgPHP, category: "back" },
    { id: 6, name: "Symfony", image: imgSF, category: "back" },
    { id: 7, name: "MongoDB", image: imgMGDB, category: "back" },
]

const Skills = () => {
    return (
        <section>
            <Title title="Compétences" />

            <div className="flex flex-col justify-around items-center lg:flex-row lg:items-start mx-2 mb-16 gap-6">

                <div className="flex flex-col items-center">
                    <h2 className="my-4">FRONT-END</h2>
                    <div className="flex flex-wrap justify-center items-center mt-4 gap-4">
                        {stack
                        .filter(skill => skill.category === "front")
                        .map(skill => (
                            <div className="flex flex-col justify-center items-center" key={skill.id}>
                                <div className="w-24 h-24 p-2 rounded-full border-2 border-black">
                                    <img className="object-cover rounded-full h-full w-full" src={skill.image} alt={skill.name} />
                                </div>
                                <span className="mt-2 text-sm">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="my-4">BACK-END</h2>
                    <div className="flex flex-wrap justify-center items-center mt-4 gap-4">
                        {stack
                        .filter(skill => skill.category === "back")
                        .map(skill => (
                            <div className="flex flex-col justify-center items-center" key={skill.id}>
                                <div className="w-24 h-24 p-2 rounded-full border-2 border-black">
                                    <img className="object-cover rounded-full h-full w-full" src={skill.image} alt={skill.name} />
                                </div>
                                <span className="mt-2 text-sm">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>

        </section>
    )
}

export default Skills
