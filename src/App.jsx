
import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App(){
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return window.localStorage.getItem('portfolio-theme') || 'light'
  })

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    window.localStorage.setItem('portfolio-theme', nextTheme)
  }

  return (
    <div className={`portfolio-theme min-h-screen text-zinc-200 font-display bg-hero ${theme === 'dark' ? 'theme-dark' : ''}`}>
      <Navbar theme={theme} onToggleTheme={toggleTheme}/>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Education/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}
