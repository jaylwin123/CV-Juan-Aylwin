import { useState } from 'react'
import './App.css'
import { TopBar, Hero, About, Skills, Experience, Education, Projects, Hobbies, Contact, Foot } from './sections'
import { Tweaks, TWEAK_DEFAULTS } from './tweaks'

function App() {
  const [state, setState] = useState(TWEAK_DEFAULTS)
  const [editMode] = useState(false)

  return (
    <>
      <TopBar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Hobbies />
      <Contact />
      <Foot />
      <Tweaks open={editMode} state={state} setState={setState} />
    </>
  )
}

export default App
