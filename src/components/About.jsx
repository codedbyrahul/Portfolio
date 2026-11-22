import React from 'react'

export function About(){
  return (
 <section id="about" className="py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold gradient-text mb-8">About</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="card p-6">
          <p className="opacity-85">
           I’m a Mobile Software Engineer specializing in React Native apps for iOS and Android. I’ve worked across architecture, shared component systems, real-time features, payments, analytics, and app releases. My toolkit includes Redux, Firebase, REST APIs, native modules, and performance debugging. I also build personal data and machine learning projects with Python.
          </p>
        </div>
        <div className="card p-8 flex flex-col items-center">
          <div className="orbit">
            <div className="ring">
              <div className="icon" style={{top:'-10px', left:'calc(50% - 19px)'}}>🔧</div>
              <div className="icon" style={{top:'calc(50% - 19px)', left:'-10px'}}>⚛️</div>
              <div className="icon" style={{bottom:'-10px', left:'calc(50% - 19px)'}}>💎</div>
              <div className="icon" style={{top:'calc(50% - 19px)', right:'-10px'}}>📱</div>
            </div>
            <div className="ring reverse">
              <div className="icon" style={{top:'30px', left:'30px'}}>🧪</div>
              <div className="icon" style={{top:'30px', right:'30px'}}>🧰</div>
              <div className="icon" style={{bottom:'30px', left:'30px'}}>⚙️</div>
              <div className="icon" style={{bottom:'30px', right:'30px'}}>🛰️</div>
            </div>
          </div>
          <div className="mt-6 text-sm opacity-70">Orbiting skills & tools</div>
        </div>
      </div>
    </section>
  )
}
