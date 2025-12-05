import React from 'react';
import { ArrowRight, Users, Book, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="relative bg-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-800 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="lg:w-2/3">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Exploring <span className="text-indigo-300">Human Nature</span> through Telugu Language
                        </h1>
                        <p className="text-xl text-indigo-100 mb-8 max-w-2xl">
                            Manava Swabhavalu is a comprehensive project defining personality archetypes, collecting cultural references, and building a bilingual glossary for the first Telugu Large Language Model.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/types" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-indigo-50 transition-colors duration-200">
                                Explore Personalities <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link to="/glossary" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
                                View Glossary
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Contributions */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Key Contributions</h2>
                    <p className="mt-4 text-lg text-gray-600">Building the foundation for personality-aware AI in Telugu</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                            <Users className="h-6 w-6 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">15+ Personality Archetypes</h3>
                        <p className="text-gray-600">
                            Defined core personality types in Telugu with detailed descriptions and behavioral traits.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                            <MessageCircle className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">100+ Annotated Sentences</h3>
                        <p className="text-gray-600">
                            Collected dialogues, folk sayings, and literary quotes expressing distinct personality traits.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                            <Book className="h-6 w-6 text-pink-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Bilingual Glossary</h3>
                        <p className="text-gray-600">
                            Built a comprehensive Telugu-English glossary to bridge the gap between cultural nuance and AI understanding.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cultural Sources */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultural Sources</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Our dataset is enriched by deep cultural research, drawing from various authentic sources to ensure relevance and accuracy.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Classical Telugu literature (Sri Sri, Gurajada)',
                                    'Telugu proverbs (సామెతలు) and folk songs',
                                    'Real-life conversations and daily observations',
                                    'Films, plays, and storytelling traditions'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                            <span className="text-green-600 text-sm font-bold">✓</span>
                                        </div>
                                        <span className="ml-3 text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-5/12">
                            <div className="bg-white p-6 rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                                <blockquote className="text-xl font-medium text-gray-900 italic mb-4">
                                    "Language is not just a tool for communication, but a vessel for culture, emotion, and human nature."
                                </blockquote>
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                                        MS
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-bold text-gray-900">Manava Swabhavalu Team</p>
                                        <p className="text-sm text-gray-500">IIIT Hyderabad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
