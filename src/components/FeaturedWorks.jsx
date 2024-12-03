import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import portfoliobg from "./portfoliobg.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations and responsive design.",
    image: portfoliobg,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "/",
    githubLink: "https://github.com/lh-Med97/my-portfolio/tree/master",
  },
  // {
  //   title: "E-Commerce Platform",
  //   description: "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
  //   image: "/ecommerce-preview.jpg",
  //   technologies: ["Next.js", "MongoDB", "Stripe"],
  //   liveLink: "https://yourecommerce.com",
  //   githubLink: "https://github.com/yourusername/ecommerce",
  // },
  // {
  //   title: "Task Management App",
  //   description: "A collaborative task management application with real-time updates and team features.",
  //   image: "/task-app-preview.jpg",
  //   technologies: ["React", "Firebase", "Material-UI"],
  //   liveLink: "https://yourtaskapp.com",
  //   githubLink: "https://github.com/yourusername/task-app",
  // }
];

function FeaturedWorks() {
  return (
    <div className="w-full py-20 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-600 via-gray-400 to-black dark:from-gray-300 dark:via-gray-100 dark:to-gray-400 text-transparent bg-clip-text"
        >
          Featured Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 dark:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                  >
                    <FaGithub className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                  >
                    <FiExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-200/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedWorks;
