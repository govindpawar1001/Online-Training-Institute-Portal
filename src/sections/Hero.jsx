import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Phone, Users, GraduationCap } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1
                            className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-900"
                        >
                            Leading IT Training Institute in Pune, <span className="text-blue-600">Assured job placement</span> in top MNC's
                        </h1>

                        <p
                            className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
                        >
                            Master the skills that drive the future. Get hands-on training from industry experts and kickstart your career with our 100% placement assistance program.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <Button
                                variant="primary"
                                className="shadow-blue-500/30"
                                onClick={() => navigate('/courses')}
                            >
                                Explore Courses
                            </Button>
                            <Button variant="outline" className="gap-2">
                                <Phone size={18} />
                                +91 12345 67890
                            </Button>
                        </div>
                    </div>

                    {/* Right Image & Floating Cards */}
                    <div className="w-full lg:w-1/2 relative">
                        <div
                            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Students learning"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating Card 1 - Total Students */}
                        <div
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 z-20 border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <Users size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium">Total Students</p>
                                <p className="text-xl font-bold text-slate-900">20K+</p>
                            </div>
                        </div>

                        {/* Floating Card 2 - Graduation */}
                        <div
                            className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 z-20 border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium">Placed</p>
                                <p className="text-xl font-bold text-slate-900">5K+</p>
                            </div>
                        </div>

                        {/* Decorative blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-200/20 blur-3xl rounded-full -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
