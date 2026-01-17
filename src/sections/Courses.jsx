import React from 'react';
import { Star, Clock, BookOpen } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export const courses = [
    {
        id: 'java-full-stack',
        title: 'Java Full Stack Development',
        rating: 4.8,
        reviews: 120,
        image: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?auto=format&fit=crop&q=80&w=800',
        desc: 'Master Java, Spring Boot, React, and AWS to become a complete developer.',
        overview: 'This comprehensive Java Full Stack Development course covers everything from core Java concepts to advanced frameworks like Spring Boot and React. You will learn to build robust, scalable web applications and deploy them to the cloud.',
        syllabus: [
            'Core Java & OOPs Concepts',
            'Advanced Java (Collections, Streams)',
            'Spring Framework & Spring Boot',
            'Hibernate & JPA',
            'RESTful Web Services',
            'Frontend with React.js',
            'Database Management (MySQL)',
            'Microservices Architecture',
            'Deployment & AWS Basics'
        ]
    },
    {
        id: 'python-full-stack',
        title: 'Python Full Stack Development',
        rating: 4.9,
        reviews: 150,
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800',
        desc: 'Learn Python, Django, React, and Data Science fundamentals.',
        overview: 'Dive into the world of Python Full Stack Development. This course takes you through Python programming, the Django web framework, and modern frontend development with React, along with an introduction to Data Science libraries.',
        syllabus: [
            'Python Programming Fundamentals',
            'Data Structures in Python',
            'Django Web Framework',
            'REST APIs with Django REST Framework',
            'Frontend Development with React',
            'Database Modeling (PostgreSQL)',
            'NumPy & Pandas for Data Science',
            'Git & Version Control',
            'Project Development'
        ]
    },
    {
        id: 'mern-stack',
        title: 'MERN Stack Development',
        rating: 4.7,
        reviews: 90,
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
        desc: 'Build modern web apps with MongoDB, Express, React, and Node.js.',
        overview: 'Become a MERN Stack expert by coding fast, modular, and testable web applications. Learn to use MongoDB, Express.js, React.js, and Node.js to build modern, full-stack JavaScript applications.',
        syllabus: [
            'JavaScript ES6+ Deep Dive',
            'React.js: Components, Hooks, Redux',
            'Node.js Fundamentals & Event Loop',
            'Express.js Framework',
            'MongoDB & Mongoose',
            'REST API Design & Implementation',
            'Authentication & Authorization (JWT)',
            'State Management',
            'Real-time Applications with Socket.io'
        ]
    },
    {
        id: 'android-development',
        title: 'Android Development',
        rating: 4.6,
        reviews: 80,
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
        desc: 'Create powerful mobile applications using Java/Kotlin and Android Studio.',
        overview: 'Learn to build professional Android applications from scratch. This course covers the Android SDK, user interface design, background processing, data storage, and network communication using both Java and Kotlin.',
        syllabus: [
            'Introduction to Android Studio',
            'Java & Kotlin based Development',
            'Android UI Layouts & Controls',
            'Activities, Fragments & Lifecycle',
            'RecyclerView & Adapters',
            'Data Persistence (Room Database)',
            'Networking with Retrofit',
            'Firebase Integration',
            'Publishing implementation to Play Store'
        ]
    },
    {
        id: 'devops',
        title: 'DevOps Development',
        rating: 4.8,
        reviews: 110,
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800',
        desc: 'Master CI/CD, Docker, Kubernetes, Ansible, and Cloud Infrastructure.',
        overview: 'Bridge the gap between development and operations. Learn the culture, practices, and tools of DevOps, including automation, continuous integration, continuous delivery, and containerization.',
        syllabus: [
            'Linux Fundamentals & Shell Scripting',
            'Git & GitHub for Version Control',
            'Build Automation with Maven/Gradle',
            'CI/CD with Jenkins',
            'Containerization with Docker',
            'Orchestration with Kubernetes',
            'Configuration Management with Ansible',
            'Infrastructure as Code (Terraform)',
            'Monitoring with Prometheus & Grafana'
        ]
    },
    {
        id: 'aws-cloud',
        title: 'AWS Cloud Infrastructure',
        rating: 4.9,
        reviews: 130,
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        desc: 'Become a certified AWS solutions architect and cloud engineer.',
        overview: 'Master Amazon Web Services (AWS) computing, storage, database, and networking services. Prepare for AWS certification and learn to design high-availability systems on the cloud.',
        syllabus: [
            'Introduction to Cloud Computing',
            'AWS Global Infrastructure',
            'IAM (Identity Access Management)',
            'EC2 (Elastic Compute Cloud)',
            'S3 (Simple Storage Service)',
            'VPC (Virtual Private Cloud)',
            'RDS & DynamoDB',
            'Lambda & Serverless Computing',
            'Auto Scaling & Load Balancing'
        ]
    }
];

const Courses = () => {
    return (
        <section className="py-20 bg-gray-50" id="courses">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Our Popular Courses
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose from our industry-aligned certified courses to kickstart your career.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold shadow-md flex items-center gap-1">
                                    <Star size={14} className="text-yellow-400 fill-current" />
                                    {course.rating}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px]">{course.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.desc}</p>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 border-t border-gray-100 pt-4">
                                    <div className="flex items-center gap-1">
                                        <BookOpen size={16} />
                                        <span>6 Months</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} />
                                        <span>2 hrs/day</span>
                                    </div>
                                </div>

                                <Link to={`/courses/${course.id}`} className="block w-full">
                                    <Button variant="outline" className="w-full">
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
