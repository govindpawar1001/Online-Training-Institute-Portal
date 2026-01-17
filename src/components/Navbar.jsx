import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import EnrollmentModal from './EnrollmentModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    // State to track which mobile dropdown is open
    const [mobileDropdown, setMobileDropdown] = useState(null);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Training', path: '/training/program' },
        { name: 'Courses', path: '/courses' },
        { name: 'Placements', path: '/placements' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const toggleMobileDropdown = (name) => {
        if (mobileDropdown === name) {
            setMobileDropdown(null);
        } else {
            setMobileDropdown(name);
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <EnrollmentModal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
                title="Book A Demo Class"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <h1 className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-blue-600'}`}>
                            LinkCode
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.dropdown ? (
                                    <>
                                        <button
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors gap-1"
                                        >
                                            {link.name}
                                            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-blue-100">
                                            {link.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `text-sm font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                )}
                            </div>
                        ))}
                        <button
                            onClick={() => setIsDemoModalOpen(true)}
                            className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                        >
                            Book A Demo
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="lg:hidden bg-white shadow-lg overflow-hidden border-t border-gray-100"
                >
                    <div className="px-4 pt-4 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => toggleMobileDropdown(link.name)}
                                            className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                        >
                                            {link.name}
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-200 ${mobileDropdown === link.name ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        {mobileDropdown === link.name && (
                                            <div className="pl-6 mt-1 space-y-1 bg-gray-50/50 rounded-lg">
                                                {link.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.path}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded-md text-base font-medium ${isActive
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                )}
                            </div>
                        ))}
                        <div className="pt-4">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setIsDemoModalOpen(true);
                                }}
                                className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                                Book A Demo
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
