import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import axios from 'axios';
import { format } from 'date-fns';
import { useParams } from "react-router-dom";

function YourReferrals({ activeTab, setActiveTab }) {
    const [referrals, setReferrals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { userID } = useParams();

    useEffect(() => {
        const fetchReferrals = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/referral/user/${userID}`);
                setReferrals(response.data.data || []);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch referrals');
                setLoading(false);
            }
        };

        fetchReferrals();
    }, []);

    if (loading) {
        return (
            <div className="relative min-h-screen flex items-center justify-center bg-white pt-20">
                <div className="absolute top-0 left-0 w-full">
                    <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="relative min-h-screen flex items-center justify-center bg-white pt-20">
                <div className="absolute top-0 left-0 w-full">
                    <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                <div className="text-red-500 text-center">
                    <p className="text-xl">{error}</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="relative h-[600px] bg-white pt-20">
            <div className="absolute top-0 left-0 w-full">
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            <div className="container mx-auto px-6 md:px-12 py-8 md:py-8 h-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto h-full"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                        Your Referrals
                    </h1>

                    {referrals.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-[calc(100%-120px)] bg-white rounded-xl shadow-lg">
                            <svg className="w-16 h-16 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                            </svg>
                            <p className="mt-4 text-xl text-gray-600">No referrals found</p>
                            <p className="mt-2 text-gray-500">You haven't made any referrals yet</p>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-lg h-[calc(100%-120px)]">
                            <div className="overflow-auto h-full">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Referee Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {referrals.map((referral, index) => (
                                            <motion.tr
                                                key={referral.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {referral.refereeName}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">
                                                        {referral.refereeEmail}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                                        ${referral.status === 'ACCEPTED' 
                                                            ? 'bg-green-100 text-green-800'
                                                            : referral.status === 'REJECTED'
                                                                ? 'bg-red-100 text-red-800'
                                                                : 'bg-yellow-100 text-yellow-800'
                                                        }`}
                                                    >
                                                        {referral.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {format(new Date(referral.createdAt), 'MMM dd, yyyy')}
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default YourReferrals;
