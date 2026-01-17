import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Smartphone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Company Info */}
                    <div>
                        <Link to="/" className="flex items-center mb-6">
                            <span className="text-2xl font-bold text-blue-500">LinkCode</span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Leading IT Training Institute in Pune. We provide comprehensive training and 100% placement assistance to help you build a successful career in IT.
                        </p>

                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-blue-500 inline-block pb-2">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Contact Us', path: '/contact' },
                                { name: 'Technical Training', path: '/training/program' },
                                { name: 'LSDP Program', path: '/courses' },
                                { name: 'Placements', path: '/placements' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Courses */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-green-500 inline-block pb-2">Our Courses</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Java Full Stack', path: '/courses/java-full-stack' },
                                { name: 'Python Full Stack', path: '/courses/python-full-stack' },
                                { name: 'MEAN / MERN Stack', path: '/courses/mern-stack' },
                                { name: 'Mobile App Development', path: '/courses/android-development' },
                                { name: 'DevOps Development', path: '/courses/devops' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-gray-400 hover:text-green-400 transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-blue-500 inline-block pb-2">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 text-gray-400">
                                <MapPin className="flex-shrink-0 text-blue-500" size={20} />
                                <span>2nd Floor, Above Patanjali Store, Warje, Pune - 411058</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Smartphone className="flex-shrink-0 text-green-500" size={20} />
                                <span>+91 12345 67890</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Mail className="flex-shrink-0 text-blue-500" size={20} />
                                <span>info@linkcode.in</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 text-center text-gray-500 text-sm">
                    <p>© 2026 LinkCode. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
