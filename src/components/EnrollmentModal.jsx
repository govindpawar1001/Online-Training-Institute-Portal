import React from 'react';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Button from './Button';

const EnrollmentModal = ({ isOpen, onClose, defaultCourse = '', title = "Enroll Now" }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            course: defaultCourse
        }
    });

    const onSubmit = (data) => {
        console.log("Enrollment Data:", data);
        alert(`Thank you for enrolling in ${data.course}! We will contact you shortly.`);
        reset();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
                <p className="text-gray-600 mb-6 text-sm">Fill in your details to secure your spot.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            className={`w-full px-4 py-2.5 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                            placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                            })}
                            className={`w-full px-4 py-2.5 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                            placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                            {...register("phone", {
                                required: "Phone is required",
                                minLength: { value: 10, message: "Invalid phone number" }
                            })}
                            className={`w-full px-4 py-2.5 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                            placeholder="+91 98765 43210"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Interested Course</label>
                        <select
                            {...register("course", { required: "Please select a course" })}
                            className={`w-full px-4 py-2.5 rounded-lg border ${errors.course ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white`}
                        >
                            <option value="">Select a course</option>
                            <option value="Java Full Stack">Java Full Stack Development</option>
                            <option value="Python Full Stack">Python Full Stack Development</option>
                            <option value="MERN Stack">MERN Stack Development</option>
                            <option value="Android Development">Android Development</option>
                            <option value="DevOps">DevOps Development</option>
                            <option value="AWS Cloud">AWS Cloud Infrastructure</option>
                            <option value="Software Development Program">Software Development Program (6 Months)</option>
                        </select>
                        {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course.message}</p>}
                    </div>

                    <Button type="submit" variant="primary" className="w-full justify-center mt-2">
                        Submit Application
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default EnrollmentModal;
