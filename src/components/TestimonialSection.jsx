import { ChevronLeft, ChevronRight } from "lucide-react";
import hero from "../assets/hero.png";

const TestimonialSection = () => {
    return (
        <section className="w-full px-6 py-24">

            <div className="flex items-center justify-between mb-14">

                <h2 className="text-5xl font-semibold leading-tight">
                    What our clients say
                    <br />
                    about us
                </h2>

                <div className="flex items-center gap-4">

                    <div className="flex -space-x-3">

                        <img src={hero} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                        <img src={hero} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                        <img src={hero} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                        <img src={hero} className="w-12 h-12 rounded-full border-2 border-white object-cover" />

                    </div>

                    <div>

                        <h4 className="font-semibold">
                            More than 500+
                        </h4>

                        <p className="text-gray-500 text-sm">
                            Client Reviews
                        </p>

                    </div>

                </div>

            </div>

            <div className="relative">

                <button className="absolute -left-7 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border bg-white shadow flex items-center justify-center hover:bg-gray-100 transition">

                    <ChevronLeft size={20}/>

                </button>

                <button className="absolute -right-7 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border bg-white shadow flex items-center justify-center hover:bg-gray-100 transition">

                    <ChevronRight size={20}/>

                </button>

                <div className="bg-[#fafafa] rounded-[35px] p-8 lg:p-10 grid lg:grid-cols-2 gap-10 items-center">

                    <img
                        src={hero}
                        alt=""
                        className="w-full h-[420px] rounded-3xl object-cover"
                    />

                    <div>

                        <span className="text-6xl text-lime-500 font-bold">
                            “
                        </span>

                        <p className="text-3xl leading-relaxed font-medium text-gray-800 mt-3">
                            Working with this team was a pleasure.
                            They understood our vision and helped
                            us find a property that exceeded our
                            expectations. We couldn't have done it
                            without them!
                        </p>

                        <div className="mt-10">

                            <h4 className="text-xl font-semibold">
                                Sajibur Rahman
                            </h4>

                            <p className="text-gray-500 mt-2">
                                UI/UX Designer
                            </p>

                        </div>

                    </div>

                </div>

                <div className="flex justify-center gap-2 mt-8">

                    <span className="w-8 h-2 rounded-full bg-lime-500"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>

                </div>

            </div>

        </section>
    );
};

export default TestimonialSection;