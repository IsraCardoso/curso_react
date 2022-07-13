import React from 'react'

const Desafio4 = () => {
  const pessoas = [
    {id:1, nome: 'João', idade: 15 ,profissão: 'Programador' },
    {id:2, nome: 'Maria', idade: 22, profissão: 'Atendente' },
    {id:3, nome: 'José', idade: 30 ,profissão: 'Vendedor' },
    {id:4, nome: 'Pedro', idade: 17, profissão: 'Diretor' },
  ]
  return (
    <div>
      <tr style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
        <th>Nome</th>
        <th>Idade</th>
        <th>Profissão</th>
        <th>Pode dirigir?</th>
      </tr>
        {pessoas.map((pessoa) =>  (
          <tr style={{display:'flex' , justifyContent:'space-around'}} key={pessoa.id}>
            <td>{pessoa.nome}</td>
            <td>{pessoa.idade}</td>
            <td>{pessoa.profissão}</td>
            <td>{pessoa.idade >= 18 ? 'Pode Dirigir' : 'Não pode dirigir'}</td>
      </tr>
            ))}
      

  </div>
)}

export default Desafio4