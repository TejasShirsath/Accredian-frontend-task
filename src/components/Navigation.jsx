import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navigation({ activeTab, setActiveTab }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tabs = ['Refer', 'Benefits', 'Your Referrals', 'Support'];

    return (
        <nav className="relative flex justify-center py-2 sm:py-4">
            {/* Mobile Menu Button */}
            <button 
                className="md:hidden fixed top-3 right-3 z-50 p-2 bg-white rounded-full shadow-lg
                          hover:bg-gray-50 active:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:block backdrop-blur-sm bg-white/90 shadow-lg px-6 py-2 border border-gray-100 rounded-full">
                <div className="flex space-x-6">
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

            {/* Mobile Navigation - Enhanced */}
            <motion.div 
                className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 ${isMenuOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setIsMenuOpen(false);
                            }}
                            className={`relative px-6 py-3 text-lg font-medium transition-colors rounded-full
                                ${activeTab === tab 
                                    ? 'text-blue-600 bg-blue-50' 
                                    : 'text-gray-600 hover:bg-gray-50'}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
}

export default Navigation;
