import React from 'react';
import { Terminal, Layers, Presentation, Rocket } from 'lucide-react';

const steps = [
    {
        icon: Terminal,
        title: '01. Programming Fundamentals',
        desc: 'C, C++, Data Structures & Algorithms',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        icon: Layers,
        title: '02. Full Stack Development',
        desc: 'Java / Python (Core & Advance), React / Angular, Node.js',
        color: 'bg-green-100 text-green-600'
    },
    {
        icon: Presentation,
        title: '03. Project Based Learning',
        desc: 'Live Projects, Client Applications, Internship',
        color: 'bg-purple-100 text-purple-600'
    },
    {
        icon: Rocket,
        title: '04. Real-Time Application',
        desc: 'Deployment, AWS & DevOps, Resume Building, Mock Interviews',
        color: 'bg-orange-100 text-orange-600'
    }
];

const StepsToSuccess = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Steps To Success
                    </h2>
                    <p className="text-gray-600">Your roadmap to a successful IT career</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl relative overflow-hidden group hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${step.color} transition-transform group-hover:scale-110 duration-300`}>
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.desc}</p>

                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gray-100 to-transparent rounded-bl-full -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepsToSuccess;
