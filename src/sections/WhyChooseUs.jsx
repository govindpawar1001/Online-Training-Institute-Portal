import React from 'react';


const reasons = [
    {
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=200",
        title: 'Experienced Trainers',
        desc: 'Learn from certified industry experts'
    },
    {
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=200",
        title: 'Internship Opportunities',
        desc: 'Work with real clients'
    },
    {
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=200",
        title: 'Career Guidance',
        desc: 'Expert career counseling & support'
    },
    {
        image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=200",
        title: 'Hands-on Projects',
        desc: 'Practical coding from day one'
    },
    {
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200",
        title: 'Live Projects',
        desc: 'Experience real-world development'
    },
    {
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=200",
        title: 'Build Your Projects',
        desc: 'Turn your ideas into reality'
    },
    {
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=200",
        title: 'Soft Skill Training',
        desc: 'Personality development sessions'
    },
    {
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
        title: '100% Placement',
        desc: 'Get placed in top MNCs'
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Why Choose LinkCode?
                    </h2>
                    <p
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        We don't just teach coding; we build careers. Here is why thousands of students trust us for their IT career.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group hover:-translate-y-1 text-center"
                        >
                            <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-md p-1 mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
