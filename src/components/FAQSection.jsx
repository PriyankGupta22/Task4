import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import faqImage from "../assets/hero.png";

const faqs = [
    {
        question: "What types of properties do you sell?",
        answer:
            "We specialize in residential, commercial and luxury properties. Our team helps buyers find homes, apartments, villas and investment opportunities that suit their budget and lifestyle."
    },
    {
        question: "How do I know if a property is a good investment?",
        answer:
            "We analyze market trends, property appreciation, nearby infrastructure and future growth before recommending any investment."
    },
    {
        question: "Do I need to hire a real estate agent?",
        answer:
            "While not mandatory, working with an experienced agent helps you negotiate better deals and complete paperwork smoothly."
    },
    {
        question: "What's the process for buying a property?",
        answer:
            "Choose a property, schedule a visit, verify documents, arrange financing and complete the registration process."
    },
    {
        question: "Can I tour a property before purchasing?",
        answer:
            "Yes. We encourage every buyer to visit the property before making a final decision."
    }
];

const FAQSection = () => {

    const [open, setOpen] = useState(0);

    return (
        <section className="w-full px-6 py-24">

            <div className="flex justify-between items-start mb-12">

                <h2 className="text-5xl font-semibold leading-tight">
                    Frequently asked
                    <br />
                    questions
                </h2>

                <p className="max-w-md text-gray-500 leading-7">
                    Our experts guide you through every step of buying,
                    selling and investing in premium real estate.
                </p>

            </div>

            <div className="space-y-5">

                {faqs.map((faq, index) => (

                    <div
                        key={index}
                        className="border rounded-3xl overflow-hidden"
                    >

                        <button
                            onClick={() => setOpen(open === index ? -1 : index)}
                            className="w-full px-8 py-6 flex justify-between items-center text-left"
                        >

                            <h3 className="text-xl font-semibold">
                                {faq.question}
                            </h3>

                            {
                                open === index ?
                                <ChevronUp size={22}/> :
                                <ChevronDown size={22}/>
                            }

                        </button>

                        <div
                            className={`grid transition-all duration-500 ${
                                open === index
                                ? "grid-rows-[1fr]"
                                : "grid-rows-[0fr]"
                            }`}
                        >

                            <div className="overflow-hidden">

                                <div className="px-8 pb-8 flex flex-col lg:flex-row gap-8 items-center">

                                    <p className="text-gray-500 leading-8 flex-1">
                                        {faq.answer}
                                    </p>

                                    {
                                        index === 0 && (

                                            <img
                                                src={faqImage}
                                                className="w-56 h-40 object-cover rounded-2xl"
                                                alt=""
                                            />

                                        )
                                    }

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default FAQSection;