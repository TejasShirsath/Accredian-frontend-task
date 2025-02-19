import React, { useState } from 'react'
import Refer from './Refer'
import Benefits from './Benefits'
import YourReferrals from './YourReferrals'
import Support from './Support'
import { motion } from 'framer-motion'
import { FaMoneyBillWave, FaGift } from 'react-icons/fa'

function Hero() {
  const [activeTab, setActiveTab] = useState('Refer');
  const icons = [
    { Icon: FaMoneyBillWave, size: 24, color: "text-green-300/40" },
    { Icon: FaGift, size: 24, color: "text-green-300/40" }
  ];
  const floatingElements = Array(20).fill(null); // Increased count

  // Enhanced position function to handle all sides
  const getPosition = (index) => {
    const side = ['top', 'right', 'bottom', 'left'][index % 4];
    let position = {};

    switch(side) {
      case 'top':
        position = {
          top: '0%',
          left: `${10 + Math.random() * 80}%`,
          animateY: [-2, 8, -2],
          animateX: [0, Math.random() * 10 - 5, 0]
        };
        break;
      case 'bottom':
        position = {
          bottom: '0%',
          left: `${10 + Math.random() * 80}%`,
          animateY: [2, -8, 2],
          animateX: [0, Math.random() * 10 - 5, 0]
        };
        break;
      case 'left':
        position = {
          left: '0%',
          top: `${10 + Math.random() * 80}%`,
          animateX: [-2, 8, -2],
          animateY: [0, Math.random() * 10 - 5, 0]
        };
        break;
      case 'right':
        position = {
          right: '0%',
          top: `${10 + Math.random() * 80}%`,
          animateX: [2, -8, 2],
          animateY: [0, Math.random() * 10 - 5, 0]
        };
        break;
      default:
        position = {
          top: '0%',
          left: '50%',
          animateY: [-2, 8, -2],
          animateX: [0, 0, 0]
        };
    }

    return { ...position, side };
  };

  const renderComponent = () => {
    const props = { activeTab, setActiveTab };
    switch(activeTab) {
      case 'Benefits':
        return <Benefits {...props} />;
      case 'Your Referrals':
        return <YourReferrals {...props} />;
      case 'Support':
        return <Support {...props} />;
      default:
        return <Refer {...props} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 
                  flex justify-center items-center px-2 sm:px-4 md:px-[8%] py-2 sm:py-[4%] relative">
      {/* Floating Elements Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((_, index) => {
          const randomIcon = icons[Math.floor(Math.random() * icons.length)];
          const position = getPosition(index);
          
          return (
            <motion.div
              key={index}
              className={`absolute ${randomIcon.color}`}
              initial={{ scale: 0.8 }}
              animate={{
                y: position.animateY,
                x: position.animateX,
                scale: [0.8, 1, 0.8],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
              style={{
                ...position,
                filter: 'drop-shadow(0 0 3px rgba(0,255,0,0.2))'
              }}
            >
              <randomIcon.Icon size={randomIcon.size} />
            </motion.div>
          )
        })}
      </div>


      <div className="w-full h-[90vh] sm:h-[650px] md:h-[600px] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative z-10 bg-white">
        {renderComponent()}
      </div>
    </div>
  )
}

export default Hero
