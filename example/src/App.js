import React from 'react'
import { useSpoiler } from 'use-spoiler'

const App = () => {
  return (
    <div id='example'>
      <p>Suspect Verbal Kint was {useSpoiler('Keyser Söze')}      since in the beginning.</p>
      <p>Suspect Verbal Kint was {useSpoiler('Keyser Söze', 5)}   since in the beginning.</p>
      <p>Suspect Verbal Kint was {useSpoiler('Keyser Söze', 10)}  since in the beginning.</p>
    </div>
  )
}
export default App
