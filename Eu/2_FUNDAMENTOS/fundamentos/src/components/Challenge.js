import { useState } from "react";

const Challenge = () => {

  const [n1, setN1] = useState(parseInt(0) );
  const [n2, setN2] = useState(parseInt(0) );

  return(
    <>
    <div style={{display:'flex', justifyContent:'space-around'}}>
      <div style={{display:'flex', flexDirection:'column'}}>
        <label htmlFor="">Número 1</label>
        <input id='n1' type="number" placeholder="digite um número" onChange={(e)=>setN1(e.target.valueAsNumber)}/>
      </div>
      <div style={{display:'flex', flexDirection:'column'}}>
        <label htmlFor="">Número 2</label>
        <input id='n2' type="number" placeholder="digite um número" onChange={(e)=>{setN2(e.target.valueAsNumber)}} />
      </div>
      <div>
        <p>Total: {n1+n2}</p>
      </div>
    </div>
  </>
  )
}

export default Challenge