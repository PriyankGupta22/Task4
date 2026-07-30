// import house1 from "../assets/house1.jpg";
// import house2 from "../assets/house2.jpg";
import house from "../assets/hero.png"
import { Bath, BedDouble, Heart } from "lucide-react";

const stats = [
    {
        number: "100%",
        title: "Satisfied Clients",
    },
    {
        number: "500+",
        title: "Property Sells",
    },
    {
        number: "150+",
        title: "Countries & Cities",
    },
    {
        number: "2,00+",
        title: "Positive Reviews",
    },
];

const Stats = () => {
    return (
        <section className="w-full px-6 py-16">

            <div className="grid grid-cols-2 lg:grid-cols-4">

                {stats.map((item, index) => (
                    <div
                        key={index}
                        className={`text-center ${
                            index !== stats.length - 1
                                ? "lg:border-r border-gray-300"
                                : ""
                        }`}
                    >

                        <h2 className="text-5xl font-bold text-gray-900">
                            {item.number}
                        </h2>

                        <p className="mt-3 text-gray-500">
                            {item.title}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    );
};

const FeaturedSection = () => {
    return (
        <section className="w-full py-24 px-6">

            <div className="flex items-start justify-between mb-14">

                <h2 className="text-5xl font-semibold leading-tight max-w-lg">
                    Your primary home might
                    <br />
                    begin to feel left out.
                </h2>

                <div className="flex items-center gap-4">

                    <img
                    src={house}
                        className="w-20 h-20 rounded-full object-cover"
                    />

                    <p className="text-gray-500 max-w-xs leading-7">
                        Each listing offers unique features,
                        exceptional quality and premium
                        locations.
                    </p>

                </div>

            </div>

            <div className="grid lg:grid-cols-12 gap-6">


                <div className="lg:col-span-6 relative rounded-3xl overflow-hidden">

                    <img
                        src = {house}
                        className="w-full h-full object-cover hover:scale-110 duration-500"
                    />

                    <div className="absolute bottom-5 left-5 bg-white rounded-full px-5 py-3 flex gap-5">

                        <div className="flex items-center gap-2">
                            <BedDouble size={18}/>
                            <span>4</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Bath size={18}/>
                            <span>3</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Heart size={18}/>
                            <span>98%</span>
                        </div>

                    </div>

                </div>


                <div className="lg:col-span-3 bg-[#f6f6f6] rounded-3xl p-10 flex flex-col justify-between">

                    <div>

                        <h3 className="text-3xl font-semibold leading-tight">
                            Big things can
                            happen in
                            small spaces.
                        </h3>

                        <p className="text-gray-500 leading-7 mt-6">
                            With thoughtful design and
                            smart organization, every
                            inch becomes more beautiful
                            and practical.
                        </p>

                    </div>

                    <button className="mt-10 w-fit bg-white px-7 py-3 rounded-full shadow">
                        Details
                    </button>

                </div>

                <div className="lg:col-span-3">

                    <div className="rounded-3xl overflow-hidden">

                        <img
                            src={house}
                            className="w-full h-64 object-cover"
                        />

                    </div>

                    <div className="mt-5">

                        <h4 className="text-xl font-semibold">
                            Pricing Starts at
                            $525K
                        </h4>

                        <button className="mt-5 bg-black text-white rounded-full px-6 py-3">
                            Explore Property
                        </button>

                    </div>

                </div>

            </div>
            <Stats />
        </section>
    );
};

export default FeaturedSection;