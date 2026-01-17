import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'Java Developer at TCS',
        content: "The training at LinkCode was a game changer for me. The live projects gave me the confidence to crack the interview.",
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
        name: 'Rahul Verma',
        role: 'Full Stack Dev at Infosys',
        content: "Excellent trainers and supportive staff. The hands-on approach helped me understand complex concepts easily.",
        rating: 5,
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
        name: 'Anjali Gupta',
        role: 'Data Analyst at Wipro',
        content: "Placement assistance is 100% genuine. They guided me from resume building to mock interviews perfectly.",
        rating: 4,
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Student Success Stories
                    </h2>
                    <p className="text-gray-600">Hear from our students who are now successful professionals.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg relative border-t-4 border-blue-600 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
                        >
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote className="text-blue-600" size={64} />
                            </div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="p-1 bg-blue-100 rounded-full">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 leading-tight">{testimonial.name}</h4>
                                    <p className="text-sm text-blue-600 font-medium">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex text-yellow-400 mb-4 scale-90 origin-left">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "" : "text-gray-300"} />
                                ))}
                            </div>

                            <p className="text-gray-600 italic leading-relaxed flex-grow">"{testimonial.content}"</p>

                            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Verified Alumni</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
