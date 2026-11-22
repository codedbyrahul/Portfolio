
import React, { useState } from 'react'
import { contact } from '../data/contact'

export function Contact(){
  const [status, setStatus] = useState('')
  const onSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')?.toString().trim() ?? ''
    const email = formData.get('email')?.toString().trim() ?? ''
    const message = formData.get('message')?.toString().trim() ?? ''
    const subject = `Portfolio message from ${name}`
    const body = `${message}\n\nReply to: ${email}`

    setStatus('Opening your email app with the message…')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }
  return (
    <section id="contact" className="py-16">
      <h2 className="section-title">Contact</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
        <div className="card space-y-3">
          <p>Drop me a message. I’m open to React Native roles, freelance projects, and collaborations.</p>
          <div className="space-y-1 text-zinc-300">
            <div>📞 {contact.phone}</div>
            <div>✉️ <a className="link" href={`mailto:${contact.email}`}>{contact.email}</a></div>
            <div>📍 {contact.location}</div>
            <div>🔗 <a className="link" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="card grid gap-3">
          <input className="bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2" name="name" autoComplete="name" placeholder="Your name" required/>
          <input className="bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2" name="email" autoComplete="email" type="email" placeholder="Your email" required/>
          <textarea className="bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2 h-28" name="message" placeholder="Message" required/>
          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 rounded-xl bg-cyan-500/20 ring-1 ring-cyan-400/40">Send</button>
            <span className="text-sm text-zinc-400" role="status" aria-live="polite">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
