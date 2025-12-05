import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h1>

                <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 bg-indigo-700 p-8 text-white">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <p className="mb-8 text-indigo-100">
                                Interested in contributing to the Manava Swabhavalu project? We'd love to hear from you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-indigo-300 mt-1" />
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-indigo-200">Email</p>
                                        <p className="text-base">sagarvineeth1711@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-indigo-300 mt-1" />
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-indigo-200">Affiliation</p>
                                        <p className="text-base">IIIT Hyderabad, Swecha AI</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Globe className="h-6 w-6 text-indigo-300 mt-1" />
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-indigo-200">Project</p>
                                        <p className="text-base">Manava Swabhavalu</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 p-8 bg-white">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2 border"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2 border"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2 border"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
