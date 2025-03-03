import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGift } from 'react-icons/fa';
import appImage from '../assets/Accredian-image.jpg';
import ReferralModal from './ReferralModal';
import Navigation from './Navigation';

function Refer({ activeTab, setActiveTab }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative h-full overflow-hidden bg-white pt-14 sm:pt-16">
            {/* Navigation - Absolute positioned */}
            <div className="absolute top-0 left-0 w-full">
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Main Content - adjusted padding */}
            <div className="container mx-auto px-3 sm:px-6 md:px-12 py-2 sm:py-8 flex items-center max-w-7xl relative h-[calc(100%-4rem)]">
                <div className="grid md:grid-cols-2 gap-4 md:gap-10 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-3 sm:space-y-6 px-1 sm:pl-3 md:pl-6 text-center md:text-left"
                    >
                        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                            Learn & Earn – <br />
                            <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                Get Rewards
                            </span> for Referring!
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
                            Refer friends and earn up to ₹{process.env.REACT_APP_MAX_REFERRAL_REWARD.toLocaleString()}! Join our community and start earning today.
                        </p>
                        {/* Refer Button */}
                        <motion.button
                            onClick={() => setIsModalOpen(true)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 
                            text-white rounded-full text-lg sm:text-xl font-semibold
                            shadow-[0_0_20px_rgba(66,153,225,0.5)] hover:shadow-[0_0_25px_rgba(66,153,225,0.8)]
                            group flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300
                            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                            before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full
                            before:transition-transform before:duration-700 before:pointer-events-none"
                        >
                            <span className="relative inline-flex items-center gap-2">
                                Refer Now
                                <motion.span
                                    initial={{ rotate: 0, scale: 1 }}
                                    animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.2, 1.2, 1] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 1,
                                        ease: "easeInOut"
                                    }}
                                    className="inline-block"
                                >
                                    <FaGift size={20} className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                </motion.span>
                            </span>

                            {/* Particle effects on hover */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(2)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={['', { opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8], y: [-20, -40] }]}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                            repeatDelay: 1
                                        }}
                                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                                        style={{
                                            right: `${20 + i * 12}%`,
                                            top: '50%'
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300 bg-gradient-to-r from-blue-400/0 
                          via-blue-400/30 to-purple-500/0 blur-xl -z-10" />
                        </motion.button>
                    </motion.div>

                    {/* Image/Phone Mockup - Removed hidden class and adjusted sizes */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mt-4 sm:mt-8 md:mt-0"
                    >
                        <div className="relative w-40 sm:w-56 md:w-64 h-[300px] sm:h-[400px] md:h-[450px] mx-auto">
                            {/* Background blur effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-[1.5rem] sm:rounded-[3rem] 
                          blur-xl transform rotate-3 scale-105"></div>

                            {/* Phone shadow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-[1.5rem] sm:rounded-[3rem] 
                          transform rotate-3 shadow-[0_0_40px_rgba(59,130,246,0.2)]"></div>

                            {/* Phone frame */}
                            <motion.div
                                animate={{
                                    rotate: [2, -2, 2],
                                    y: [-5, 5, -5]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative backdrop-blur-sm bg-[#f8f4f4]/80 rounded-[1.25rem] sm:rounded-[2rem] p-3 sm:p-4 h-full 
                        shadow-[0_0_20px_rgba(0,0,0,0.1)] border border-white/20"
                            >
                                {/* Phone content */}
                                <div className="relative h-full rounded-lg sm:rounded-2xl overflow-hidden 
                           shadow-inner ring-1 ring-black/5">
                                    <img
                                        src={appImage}
                                        alt="App Interface"
                                        className="w-full h-full object-cover object-center transform 
                           hover:scale-105 transition-all duration-700 ease-in-out"
                                    />

                                    {/* Glass overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent 
                              opacity-50"></div>
                                </div>

                                {/* Phone camera notch */}
                                <div className="absolute top-3 sm:top-6 left-1/2 transform -translate-x-1/2 w-12 sm:w-20 h-1 sm:h-1.5 
                            bg-slate-800/10 rounded-full backdrop-blur-sm"></div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Add Modal */}
            <ReferralModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}

export default Refer
