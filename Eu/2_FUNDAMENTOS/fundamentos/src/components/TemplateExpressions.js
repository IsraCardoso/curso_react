const TemplateExpressions = () =>{
  const name = 'Israel'
  const data={
    age:28,
    job:'Software Engineer'
  }

  return(
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como {data.job}</p>
      <p>Idade: {data.age}</p>
    </div>
  )
}

export default TemplateExpressions;