import React, { ChangeEvent, useState } from 'react'

type Props = {}

const States = (props: Props) => {
  const [text, setText] = useState<string | null>(null)

  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
    <div>
      <p>O texto é: {text}</p>
      <input type="text" onChange={handleChange}/>
    </div>
  )
}

export default States