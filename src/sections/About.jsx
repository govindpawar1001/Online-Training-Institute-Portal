import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const features = [
    '100% Placement Assistance',
    'Industry-Oriented Hands-on Training',
    'Live Projects',
    'Online Live Training with Recorded Sessions'
];

const About = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Image Collage */}
                    <div
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="About LinkCode"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-full shadow-xl z-20 flex flex-col items-center justify-center w-40 h-40 border-4 border-white">
                            <span className="text-4xl font-bold">15+</span>
                            <span className="text-sm font-medium">Years Exp.</span>
                        </div>
                        <div className="absolute top-10 -left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl -z-10"></div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2">
                        <div>
                            <h4 className="text-blue-600 font-semibold mb-2 uppercase tracking-wide">About Us</h4>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900 leading-tight">
                                Pune's Best Professional <br />
                                <span className="text-blue-600">IT Training Institute</span>
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                We are dedicated to shaping the future of IT professionals. With over a decade of experience,
                                we provide comprehensive training that bridges the gap between academic learning and industry requirements.
                            </p>

                            <div className="space-y-4 mb-8">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button variant="primary" className="gap-2">
                                Discover More <ArrowRight size={18} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
