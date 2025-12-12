import imgJS from '../assets/skills/javascript.svg'
import imgSF from '../assets/skills/symfony.svg'
import imgReact from '../assets/skills/react.svg'
import imgSQL from '../assets/skills/mysql.svg'
import imgPHP from '../assets/skills/php.svg'
import imgMGDB from '../assets/skills/mongodb.svg'
import imgTW from '../assets/skills/tailwind.svg'

export const categories = [
    { id: 1, name: "FRONT-END" },
    { id: 2, name: "BACK-END" }
]

export const stack = [
    { id: 1, name: "JavaScript", image: imgJS, category: "FRONT-END" },
    { id: 2, name: "React", image: imgReact, category: "FRONT-END" },
    { id: 3, name: "Tailwind", image: imgTW, category: "FRONT-END" },
    { id: 4, name: "PHP", image: imgPHP, category: "BACK-END" },
    { id: 5, name: "Symfony", image: imgSF, category: "BACK-END" },
    { id: 6, name: "MySQL", image: imgSQL, category: "BACK-END" },
    { id: 7, name: "MongoDB", image: imgMGDB, category: "BACK-END" },
]
