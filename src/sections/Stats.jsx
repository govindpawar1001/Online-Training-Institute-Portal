import React from 'react';
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
    { icon: Calendar, label: 'Years Experience', value: '15+', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
    { icon: Users, label: 'Students Trained', value: '20K+', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100' },
    { icon: Award, label: 'Highest Package', value: '60 LPA', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
    { icon: TrendingUp, label: 'Students Placed', value: '5K+', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' }
];

const Stats = () => {
    return (
        <section className="py-12 -mt-10 relative z-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center group"
                        >
                            <div className={`w-14 h-14 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon size={28} />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">
                                {stat.value}
                            </h3>
                            <p className="text-gray-500 font-medium text-sm lg:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
