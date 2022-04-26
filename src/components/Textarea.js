import React, { useState, useEffect } from 'react'

function Textarea({label}) {
  const [text, setText] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem(label)
    if (storedValue !== text) {
      setText()
    }
  }, [])

  useEffect(() => {
    
    
    localStorage.setItem(label, text);
  }, text)

  return (
    <textarea onChange={e => setText(e.target.value)}>
      
    </textarea>
  )
}

export default Textarea