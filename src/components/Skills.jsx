import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", icon: FaReact, level: 90 },
      { name: "JavaScript", icon: SiJavascript, level: 85 },
      { name: "TypeScript", icon: SiTypescript, level: 80 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: FaNodeJs, level: 85 },
      { name: "Python", icon: FaPython, level: 80 },
      { name: "MongoDB", icon: SiMongodb, level: 75 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 70 },
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", icon: FaGitAlt, level: 85 },
      { name: "Docker", icon: FaDocker, level: 75 },
    ]
  }
];

const SkillBar = ({ name, level, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="mb-6"
  >
    <div className="flex items-center mb-2">
      <Icon className="w-6 h-6 mr-3 text-gray-700 dark:text-gray-300" />
      <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
      <span className="ml-auto text-gray-600 dark:text-gray-400">{level}%</span>
    </div>
    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-200"
      />
    </div>
  </motion.div>
);

function Skills() {
  return (
    <div className="w-full py-20 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-600 via-gray-400 to-black dark:from-gray-300 dark:via-gray-100 dark:to-gray-400 text-transparent bg-clip-text"
        >
          Skills & Competences
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                {category.category}
              </h3>
              {category.items.map((skill, skillIndex) => (
                <SkillBar
                  key={skillIndex}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
