import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUser, FaEnvelope } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from "react-router-dom";

const ReferralModal = ({ isOpen, onClose }) => {
  const { userID } = useParams();
  const [formData, setFormData] = useState({
    referrerFirstName: '',
    referrerLastName: '',
    refereeName: '',
    refereeEmail: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(userID)
      
      const response = await fetch('http://localhost:5000/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID,
          referrerName: `${formData.referrerFirstName} ${formData.referrerLastName}`,
          referrerEmail: formData.refereeEmail,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit referral');
      }

      const data = await response.json();
      toast.success('Referral submitted successfully!', {
        style: {
          background: '#4CAF50',
          color: '#fff',
          padding: '16px',
          borderRadius: '10px',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#4CAF50',
        },
        duration: 3000,
      });
      
      setTimeout(() => {
        onClose();
      }, 1000);

    } catch (error) {
      console.error('Error submitting referral:', error);
      toast.error('Failed to submit referral. Please try again.', {
        style: {
          background: '#F44336',
          color: '#fff',
          padding: '16px',
          borderRadius: '10px',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#F44336',
        },
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <Toaster position="top-center" reverseOrder={false} />
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 20 }}
            className="relative w-11/12 max-w-md bg-white rounded-2xl shadow-2xl
                     max-h-[90vh] overflow-y-auto"
          >
            <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
              <FaTimes size={24} />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Refer a Friend</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Referrer Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Your Details</h3>
                  <div className="space-y-3">
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="referrerFirstName"
                        value={formData.referrerFirstName}
                        onChange={(e) => setFormData({...formData, referrerFirstName: e.target.value})}
                        placeholder="First Name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="referrerLastName"
                        value={formData.referrerLastName}
                        onChange={(e) => setFormData({...formData, referrerLastName: e.target.value})}
                        placeholder="Last Name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Referee Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Friend's Details</h3>
                  <div className="space-y-3">
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="refereeName"
                        value={formData.refereeName}
                        onChange={(e) => setFormData({...formData, refereeName: e.target.value})}
                        placeholder="Friend's Name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="refereeEmail"
                        value={formData.refereeEmail}
                        onChange={(e) => setFormData({...formData, refereeEmail: e.target.value})}
                        placeholder="Friend's Email"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white 
                          rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl 
                          transition-shadow duration-300 disabled:opacity-50"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit Referral'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ReferralModal;
