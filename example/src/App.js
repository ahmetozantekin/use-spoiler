import React from 'react'
import { useSpoiler } from 'use-spoiler'

const App = () => {
  return (
    <div id='example'>
      <p>Suspect Verbal Kint was {useSpoiler('Keyser Söze')} since in the beginning.</p>
      <h2> {useSpoiler('Narrator and Tyler Durden are actually playing two sides of the same character', 5)}</h2>
      <p>{useSpoiler('Bruce Willis'),10} was a ghost that only one kid could see.</p>
    </div>
  )
}
export default App
