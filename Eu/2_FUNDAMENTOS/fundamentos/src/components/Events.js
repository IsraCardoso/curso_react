
const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e.timeStamp)
  }
  const renderSomeText = (bool) => {
    if (bool){
      return <p>Renderizando</p>
    }
    else{
      return <p> Ou isso!</p>
    }
  }
  return(
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={(e)=>console.log('clicou')}>Clique aqui também</button>
      </div>
      <div>
        {renderSomeText(true)}
        {renderSomeText(false)}
      </div>
    </div>
  )
}

export default Events;