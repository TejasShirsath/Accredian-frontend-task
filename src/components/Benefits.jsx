import React from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaMedal, FaTrophy } from 'react-icons/fa';
import Navigation from './Navigation';

function Benefits({ activeTab, setActiveTab }) {
    const benefits = [
        {
            icon: <FaMedal className="text-yellow-500 text-4xl" />,
            title: "Exclusive Rewards",
            description: "Access special bonuses and premium features"
        },
        {
            icon: <FaGem className="text-blue-500 text-4xl" />,
            title: "Earn Up to ₹15,000",
            description: "Get rewarded for each successful referral you make"
        },
        {
            icon: <FaTrophy className="text-purple-500 text-4xl" />,
            title: "Leaderboard Rankings",
            description: "Compete with others and earn special achievements"
        }
    ];

    return (
        <div className="relative min-h-fit overflow-hidden bg-white pt-20">
            <div className="absolute top-0 left-0 w-full">
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            <div className="container mx-auto px-6 md:px-12 py-8 md:py-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Program Benefits
                    </h1>
                    <p className="text-xl text-gray-600">
                        Discover all the amazing rewards waiting for you
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="p-6 rounded-xl bg-white shadow-xl hover:shadow-2xl transition-shadow
                                     border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="mb-4 p-3 rounded-full bg-gray-50">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Benefits;
