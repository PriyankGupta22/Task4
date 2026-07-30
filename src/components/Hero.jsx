import { Search } from "lucide-react";
import hero from "../assets/hero.png";

const Hero = () => {
    return (
        <section className="bg-[#f5f5f5] min-h-screen w-full pt-24">
            <div className="w-full">
                <div className="relative h-[780px] overflow-hidden w-full">
                    <img
                        src={hero}
                        alt="Hero"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/35"></div>
                    <div className="absolute left-16 bottom-64 z-10">
                        <div className="flex gap-3 mb-6">
                            <span className="bg-white px-5 py-2 rounded-full text-sm font-medium">
                                House
                            </span>
                            <span className="bg-white px-5 py-2 rounded-full text-sm font-medium">
                                Apartment
                            </span>
                            <span className="bg-white px-5 py-2 rounded-full text-sm font-medium">
                                Modern
                            </span>
                        </div>
                        <h1 className="text-white text-6xl lg:text-7xl font-semibold leading-tight max-w-4xl">
                            Build Your Future, One 
                            <br />
                            Property at a Time.
                        </h1>
                    </div>
                    <div className="absolute right-16 bottom-74 w-122 text-white">
                        <p className="text-[20px] leading-7 text-gray-200">
                            Discover a premium collection of modern homes
                            designed for comfort, luxury and peaceful living.
                            Find the perfect place to create unforgettable
                            memories with your family.
                        </p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[calc(100%-2rem)] bg-white rounded-3xl shadow-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-6">
                            Find the best place
                        </h2>
                        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6">
                            <div>
                                <p className="text-gray-500 text-sm mb-2">
                                    Looking For
                                </p>
                                <select className="w-full border rounded-xl px-4 py-3 outline-none">
                                    <option>House</option>
                                    <option>Apartment</option>
                                    <option>Villa</option>
                                </select>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm mb-2">
                                    Price
                                </p>
                                <select className="w-full border rounded-xl px-4 py-3 outline-none">
                                    <option>$200k - $500k</option>
                                    <option>$500k - $800k</option>
                                </select>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm mb-2">
                                    Location
                                </p>
                                <select className="w-full border rounded-xl px-4 py-3 outline-none">
                                    <option>New York</option>
                                    <option>California</option>
                                </select>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm mb-2">
                                    Rooms
                                </p>
                                <select className="w-full border rounded-xl px-4 py-3 outline-none">
                                    <option>3 Bedrooms</option>
                                    <option>4 Bedrooms</option>
                                </select>
                            </div>
                            <div className="flex items-end">
                                <button className="w-full bg-black hover:bg-gray-900 text-white rounded-xl py-4 flex items-center justify-center gap-2 transition">
                                    <Search size={18}/>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;