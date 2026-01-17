import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert('Thank you for contacting LinkCode! We will get back to you soon.');
    };

    return (
        <section className="py-20 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Side Info */}
                    <div
                        className="w-full lg:w-5/12"
                    >
                        <h4 className="text-blue-600 font-semibold mb-2 uppercase tracking-wide">Contact Us</h4>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
                            Get In Touch With Experts
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Have questions about our courses or placements? Reach out to us and we'll be happy to guide you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 mb-1">Visit Us</h5>
                                    <p className="text-gray-600 text-sm">2nd Floor, Above Patanjali Store, Warje, Pune - 411058</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 mb-1">Call Us</h5>
                                    <p className="text-gray-600 text-sm">+91 12345 67890</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 mb-1">Email Us</h5>
                                    <p className="text-gray-600 text-sm">info@linkcode.in</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div
                        className="w-full lg:w-7/12"
                    >
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input
                                            {...register("name", { required: "Name is required" })}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                            })}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        {...register("phone", {
                                            required: "Phone is required",
                                            minLength: { value: 10, message: "Invalid phone number" }
                                        })}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all`}
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        {...register("message")}
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="Tell us about your course interest..."
                                    ></textarea>
                                </div>

                                <Button type="submit" variant="primary" className="w-full">
                                    Send Message <Send size={18} />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
