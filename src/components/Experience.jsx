
import React from 'react'

const roles = [
  {
    company: 'Saorsa Technocrat Private Limited (OHi)',
    title: 'React Native Developer',
    period: 'Jul 2023 - Present · Jaipur, Rajasthan',
    points: [
      'Partnered with product managers and designers to define architecture for a real-time social app serving 1.2M+ users, across 25 modules and 70+ screens.',
      'Built Firebase chat, push notifications, and analytics events to track user engagement.',
      'Refactored and debugged the React Native app with Chrome DevTools and React DevTools to improve performance and cross-device reliability.',
      'Maintained a shared component library of 198 source files used across 280+ feature and screen files.',
      'Integrated PhonePe in production for secure in-app payments.',
      'Designed Redux state management across 19 user-facing flows, with 144 reducers and 27 sagas.',
      'Contributed to Agile planning, stand-ups, and peer reviews; shipped 43+ native releases and 5 CodePush updates.',
      'Owned App Store and Google Play releases using Fastlane, TestFlight, and Play Store Internal Testing.',
      'Resolved platform-specific navigation, build, signing, media, upload, pagination, and session issues.'
]

  },
  {
    company: 'Kiwitech India',
    title: 'Associate Software Engineer — Mobile Team',
    period: 'Jan 2022 - Jun 2023 · Noida, India',
    points: [
      'Delivered four React Native projects across iOS and Android, translating product requirements into technical design documents.',
      'Improved responsiveness and image loading with Reanimated, FastImage, and Maps integrations.',
      'Built native modules and REST API and Firebase integrations to extend app capabilities.',
      'Worked with cross-functional teams in Agile delivery.'
]

  }
]

export function Experience(){
  return (
    <section id="experience" className="py-16">
      <h2 className="section-title">Experience</h2>
      <div className="mt-6 grid gap-6">
        {roles.map((r) => (
          <div key={r.company} className="card">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold">{r.title} <span className="text-zinc-400">— {r.company}</span></h3>
              <span className="text-sm text-zinc-400">{r.period}</span>
            </div>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-zinc-300">
              {r.points.map((pt,i)=><li key={i}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
