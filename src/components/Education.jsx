import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const education = [
  {
    type: "education",
    title: "WEB FULL STACK DEVELOPMENT DIGITAL OPTION",
    institution: "NTiC Safi Institute of Specialized Technology",
    date: "September 2021 - July 2023",
    description: "Comprehensive training in full-stack web development, specializing in modern web technologies",
    icon: FaGraduationCap
  },
  {
    type: "education",
    title: "PROFESSIONAL SCIENTIFIC HIGH SCHOOL DIPLOMA",
    institution: "Abdkrim Lkhtabi Safi High School",
    date: "September 2021",
    description: "Professional high school diploma in sciences with a specialization in computer maintenance and networks",
    icon: FaGraduationCap
  },
  {
    type: "education",
    title: "TECHNICIAN IN COMPUTER MAINTENANCE AND NETWORK SUPPORT",
    institution: "NTiC Safi Institute of Applied Technology",
    date: "September 2018 - July 2020",
    description: "Technical training in computer maintenance, network support, and system management",
    icon: FaGraduationCap
  }
];


const certificates = [
  {
    type: "certificate",
    title: "Formation React.js Avancée",
    institution: "Udemy",
    date: "2023",
    description: "Maîtrise des concepts avancés de React.js, Redux, et développement d'applications modernes",
    icon: FaCertificate
  },
  {
    type: "certificate",
    title: "Laravel Professional",
    institution: "Laravel Daily",
    date: "2023",
    description: "Développement backend avancé avec Laravel, API REST, et meilleures pratiques",
    icon: FaCertificate
  },
  {
    type: "certificate",
    title: "Full Stack Development",
    institution: "FreeCodeCamp",
    date: "2022",
    description: "Développement web full stack avec focus sur JavaScript, React, et Node.js",
    icon: FaCertificate
  }
];

const TimelineItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 pb-8 group"
  >
    {/* Timeline line */}
    <div className="absolute left-[11px] top-2 h-full w-[2px] bg-gray-200 dark:bg-gray-700 group-last:h-[calc(100%-2rem)]" />
    
    {/* Timeline dot */}
    <motion.div 
      className="absolute left-0 top-2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center"
      whileHover={{ scale: 1.2 }}
      whileInView={{ scale: [0, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <item.icon className="w-3 h-3 text-gray-600 dark:text-gray-300" />
    </motion.div>

    {/* Content */}
    <motion.div 
      className="bg-white dark:bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
      whileHover={{ y: -5 }}
    >
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
    </motion.div>
  </motion.div>
);

function Education() {
  return (
    <div className="w-full py-20 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-600 via-gray-400 to-black dark:from-gray-300 dark:via-gray-100 dark:to-gray-400 text-transparent bg-clip-text"
        >
          Education & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
              Formation
            </h3>
            <div className="relative">
              {education.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Certificates Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
              Certifications
            </h3>
            <div className="relative">
              {certificates.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Education;
