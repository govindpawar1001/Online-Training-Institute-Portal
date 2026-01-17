import React, { useState } from 'react';
import { Database, Code2, Globe, Server, Smartphone, Cloud, Layout, Terminal, Trello, BookOpen, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import EnrollmentModal from '../components/EnrollmentModal';

const modules = [
    {
        id: 1,
        title: "Introduction To Software Development",
        icon: BookOpen,
        color: "text-blue-600",
        bg: "bg-blue-50",
        topics: [
            "Understanding Software Development Lifecycle (SDLC) and Agile",
            "Types of Software Development (Web, Mobile, Desktop)"
        ],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Programming Fundamentals",
        icon: Terminal,
        color: "text-green-600",
        bg: "bg-green-50",
        topics: [
            "C / C++: Variables, Data Types, Operators, Control Structures",
            "Java: OOPs Concepts (Classes, Objects, Inheritance, Polymorphism)",
            "Excel Handling Package"
        ],
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Data Structures And Algorithms",
        icon: Code2,
        color: "text-purple-600",
        bg: "bg-purple-50",
        topics: [
            "Basic Data Structures: Arrays, Linked Lists, Stacks, Queues",
            "Advanced Data Structures: Trees, Graphs, Heaps, Hash, Maps",
            "Sorting: Bubble, Quick, Merge Sort",
            "Searching: Binary Search, Linear Search",
            "Greedy Algorithms and Dynamic Programming",
            "Time and Space Complexity Analysis"
        ],
        image: "https://www.incapp.in/assets/what-you-learn/dsa-java.webp"
    },
    {
        id: 4,
        title: "Java And Python",
        icon: Code2,
        color: "text-orange-600",
        bg: "bg-orange-50",
        topics: [
            "Advance Java: Database Connection, Work With SQL",
            "Advance Python: NumPy, Pandas, Data Analysis"
        ],
        image: "https://www.weblineindia.com/wp-content/uploads/2022/01/Java-vs-python-2.jpg"
    },
    {
        id: 5,
        title: "Web Development (Front-End)",
        icon: Layout,
        color: "text-pink-600",
        bg: "bg-pink-50",
        topics: [
            "HTML5 Semantics, Forms, Tables",
            "CSS3: Flexbox, Grid, Media Queries, Responsive Design",
            "JavaScript: DOM Manipulation, Event Handling"
        ],
        image: "https://cdn.prod.website-files.com/678a08d17a6b88bae4e2d8ee/67931a1b1122e0c759f072c8_66b0929089fba41bd4d24700_Key-Components-and-Technologies.png"
    },
    {
        id: 6,
        title: "Database Management",
        icon: Database,
        color: "text-teal-600",
        bg: "bg-teal-50",
        topics: [
            "SQL Databases (MySQL, PostgreSQL)",
            "NoSQL Databases (MongoDB)",
            "PLSQL Concepts"
        ],
        image: "https://s7280.pcdn.co/wp-content/uploads/2021/12/introduction-of-dbms.webp"
    },
    {
        id: 7,
        title: "Mean / Mern (Back-End)",
        icon: Server,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        topics: [
            "JavaScript (ES6+)",
            "MongoDB Schema Design",
            "Node.js Runtime Environment",
            "Express Framework & REST APIs"
        ],
        image: "https://www.bytestechnolab.com/wp-content/uploads/2020/06/MEAN-Stack-Development-Explained_-Why-Business-Must-Look-For-This-Framework_.webp"
    },
    {
        id: 8,
        title: "Mobile App Development",
        icon: Smartphone,
        color: "text-red-600",
        bg: "bg-red-50",
        topics: [
            "Flutter Or Ionic Framework",
            "Introduction to React Native for Cross Platform Apps",
            "APIs and Database Integration for Mobile Apps"
        ],
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 9,
        title: "Project Management And Tools",
        icon: Trello,
        color: "text-violet-600",
        bg: "bg-violet-50",
        topics: [
            "Agile Methodology and Scrum Framework",
            "Collaboration Tools (Jira, Git, GitHub)",
            "Team Collaboration & Version Control"
        ],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    }
];

const Program = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="pt-20 pb-16 bg-white">
            <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultCourse="Software Development Program" />

            {/* Header */}
            <div className="bg-blue-600 text-white py-20 mb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        Complete Software Development Program
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                        A comprehensive 6-month journey from basics to advanced technologies, designed to make you industry-ready.
                    </p>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="font-bold px-10 py-4 text-lg"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Enroll Now
                    </Button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {modules.map((module, index) => (
                        <div
                            key={module.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                        >
                            {/* Text Content */}
                            <div className="w-full lg:w-1/2">
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 ${module.bg} ${module.color}`}>
                                    <span>Module {module.id}</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                                    {module.title}
                                </h2>
                                <div className="space-y-4 mb-8">
                                    {module.topics.map((topic, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className={`mt-1 flex-shrink-0 w-5 h-5 ${module.color}`} />
                                            <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                                {topic}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="outline" className="gap-2 group">
                                    Read More
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Button>
                            </div>

                            {/* Image/Illustration */}
                            <div className="w-full lg:w-1/2">
                                <div className={`rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ring-1 ring-gray-100`}>
                                    <img
                                        src={module.image}
                                        alt={module.title}
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

               
            </div>
        </div>
    );
};

export default Program;
