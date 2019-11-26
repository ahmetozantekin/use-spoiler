# use-spoiler

> react spoiler hook

[![NPM](https://img.shields.io/npm/v/use-spoiler.svg)](https://www.npmjs.com/package/use-spoiler) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-spoiler
```

## Usage

```jsx
import React, { Component } from 'react'
import { useSpoiler } from 'use-spoiler'

const App = () => {
  return (
    <div>
      <p>Suspect Verbal Kint was {useSpoiler('Keyser Söze')} since in the beginning.</p>
      <h2> {useSpoiler('Narrator and Tyler Durden are actually playing two sides of the same character', 5)}</h2>
      <p>{useSpoiler('Bruce Willis'),10} was a ghost that only one kid could see.</p>
    </div>
  )
}
```

## License

MIT © [ahmetozantekin](https://github.com/ahmetozantekin)

---

❤️ [create-react-hook](https://github.com/hermanya/create-react-hook).
