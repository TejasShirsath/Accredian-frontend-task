import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';
import Navigation from './Navigation';

function Support({ activeTab, setActiveTab }) {
    const contactMethods = [
        {
            icon: <FaEnvelope className="text-blue-500 text-2xl" />,
            title: "Email Support",
            description: "Get help via email within 24 hours",
            action: <a href={`mailto:${process.env.REACT_APP_SUPPORT_EMAIL}`} className="text-blue-600 font-medium hover:text-blue-700">{process.env.REACT_APP_SUPPORT_EMAIL}</a>
        },
        {
            icon: <FaPhone className="text-green-500 text-2xl" />,
            title: "Phone Support",
            description: "Talk to our support team",
            action: <a href={`tel:${process.env.REACT_APP_SUPPORT_PHONE}`} className="text-blue-600 font-medium hover:text-blue-700">{process.env.REACT_APP_SUPPORT_PHONE}</a>
        },
        {
            icon: <FaComments className="text-purple-500 text-2xl" />,
            title: "Live Chat",
            description: "Chat with us in real-time",
            action: <a 
                href="https://api.whatsapp.com/send?phone=15551234567&text=Hello%2C%20I%20need%20support%20with%20the%20referral%20program." 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-700"
            >
                Start Chat
            </a>
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
                        Need Help?
                    </h1>
                    <p className="text-xl text-gray-600">
                        We're here to assist you with your referral program questions
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow
                                     border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="mb-4 p-3 rounded-full bg-gray-50">
                                {method.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {method.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {method.description}
                            </p>
                            {typeof method.action === 'string' ? (
                                <button className="text-blue-600 font-medium hover:text-blue-700">
                                    {method.action}
                                </button>
                            ) : (
                                method.action
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Support;
