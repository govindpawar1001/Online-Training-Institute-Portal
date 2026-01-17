import React from 'react';
import About from '../sections/About';
import Stats from '../sections/Stats';
import WhyChooseUs from '../sections/WhyChooseUs';
import Timeline from '../sections/Timeline';

const AboutUs = () => {
    return (
        <main className="pt-20">
            <div className="bg-blue-600 text-white py-20 text-center">
                <h1 className="text-4xl font-bold">About LinkCode</h1>
                <p className="mt-4 text-blue-100">Building Careers Since 2008</p>
            </div>
            <About />
            <Stats />
            <WhyChooseUs />
            <Timeline />
        </main>
    );
};

export default AboutUs;
