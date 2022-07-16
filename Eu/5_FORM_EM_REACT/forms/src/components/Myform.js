import React from 'react'
import './MyForm.css'

const MyForm = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')

  const handleName= (e) => {
    console.log(e.target.value)
    // setName(e.target.value)
  }

  return (
    <div>
    {/* 1.criação de form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name='name' placeholder='Digite o nome'/>
        </div>
        <label htmlFor="name">
          <span>Email:</span> 
            <input type="email" name='email' placeholder='Digite o email' onChange={handleName}/>
        </label>
        <input type="submit" value={`enviar`}/>
      </form></div>
  )
}

export default MyForm