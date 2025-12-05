import SwitchDemo from "./Switch";

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font bg-slate-300">
            <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Jeanne BDH</span>
                </a>
                <SwitchDemo />
            </nav>
        </header>
    )
}

export default Navbar
