import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Alex Johnson",
            position: "CEO at InnovateX",
            testimonial: "Their insights and analytics tools have been a game changer for our startup. The level of detail and accuracy provided in their reports has enabled us to make data-driven decisions that have significantly improved our business operations and customer engagement strategies.",
            bgColor: "bg-teal-100" // Subtle background color
        },
        {
            name: "Samantha Lee",
            position: "CTO at TechSolutions",
            testimonial: "A fantastic resource for startup founders. The support and guidance provided by their team are top-notch! They helped us navigate through challenging phases with their expert advice and in-depth industry knowledge. Truly a partner in our growth journey.",
            bgColor: "bg-blue-100" // Subtle background color
        },
        {
            name: "David Smith",
            position: "Founder at EcoVentures",
            testimonial: "Invaluable advice and mentorship. They truly understand the startup ecosystem. Their approach to problem-solving and strategic planning has been instrumental in our success. The impact of their contributions on our business is immeasurable.",
            bgColor: "bg-pink-100" // Subtle background color
        }
    ];

    return (
        <div className="bg-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-teal-600">What Startups Say About Us</h2>
                <div className="flex justify-center items-center flex-wrap -mx-4 mt-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                            <div className={`p-6 rounded-lg shadow-md ${testimonial.bgColor}`}>
                                <p className="text-lg italic">"{testimonial.testimonial}"</p>
                                <p className="mt-4 font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-gray-600">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
