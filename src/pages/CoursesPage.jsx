import React from 'react';
import Courses from '../sections/Courses';
import StepsToSuccess from '../sections/StepsToSuccess';

const CoursesPage = () => {
    return (
        <main className="pt-20">
            <div className="bg-slate-900 text-white py-20 text-center">
                <h1 className="text-4xl font-bold">Our Professional Courses</h1>
                <p className="mt-4 text-gray-400">Industry-designed curriculum to make you job-ready</p>
            </div>
            <Courses />
            <StepsToSuccess />
        </main>
    );
};

export default CoursesPage;
