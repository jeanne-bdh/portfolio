import Title from "./Title"
import { categories, stack } from '../datas/StacksList'

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
