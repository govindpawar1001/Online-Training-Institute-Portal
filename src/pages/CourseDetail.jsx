import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../sections/Courses';
import { Star, Clock, BookOpen, CheckCircle2, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import EnrollmentModal from '../components/EnrollmentModal';

const CourseDetail = () => {
    const { id } = useParams();
    const course = courses.find(c => c.id === id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!course) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h2>
                <Link to="/courses">
                    <Button variant="primary">Back to Courses</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-20 bg-white min-h-screen">
            <EnrollmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultCourse={course.title}
            />

            {/* Hero Section */}
            <div className="bg-blue-600 text-white py-16 lg:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/courses" className="inline-flex items-center text-blue-100 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Back to Courses
                    </Link>
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-2/3">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                {course.title}
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
                                {course.desc}
                            </p>

                            <div className="flex flex-wrap gap-6 text-sm font-medium mb-8">
                                <div className="flex items-center gap-2 bg-blue-500/30 px-4 py-2 rounded-full border border-blue-400/30">
                                    <Star className="text-yellow-400 fill-current" size={18} />
                                    <span>{course.rating} ({course.reviews} reviews)</span>
                                </div>
                                <div className="flex items-center gap-2 bg-blue-500/30 px-4 py-2 rounded-full border border-blue-400/30">
                                    <BookOpen size={18} />
                                    <span>6 Months Duration</span>
                                </div>
                                <div className="flex items-center gap-2 bg-blue-500/30 px-4 py-2 rounded-full border border-blue-400/30">
                                    <Clock size={18} />
                                    <span>2 Hours / Day</span>
                                </div>
                            </div>

                            <Button
                                variant="secondary"
                                className="px-8 py-4 text-lg"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Enroll Now
                            </Button>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <div className="bg-white p-2 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/20 to-transparent pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {course.overview}
                            </p>
                        </section>

                        {/* Syllabus */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">What You Will Learn</h2>
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                    {course.syllabus && course.syllabus.map((topic, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                            <span className="text-gray-700 font-medium">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Course Highlights</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-600">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    Live Interactive Sessions
                                </li>
                                <li className="flex items-center gap-3 text-gray-600">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    Real-world Projects
                                </li>
                                <li className="flex items-center gap-3 text-gray-600">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    Placement Assistance
                                </li>
                                <li className="flex items-center gap-3 text-gray-600">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    Industry Expert Mentors
                                </li>
                                <li className="flex items-center gap-3 text-gray-600">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    Certificate of Completion
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
