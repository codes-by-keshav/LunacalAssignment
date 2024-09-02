import React, { useState } from 'react';
import { Plus, HelpCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const ProfileUI = () => {
    const [activeTab, setActiveTab] = useState('About Me');

    const tabs = ['About Me', 'Experiences', 'Recommended'];
    const aboutMeContent = `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
    I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella.
    Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`;
    const experiencesContent = `I've been working at this awesome company for 3 years now. Its an amazing place to work.
    I met very interesting people here and I've learned a lot. Co-workers were very supportive and helpful`;
    const recommendedContent = `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
    return (
        <div className="min-h-screen bg-gradient-to-t from-[#191b1f] to-[#2a2e33] p-8 text-white">
            <div className="max-w-2xl ml-auto mr-8 my-24">
                <div className="space-y-6">
                    {/* Top container */}
                    <div className="bg-[#363c43] bg-opacity-80 rounded-lg p-4 relative">
                        <HelpCircle className="absolute top-2 left-2 w-5 h-5 text-gray-400" />
                        <div className="flex justify-center mb-4">
                            <div className="bg-[#171717] max-w-full rounded-2xl p-1 inline-flex">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        className={`px-14 py-2 rounded-2xl transition-all duration-300 ${activeTab === tab
                                            ? 'bg-[#28292f] shadow-[0_0_25px_25px_rgba(0,0,0,0.3)] relative z-10'
                                            : 'hover:bg-[#28292f] hover:shadow-md hover:-translate-y-0.5'
                                            }`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="text-base">
                            {activeTab === 'About Me' && aboutMeContent}
                            {activeTab === 'Experiences' && experiencesContent}
                            {activeTab === 'Recommended' && recommendedContent}
                        </div>

                    </div>
                    <hr className="border-t-4 border-[#363c43] mt-4" />

                    {/* Bottom container */}
                    <div className="bg-[#363c43] bg-opacity-80 rounded-lg p-4 relative">
                        <HelpCircle className="absolute top-2 left-2 w-5 h-5 text-gray-400" />
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold bg-[#171717] px-8 py-2 ml-6 rounded-2xl">Gallery</h2>
                            <div className="flex items-center space-x-6">
                                <button className="bg-[#373b40] px-4 py-2 rounded-full flex font-semibold items-center space-x-2 hover:bg-[#282b30] transition-colors duration-300 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.1),_inset_2px_2px_5px_rgba(0,0,0,0.5)] hover:shadow-[inset_-3px_-3px_7px_rgba(255,255,255,0.2),_inset_3px_3px_7px_rgba(0,0,0,0.7)]">
                                    <Plus size={20} />
                                    <span>ADD IMAGE</span>
                                </button>
                                <button className="bg-[#1c1e21] p-2 rounded-full hover:bg-[#0d0e0f] transition-colors duration-300 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.1),_inset_2px_2px_5px_rgba(0,0,0,0.5)] hover:shadow-[inset_-3px_-3px_7px_rgba(255,255,255,0.2),_inset_3px_3px_7px_rgba(0,0,0,0.7)]">
                                    <ArrowLeft size={24} />
                                </button>
                                <button className="bg-[#1c1e21] p-2 rounded-full hover:bg-[#0d0e0f] transition-colors duration-300 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.1),_inset_2px_2px_5px_rgba(0,0,0,0.5)] hover:shadow-[inset_-3px_-3px_7px_rgba(255,255,255,0.2),_inset_3px_3px_7px_rgba(0,0,0,0.7)]">
                                    <ArrowRight size={24} />
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-gray-600 aspect-square rounded-3xl overflow-hidden">
                                    <img src="grey.jpg" alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="border-t-4 border-[#363c43] mt-6" />
            </div>
        </div>
    );
};

export default ProfileUI;