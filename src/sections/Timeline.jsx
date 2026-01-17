import React from 'react';
import { Flag, Laptop, CircleDollarSign, Award } from 'lucide-react';

const timelineSteps = [
    { icon: Flag, title: 'Internship Started', desc: '6 Months intensive program' },
    { icon: Laptop, title: 'Live Projects', desc: 'Work on real client projects' },
    { icon: CircleDollarSign, title: 'Stipend', desc: 'Earn while you learn' },
    { icon: Award, title: 'Completion', desc: 'Get Experience Certificate' },
];

const Timeline = () => {
    return (
        <section className="py-20 bg-blue-600 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl lg:text-4xl font-bold mb-4"
                    >
                        Project Based Learning Timeline
                    </h2>
                    <p className="text-blue-100 opacity-90 max-w-2xl mx-auto">
                        Experience the real corporate environment before you even join one.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-blue-400/50 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {timelineSteps.map((step, index) => (
                            <div
                                key={index}
                                className="text-center group"
                            >
                                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <step.icon size={32} className="text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-blue-100 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
