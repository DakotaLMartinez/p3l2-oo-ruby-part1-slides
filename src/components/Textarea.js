import React, { useState, useEffect } from 'react'

function Textarea({label}) {
  const [text, setText] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem(label)
    storedValue && setText(storedValue)
  }, [])

  useEffect(() => {
    localStorage.setItem(label, text);
  }, [text])

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <textarea onChange={handleChange} onKeyDown={e => e.stopPropagation()} onKeyDownCapture={e => e.stopPropagation()} value={text}>
      
    </textarea>
  )
}

export default Textarea