import { Menu } from "lucide-react";

const Navbar = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <nav className="h-24 flex items-center justify-between">

                    {/* Logo */}
                    <div className="text-3xl font-bold text-white cursor-pointer">
                        Ever<span className="text-lime-400">Green</span>
                    </div>

                    {/* Nav Links */}
                    <ul className="hidden md:flex items-center gap-10 text-white font-medium">
                        <li>
                            <a href="#" className="hover:text-lime-400 transition duration-300">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-lime-400 transition duration-300">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-lime-400 transition duration-300">
                                Property
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-lime-400 transition duration-300">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <button className="hidden md:block bg-lime-500 hover:bg-lime-600 text-white px-7 py-3 rounded-full transition duration-300">
                        Sign In
                    </button>

                    <button className="md:hidden text-white">
                        <Menu size={28} />
                    </button>

                </nav>
            </div>
        </header>
    );
};

export default Navbar;