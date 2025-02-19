import React from 'react';
import { motion } from 'framer-motion';

function Navigation({ activeTab, setActiveTab }) {
    const tabs = ['Refer', 'Benefits', 'Your Referrals', 'Support'];

    return (
        <nav className="flex justify-center py-4">
            <div className="backdrop-blur-sm bg-white shadow-lg px-6 py-2 border border-gray-100 rounded-full">
                <div className="flex items-center justify-between gap-4 md:gap-8">
                    {/* Desktop & Mobile Navigation (Combined) */}
                    <div className="flex space-x-2 md:space-x-6">
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab}
                                onClick={() => setActiveTab && setActiveTab(tab)} // Add null check
                                className={`relative px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap
                                    ${activeTab === tab 
                                        ? 'text-blue-600' 
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="dot"
                                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-600 rounded-full"
                                        style={{ x: '-50%' }}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30
                                        }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
