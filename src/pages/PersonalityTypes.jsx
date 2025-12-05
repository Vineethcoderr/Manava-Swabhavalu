import React from 'react';
import { personalities } from '../data/personalities';

const PersonalityTypes = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Personality Types (మానవ స్వభావాలు)</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                    A collection of core personality archetypes defined in Telugu, along with their English equivalents and behavioral descriptions.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {personalities.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
                        <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
                            <div className="flex justify-between items-baseline">
                                <h2 className="text-2xl font-bold text-indigo-900">{item.telugu}</h2>
                                <span className="text-sm font-medium text-indigo-600 bg-white px-2 py-1 rounded-full border border-indigo-200">
                                    {item.english}
                                </span>
                            </div>
                        </div>
                        <div className="p-6 flex-grow">
                            <div className="mb-4">
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Description</h3>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Example Behavior</h3>
                                <p className="text-gray-600 italic">"{item.example}"</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonalityTypes;
