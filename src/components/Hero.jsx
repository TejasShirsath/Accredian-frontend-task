import React from 'react';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaMoneyBill, FaCoins, FaDollarSign, FaGift, FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import appImage from '../assets/Accredian-image.jpg';

function Hero() {
  const icons = [
    { Icon: FaMoneyBillWave, size: 30, color: "text-green-300/40" },
    { Icon: FaGift, size: 30, color: "text-green-300/40" }
  ];

  const floatingElements = Array(10).fill(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Floating Elements Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((_, index) => {
          const randomIcon = icons[Math.floor(Math.random() * icons.length)];
          return (
            <motion.div
              key={index}
              className={`absolute ${randomIcon.color}`}
              initial={{ 
                y: Math.random() * 100,
                x: Math.random() * 100,
                scale: 0.8
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
              style={{
                top: `${Math.random() * 85}%`,
                left: `${Math.random() * 85}%`,
                filter: 'drop-shadow(0 0 3px rgba(0,255,0,0.2))'
              }}
            >
              <randomIcon.Icon size={randomIcon.size} />
            </motion.div>
          )}
        )}
      </div>

      {/* Main Content with higher z-index */}
      <div className="container mx-auto px-8 md:px-16 h-screen flex items-center max-w-7xl relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 pl-4 md:pl-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
              Learn & Earn – <br />
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Get Rewards
              </span> for Referring!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-xl">
              Refer friends and earn up to ₹15,000! Join our community and start earning today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-4 
                       rounded-full text-lg font-semibold hover:shadow-xl transition-all 
                       duration-300 shadow-lg hover:from-blue-700 hover:to-blue-600"
            >
              Refer Now
            </motion.button>
          </motion.div>

          {/* Image/Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-72 h-[500px] mx-auto">
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-[3rem] 
                            blur-xl transform rotate-3 scale-105"></div>
              
              {/* Phone shadow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-[3rem] 
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
                className="relative backdrop-blur-sm bg-[#f8f4f4]/80 rounded-[2rem] p-4 h-full 
                          shadow-[0_0_20px_rgba(0,0,0,0.1)] border border-white/20"
              >
                {/* Phone content */}
                <div className="relative h-full rounded-2xl overflow-hidden 
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
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-1.5 
                              bg-slate-800/10 rounded-full backdrop-blur-sm"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
