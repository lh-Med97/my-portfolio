import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Camera } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle, AlertDialog, AlertDialogAction } from './components/ui/alert';

const PortfolioPage = () => {
  // Sample project data
  const projects = [
    {
      title: 'ERP Application for Alliance Française de Safi',
      description: 'Developed a web-based ERP application to digitalize invoice archives, implementing a validation system and generating visual reports.',
      technologies: ['React', 'Tailwind CSS', 'Laravel', 'MySQL'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com/example'
      },
      visuals: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500'
      ]
    },
    // Add more project objects as needed
  ];

  // Sample experience data
  const experiences = [
    {
      position: 'Full Stack Developer Intern',
      company: 'DATA FC, Safi, Morocco',
      duration: 'September 2023 - November 2023',
      responsibilities: [
        'Developed a website (backend/frontend)',
        'Managed service presentations',
        'Handled client inquiries'
      ]
    },
    // Add more experience objects as needed
  ];

  // Sample education data
  const education = [
    {
      degree: 'Web Full Stack Development',
      institution: 'Institut Spécialisé de Technologie Appliquée NTiC Safi',
      duration: 'September 2021 - July 2023'
    },
    {
      degree: 'BAC PRO Scientifique Maintenance Informatique et Réseaux',
      institution: 'Abdkrim Lkhtabi, Safi',
      duration: 'September 2020 - July 2021'
    }
  ];

  // Sample skills data
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Vue.js', 'Redux Toolkit',
    'PHP', 'Laravel',
    'SQL', 'MongoDB',
    'Jenkins', 'GitLab CI', 'GitHub Actions',
    'Git', 'Jira', 'Agile Methodologies'
  ];

  // Sample retention data for the chart
  const retentionData = [
    { month: 'Month 0', value: 100 },
    { month: 'Month 1', value: 88.8 },
    { month: 'Month 2', value: 79.5 },
    { month: 'Month 3', value: 74.2 },
    { month: 'Month 4', value: 68.2 },
    { month: 'Month 5', value: 65.4 },
    { month: 'Month 6', value: 59.4 }
  ];

  return (
    <div className="container mx-auto py-8">
      {/* Header */}
      <header className="bg-gray-900 text-white py-12 px-4">
        <h1 className="text-4xl font-bold">Mohammed Lahmamsi</h1>
        <h2 className="text-2xl font-medium">Full Stack Developer</h2>
        <div className="flex items-center space-x-4 mt-4">
          <a href="mailto:example@email.com" className="flex items-center">
            <FaEnvelope className="mr-2" />
            example@email.com
          </a>
          <a href="tel:+1234567890" className="flex items-center">
            <FaPhone className="mr-2" />
            +1 (234) 567-890
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
        <p className="text-lg mb-6">
          Développeur Full Stack innovant et soucieux du détail, passionné par la création d'applications efficaces et évolutives.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
          View My Work
        </button>
      </section>

      {/* About Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-6">
          I am a passionate full-stack developer with a keen eye for detail and a drive to create efficient and scalable applications. My journey into web development began with a strong foundation in frontend technologies like HTML, CSS, and JavaScript, which I've expanded to include frameworks like React and Tailwind CSS. On the backend, I've honed my skills in PHP and Laravel, as well as working with databases like SQL and MongoDB.
        </p>
        <p className="text-lg mb-6">
          Beyond technical skills, I am also well-versed in project management tools and methodologies, including Git, Jira, and Agile practices. I thrive in collaborative environments, where I can contribute my expertise and learn from my teammates.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 flex items-center">
              <Camera color="gray" size={32} className="mr-4" />
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-lg mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-gray-200 rounded-md px-2 py-1 text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-end space-x-4">
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                Live Demo
              </a>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                GitHub Repo
              </a>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {project.visuals.map((visual, visualIndex) => (
                <img key={visualIndex} src={visual} alt={`Project ${index} visual ${visualIndex}`} className="rounded-lg" />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-2">{experience.position}</h3>
            <p className="text-lg font-medium mb-2">{experience.company}</p>
            <p className="text-gray-500 mb-4">{experience.duration}</p>
            <ul className="list-disc pl-6">
              {experience.responsibilities.map((responsibility, resIndex) => (
                <li key={resIndex}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        {education.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
            <p className="text-lg font-medium mb-2">{item.institution}</p>
            <p className="text-gray-500">{item.duration}</p>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <form className="bg-gray-100 rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default PortfolioPage;