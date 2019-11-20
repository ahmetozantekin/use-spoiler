import React, { useState } from 'react'

export const useSpoiler = (text, blur = 3) => {
  let [textState] = useState(text)
  let [blurState, setBlurState] = useState(blur)
  const effectedClass = {filter: 'blur(' + blurState + 'px)', cursor: 'pointer'}

  return (
    <span style={effectedClass}
      onClick={() => {
        setBlurState(blurState = 0)
      }}>
      {textState}
    </span>
  )
}
