import React from 'react';
import Contact from '../sections/Contact';

const ContactPage = () => {
    return (
        <main className="pt-20">
            <div className="bg-blue-50 py-12 text-center">
                <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
                <p className="mt-4 text-gray-600">We'd love to hear from you</p>
            </div>
            <Contact />
        </main>
    );
};

export default ContactPage;
