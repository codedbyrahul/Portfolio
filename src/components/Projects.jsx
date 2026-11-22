
import React from 'react'
import { projects } from '../data/projects'

function ProjectCard({p}){
  const imageSrc = p.image?.startsWith('http') ? p.image : `${import.meta.env.BASE_URL}${p.image}`
  return (
    <article className="card flex flex-col md:flex-row gap-6">
      {p.image ? <img src={imageSrc} alt={`${p.title} artwork`} className="w-full md:w-40 h-24 object-contain rounded-xl ring-1 ring-white/10"/> : null}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <span className="text-xs text-zinc-400">{p.period}</span>
        </div>
        {p.category ? <p className="text-sm text-zinc-400">{p.category}</p> : null}
         <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
           {p.blurb.map((pt,i)=><li key={i}>{pt}</li>)}
        </ul>
        <div className="flex flex-wrap gap-2 pt-1">
          {p.tech.map(t => <span key={t} className="badge">{t}</span>)}
        </div>
        {p.links?.length ? (
          <div className="flex gap-4 pt-2">
            {p.links.map(l => <a key={l.href} className="link text-sm" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
          </div>
        ) : null}
      </div>
    </article>
  )
}

export function Projects(){
  return (
    <section id="work" className="py-16">
      <h2 className="section-title">Projects</h2>
      <div className="mt-8 grid gap-6">
        {projects.map(p => <ProjectCard key={p.title} p={p} /> )}
      </div>
    </section>
  )
}
