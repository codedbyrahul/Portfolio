
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { contact } from '../data/contact'

export function Hero(){
  return (
    <section className="py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{opacity:0, y:18}} animate={{opacity:1, y:0}} transition={{duration:.7}}
          className="space-y-6">
          <p className="text-sm tracking-[.18em] text-violet-700 uppercase font-semibold">Software Engineer · Mobile</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-zinc-900">
            Hi, I’m <span className="gradient-text">Rahul Singh</span>.<br/>
            I build mobile apps.
          </h1>
          <p className="text-zinc-400 max-w-xl text-lg leading-8">
            Mobile Software Engineer with 4.5+ years of experience shipping cross-platform iOS and Android apps. Delivered 12+ production features across five applications, including a social platform serving 1.2M+ users. Focused on performance, maintainable architecture, and reliable releases.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#contact" className="px-6 py-3 rounded-lg bg-cyan-500/20 ring-1 ring-cyan-400/40 hover:shadow-glow font-semibold">Contact me</a>
            <a href="#work" className="px-6 py-3 rounded-lg bg-white/5 ring-1 ring-white/10 font-semibold">See my work</a>
          </div>
          <div className="flex flex-wrap gap-4 pt-4 text-sm text-zinc-300">
            <div className="inline-flex items-center gap-2"><Phone size={16}/>{contact.phone}</div>
            <a className="inline-flex items-center gap-2 link" href={`mailto:${contact.email}`}><Mail size={16}/>{contact.email}</a>
            <div className="inline-flex items-center gap-2"><MapPin size={16}/>{contact.location}</div>
            <a className="inline-flex items-center gap-2 link" href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/>LinkedIn</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:.96}} animate={{opacity:1, scale:1}} transition={{duration:.7, delay:.15}}>
          <div className="hero-visual mx-auto w-full max-w-2xl">
            <div className="hero-photo-wrap">
              <img className="hero-avatar" src={`${import.meta.env.BASE_URL}images/self.jpeg`} alt="Rahul Singh"/>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
