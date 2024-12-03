import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-gray-600 via-gray-400 to-black dark:from-gray-300 dark:via-gray-100 dark:to-gray-400 text-transparent bg-clip-text"
        >
          Who Am I?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
        >
          I'm an innovative Full Stack Developer with a strong eye for detail and a passion for crafting scalable and efficient solutions. My expertise lies in designing and building user-friendly applications that deliver exceptional performance in dynamic environments.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
        >
          With a proven ability to produce high-quality results, I thrive on contributing to cutting-edge projects and pushing boundaries in technology. I'm eager to bring my technical skills, creativity, and enthusiasm to a forward-thinking team.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center gap-6"
        >
          {/* <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">2+</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">10+</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">100%</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</p>
          </div> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
