import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="w-full px-6 lg:px-10 h-24 flex items-center justify-between text-white">

                <NavLink to="/" className="text-3xl font-bold cursor-pointer">
                    Ever<span className="text-lime-400">Green</span>
                </NavLink>

                <ul className="hidden md:flex items-center gap-10 font-medium">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-lime-400" : "hover:text-lime-400 transition duration-300"}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-lime-400" : "hover:text-lime-400 transition duration-300"}>
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/properties" className={({ isActive }) => isActive ? "text-lime-400" : "hover:text-lime-400 transition duration-300"}>
                            Property
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-lime-400" : "hover:text-lime-400 transition duration-300"}>
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <button className="hidden md:block bg-lime-500 hover:bg-lime-600 text-white px-7 py-3 rounded-full transition duration-300">
                    Sign In
                </button>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </nav>

            {isMenuOpen && (
                <div className="md:hidden w-full border-t border-white/10 bg-black/80 backdrop-blur-md px-6 py-4 text-white">
                    <div className="flex flex-col gap-4">
                        <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-lime-400 transition duration-300">
                            Home
                        </NavLink>
                        <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-lime-400 transition duration-300">
                            About
                        </NavLink>
                        <NavLink to="/properties" onClick={() => setIsMenuOpen(false)} className="hover:text-lime-400 transition duration-300">
                            Property
                        </NavLink>
                        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-lime-400 transition duration-300">
                            Contact
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;