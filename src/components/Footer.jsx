import { NavLink } from "react-router-dom";
import hero from "../assets/hero.png";

const Footer = () => {
    return (
        <footer className="mt-24">

            <section className="w-full px-6">

                <div className="relative h-[420px] rounded-[35px] overflow-hidden">

                    <img
                        src={hero}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45"></div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">

                        <h2 className="text-5xl font-semibold leading-tight">
                            Ready to Make Your Dream
                            <br />
                            Property a Reality?
                        </h2>

                        <p className="mt-5 max-w-xl text-gray-200 leading-7">
                            Explore a carefully selected collection of premium
                            homes crafted for modern lifestyles.
                        </p>

                        <button className="mt-10 bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition">
                            Get Started
                        </button>

                    </div>

                </div>

            </section>

            {/* Footer */}

            <section className="w-full px-6 py-20">

                <div className="flex flex-col lg:flex-row justify-between gap-10">

                    <div>

                        <h2 className="text-5xl font-semibold leading-tight">
                            Discover Nature's Wonders
                            <br />
                            with Expert Guidance
                        </h2>

                    </div>

                    <div className="text-right">

                        <p className="text-gray-500 leading-7">
                            1234, Garden Street,
                            <br />
                            Banglore, India
                        </p>

                        <h3 className="mt-5 text-xl font-semibold">
                            +91 98765 43210
                        </h3>

                    </div>

                </div>

                <div className="border-t mt-16 pt-10 flex flex-col lg:flex-row justify-between items-center">

                    <ul className="flex gap-8 text-gray-500">

                        <li className="cursor-pointer hover:text-black">
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li className="cursor-pointer hover:text-black">
                            <NavLink to="/about">About</NavLink>
                        </li>

                        <li className="cursor-pointer hover:text-black">
                            <NavLink to="/properties">Properties</NavLink>
                        </li>

                        <li className="cursor-pointer hover:text-black">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>

                    </ul>

                    <h2 className="text-3xl font-bold mt-8 lg:mt-0">
                        Ever<span className="text-lime-500">Green</span>
                    </h2>

                    <ul className="flex gap-8 text-gray-500 mt-8 lg:mt-0">

                        <li className="cursor-pointer hover:text-black">
                            <NavLink to="/properties">Gallery</NavLink>
                        </li>

                        <li className="cursor-pointer hover:text-black">
                            <NavLink to="/about">FAQ</NavLink>
                        </li>

                        <li className="cursor-pointer hover:text-black">
                            <NavLink to="/properties">Pricing</NavLink>
                        </li>

                        <li className="cursor-pointer hover:text-black">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>

                    </ul>

                </div>

                <div className="border-t mt-10 pt-8 flex justify-between text-gray-400 text-sm">

                    <p>
                        © 2025 EverGreen. All Rights Reserved.
                    </p>

                    <div className="flex gap-6">

                        <p className="cursor-pointer">
                            Terms & Conditions
                        </p>

                        <p className="cursor-pointer">
                            Privacy Policy
                        </p>

                    </div>

                </div>

            </section>

        </footer>
    );
};

export default Footer;