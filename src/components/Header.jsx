import { motion } from 'framer-motion';
import logo from "./Design.png";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='w-full px-4 h-screen flex flex-col justify-center items-center overflow-hidden'
    >
      <div className='relative group max-w-full'>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [1, 1.02, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className='absolute inset-0 rounded-full bg-gradient-to-r from-gray-800 via-white/20 to-gray-900 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-300'
          style={{ transform: 'translate(-4%, -4%) scale(1.08)' }}
        />
        <motion.div 
          className="relative p-1 rounded-full dark:bg-gradient-to-r from-gray-700 via-gray-300 to-gray-800"
          initial={{ opacity: 0, scale: 0.9, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.div 
            className="p-1 rounded-full bg-gradient-to-b from-gray-900 to-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.img 
              src={logo} 
              alt="Mohammed Lahmamsi" 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
              className='rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] dark:shadow-[0_0_20px_rgba(0,0,0,0.3)]'
              style={{ 
                filter: 'brightness(1.05) contrast(1.05)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mt-8 px-4 max-w-3xl mx-auto'
      >
        <TypeAnimation
          sequence={[
            'Bonjour, Je suis Mohammed Lahmamsi',
            2000,
            'Hello, I am Mohammed Lahmamsi',
            2000,
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-600 via-gray-400 to-black dark:from-gray-400 dark:via-gray-200 dark:to-gray-600 text-transparent bg-clip-text"
        />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [20, -10, 5, 0],
            rotate: [0, -2, 2, 0]
          }}
          transition={{ 
            duration: 1.2,
            times: [0, 0.4, 0.7, 1],
            ease: "easeInOut"
          }}
          className="text-xl sm:text-2xl mt-4 font-light white:text-gray-800 dark:text-gray-300"
        >
          Full Stack Web Developer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center gap-6 mt-8"
        >
          <a href="https://github.com/lh-Med97" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/lahmamsi-mohammed-5882001ba/" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
