import React from 'react'

const certifications = [
  ['Python Programming', 'E and ICT Academy, IIT Kanpur', '2019'],
  ['Computer System Security', 'E and ICT Academy, IIT Kanpur', '2020'],
  ['Wireless Communications', 'Yonsei University · Coursera', '2021'],
  ['Vocational Training', 'Bharat Sanchar Nigam Limited (BSNL)', '2020'],
]

export function Education(){
  return (
    <section className="py-16">
      <h2 className="section-title">Education &amp; Certifications</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <article className="card">
          <h3 className="text-xl font-semibold">Bachelor of Technology (B.Tech.)</h3>
          <p className="mt-2">Galgotias College of Engineering and Technology</p>
          <p className="mt-1 text-sm text-zinc-400">Greater Noida, India · Jul 2018 - Jun 2022</p>
        </article>
        <article className="card">
          <h3 className="text-xl font-semibold">Certifications</h3>
          <ul className="mt-3 space-y-2">
            {certifications.map(([name, issuer, year]) => (
              <li key={name} className="flex flex-wrap justify-between gap-x-3 text-sm">
                <span>{name} <span className="text-zinc-400">— {issuer}</span></span>
                <span className="text-zinc-400">{year}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
