'use client'

import { useState } from "react"
import { IoHomeOutline, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { SiUpwork } from "react-icons/si";
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { isDarkMode } = useTheme();

  return (
    <div className='flex flex-col-6 justify-center'>
      <div className={`hover:flex-1 mb-4 fixed justify-around bottom-4 left-1/2 transform -translate-x-1/2 w-auto min-w-[280px] h-12 ${
        isDarkMode 
          ? 'bg-gray-900/70 hover:bg-gray-900/90' 
          : 'bg-gray-800/90 hover:bg-gray-800'
      } backdrop-blur-sm py-2 px-6 flex items-center rounded-full gap-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
        <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
          <IoHomeOutline size={18} />
        </a>
        <a 
          href="https://www.linkedin.com/in/mohamedlahmamsi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          <IoLogoLinkedin size={18} />
        </a>
        <a 
          href="https://github.com/mohamedlahmamsi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          <IoLogoGithub size={18} />
        </a>
        <a 
          href="https://www.upwork.com/your-profile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          <SiUpwork size={18} />
        </a>
      </div>
    </div>
  )
}

{/* <div className="flex h-screen">
<nav className="flex flex-col items-center w-16 py-4 space-y-4 bg-background border-r">
  <a
    href="/"
    className="p-2 rounded-lg hover:bg-muted"
  >
    <Home className="w-6 h-6" />
    <span className="sr-only">Home</span>
  </a>
  
  <a
    href="/docs"
    className="p-2 rounded-lg hover:bg-muted"
  >
    <FileText className="w-6 h-6" />
    <span className="sr-only">Documentation</span>
  </a>

  <a
    href="https://github.com"
    className="p-2 rounded-lg hover:bg-muted"
  >
    <Github className="w-6 h-6" />
    <span className="sr-only">GitHub</span>
  </a>

  <a
    href="https://aedin.com"
    className="p-2 rounded-lg hover:bg-muted"
  >
    <aedin className="w-6 h-6" />
    <span className="sr-only">aedIn</span>
  </a>

  <a
    href="https://youtube.com"
    className="p-2 rounded-lg hover:bg-muted"
  >
    <Youtube className="w-6 h-6" />
    <span className="sr-only">YouTube</span>
  </a>

  <button
    onClick={() => {
      setIsDark(!isDark)
      document.documentElement.classList.toggle('dark')
    }}
    className="p-2 rounded-lg hover:bg-muted"
  >
    {isDark ? (
      <Sun className="w-6 h-6" />
    ) : (
      <Moon className="w-6 h-6" />
    )}
    <span className="sr-only">Toggle theme</span>
  </button>
</nav>
</div> */}