
import React from 'react'
import { Moon, Sun } from 'lucide-react'

const links = [
  {href:'#about',label:'About'},
  {href:'#work',label:'Work'},
  {href:'#experience',label:'Experience'},
  {href:'#contact',label:'Contact'},
]

export function Navbar({ theme, onToggleTheme }){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg gradient-text">Rahul Singh</a>
        <nav className="hidden sm:flex gap-6 text-sm">
          {links.map(l => <a key={l.href} href={l.href} className="hover:text-cyan-300">{l.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={18}/> : <Sun size={18}/>}
          </button>
          <a className="text-sm badge" href={`${import.meta.env.BASE_URL}assets/Rahul_Resume.pdf`} download>Download Resume</a>
        </div>
      </div>
    </header>
  )
}
