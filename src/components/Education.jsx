import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const education = [
  {
    type: "education",
    title: "Master's in Computer Science",
    institution: "University Name",
    date: "2020 - 2022",
    description: "Specialized in Software Engineering and Web Development",
    icon: FaGraduationCap
  },
  {
    type: "education",
    title: "Bachelor's in Computer Science",
    institution: "University Name",
    date: "2017 - 2020",
    description: "Focus on Programming and Software Development",
    icon: FaGraduationCap
  }
];

const certificates = [
  {
    type: "certificate",
    title: "Full Stack Web Development",
    institution: "Udemy",
    date: "2023",
    description: "Comprehensive course covering modern web development technologies",
    icon: FaCertificate
  },
  {
    type: "certificate",
    title: "React & Node.js Development",
    institution: "Coursera",
    date: "2022",
    description: "Advanced web development with React and Node.js",
    icon: FaCertificate
  }
];

const TimelineItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 pb-8 group"
  >
    {/* Timeline line */}
    <div className="absolute left-[11px] top-2 h-full w-[2px] bg-gray-200 dark:bg-gray-700 group-last:h-[calc(100%-2rem)]" />
    
    {/* Timeline dot */}
    <motion.div 
      className="absolute left-0 top-2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center"
      whileHover={{ scale: 1.2 }}
    >
      <item.icon className="w-3 h-3 text-gray-600 dark:text-gray-300" />
    </motion.div>

    {/* Content */}
    <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
          {item.title}
        </h3>
        <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
          {item.date}
        </span>
      </div>
      <div className="text-gray-700 dark:text-gray-300 font-medium mb-1">
        {item.institution}
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        {item.description}
      </p>
    </div>
  </motion.div>
);

function Education() {
  return (
    <div className="w-full py-20 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-600 via-gray-400 to-black dark:from-gray-300 dark:via-gray-100 dark:to-gray-400 text-transparent bg-clip-text"
        >
          Education & Certificates
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
              Education
            </h3>
            <div className="relative">
              {education.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Certificates Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
              Certificates
            </h3>
            <div className="relative">
              {certificates.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
