import React from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
  const [name, setName] = React.useState(user? user.name : '')
  const [email, setEmail] = React.useState(user? user.email : '')
  const [role, setRole] = React.useState(user? user.role : '')


  const handleEmail= (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log('form enviado');
    console.log(name , email, role)
    resetForm()
  }

  console.log(email)

  function resetForm(){
    setName('')
    setEmail('')
  }

  return (
    <div>
      {/* 1.criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name='name' placeholder='Digite o nome' value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        <label htmlFor="name">
          <span>Email:</span> 
          <input type="email" name='email' placeholder='Digite o email' 
          onChange={(e)=> handleEmail(e)} value={email}/>
        </label>
        <input type="submit" value={`enviar`}/>
        <input type='reset' value={'limpar'} onClick={resetForm}/>
        <span>funções do sistema</span>
        <select name="role" onChange={(e) => setRole(e.target.value)}>
          <option value="">Selecione</option>
          <option value="admin">admin</option>
          <option value="user">user</option>
        </select>
      </form>
    </div>
  )
}

export default MyForm