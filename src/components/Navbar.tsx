const Navbar = () => {
    return (
        <header className="body-font bg-brown2 sticky top-0 z-50">
            <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <a href="/" className="flex title-font font-medium items-center text-brown12 mb-4 md:mb-0">
                <img src="/assets/logo-port" alt="" />
                    <span className="ml-3 text-xl text-brown11 font-semibold tracking-widest">JBH</span>
                </a>
                {/*<SwitchDemo />*/}
            </nav>
        </header>
    )
}

export default Navbar
