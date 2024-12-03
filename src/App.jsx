import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FeaturedWorks from './components/FeaturedWorks'
import Navbar from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import Skills from './components/Skills'
import Education from './components/Education'
import About from './components/About'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full overflow-x-hidden bg-gray-100 dark:bg-black transition-colors duration-300">
        <div className='fixed top-0 left-0 right-0 z-50'>
          <ThemeToggle />
          <Navbar />
        </div>
        <div className="w-full">
          <Header/>
        </div>
        <div className="w-full">
          <About />
        </div>
        <div className='w-full bg-gray-100 dark:bg-black text-gray-900 dark:text-white'>
          <FeaturedWorks/>
        </div>
        <div className='w-full bg-gray-100 dark:bg-black text-gray-900 dark:text-white'>
          <Skills />
        </div>
        <div className='w-full bg-gray-100 dark:bg-black text-gray-900 dark:text-white'>
          <Education />
        </div>
        <div className='w-full bg-gray-100 dark:bg-black text-gray-900 dark:text-white'>
          {/* Add your next section here */}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
