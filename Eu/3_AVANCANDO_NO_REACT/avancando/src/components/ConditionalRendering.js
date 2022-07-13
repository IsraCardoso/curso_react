import React,{useState} from "react";

const ConditionalRender = () => {
  const x = true;

  const [name,setName] = useState(true);

  
  function mudaNome () {
    setName(!name)
  }
  
  return (
    <div>
      <h3>Isso será exibido?</h3>
      {x && <p>Se x for true sim!</p>}
      <h3>Render ternário:</h3>
      {name === true ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={mudaNome}>Mudar Nome</button>
    </div>
  );
};

export default ConditionalRender;
