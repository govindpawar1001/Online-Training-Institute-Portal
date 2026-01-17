import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

import AboutUs from './pages/AboutUs';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import Program from './pages/Program';
import CourseDetail from './pages/CourseDetail';
import Placements from './pages/Placements';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/courses/:id" element={<CourseDetail />} />
                    <Route path="/placements" element={<Placements />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/training/program" element={<Program />} />
                    <Route path="*" element={<Home />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
