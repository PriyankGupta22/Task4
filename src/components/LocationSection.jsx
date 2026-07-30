import map from "../assets/hero.png";
import { ArrowRight } from "lucide-react";

const LocationSection = () => {
    return (
        <section className="w-full px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#fafafa] rounded-[35px] p-10 w-full">
                <div>
                    <img
                        src={map}
                        alt="Map"
                        className="w-full rounded-3xl"
                    />
                </div>
                <div>
                    <h2 className="text-5xl font-semibold leading-tight text-gray-900">
                        Discover Properties with
                        <br />
                        the Best Value
                    </h2>
                    <p className="mt-6 text-gray-500 leading-8 max-w-lg">
                        Browse premium residential and commercial
                        properties. Compare prices, explore locations,
                        and discover spaces designed for modern living.
                    </p>
                    <button className="mt-10 bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-full flex items-center gap-3 transition">
                        Find Estimated Properties
                        <ArrowRight size={18}/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;