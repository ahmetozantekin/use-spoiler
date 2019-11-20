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
import { useMyHook } from 'use-spoiler'

const App = () => {
  return (
    <div id='example'>
      <p>Suspect Verbal Kint was {useSpoiler('Keyser Söze')}      since in the beginning.</p>
      <p>Suspect Verbal Kint was {useSpoiler('Keyser Söze', 5)}   since in the beginning.</p>
      <p>Suspect Verbal Kint was {useSpoiler('Keyser Söze', 10)}  since in the beginning.</p>
    </div>
  )
}
```

## License

MIT © [ahmetozantekin](https://github.com/ahmetozantekin)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
