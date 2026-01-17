import React from 'react';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import About from '../sections/About';
import WhyChooseUs from '../sections/WhyChooseUs';
import Courses from '../sections/Courses';
import StepsToSuccess from '../sections/StepsToSuccess';
import Timeline from '../sections/Timeline';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <Stats />
            <About />
            <WhyChooseUs />
            <Courses />
            <StepsToSuccess />
            <Timeline />
            <Testimonials />
            <Contact />
        </main>
    );
};

export default Home;
