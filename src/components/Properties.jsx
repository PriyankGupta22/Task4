import { BedDouble, Bath, MapPin } from "lucide-react";
import house1 from "../assets/hero.png";


const properties = [
    {
        image: house1,
        price: "$3,519,900",
        title: "The Pinnacle at Highland Park",
        location: "152 Maple Street, New York"
    },
    {
        image: house1,
        price: "$2,490,899",
        title: "The Pinnacle at Highland Park",
        location: "789 Forest Lane, Denver"
    },
    {
        image: house1,
        price: "$4,895,765",
        title: "The Pinnacle at Highland Park",
        location: "123 Serenity Drive, Austin"
    },
    {
        image: house1,
        price: "$3,197,000",
        title: "The Pinnacle at Highland Park",
        location: "332 Maple Street, New York"
    },
    {
        image: house1,
        price: "$2,480,899",
        title: "The Pinnacle at Highland Park",
        location: "789 Forest Lane, Denver"
    },
    {
        image: house1,
        price: "$4,895,765",
        title: "The Pinnacle at Highland Park",
        location: "123 Serenity Drive, Austin"
    }
];

const PropertySection = () => {
    return (
        <section className="w-full px-6 py-24">

            <div className="flex items-center justify-between mb-14">

                <div>

                    <h2 className="text-5xl font-semibold">
                        Explore our premier houses
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-xl">
                        Each listing offers unique features, exceptional
                        quality and premium locations.
                    </p>

                </div>

                <button className="bg-black text-white px-7 py-3 rounded-full hover:bg-gray-900 transition">
                    See All Properties
                </button>

            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                {properties.map((item,index)=>(

                    <div
                        key={index}
                        className="group cursor-pointer"
                    >

                        <div className="relative rounded-3xl overflow-hidden">

                            <img
                                src={item.image}
                                className="h-80 w-full object-cover duration-500 group-hover:scale-110"
                            />

                            <span className="absolute top-5 left-5 bg-white px-4 py-2 rounded-full text-sm font-medium">
                                For Sale
                            </span>

                        </div>

                        <div className="mt-5">

                            <div className="flex gap-5 text-gray-500 text-sm">

                                <span className="flex items-center gap-2">
                                    <BedDouble size={16}/>
                                    5 Bedrooms
                                </span>

                                <span className="flex items-center gap-2">
                                    <Bath size={16}/>
                                    4 Bathroom
                                </span>

                            </div>

                            <h3 className="text-2xl font-semibold mt-3">
                                {item.title}
                            </h3>

                            <div className="flex justify-between items-center mt-4">

                                <h4 className="text-xl font-bold">
                                    {item.price}
                                </h4>

                                <span className="flex items-center gap-1 text-gray-500 text-sm">

                                    <MapPin size={15}/>

                                    {item.location}

                                </span>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default PropertySection;