import {useState} from 'react';
import './App.css';
import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRendering from './components/ConditionalRendering';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import ExecuteFunction from './components/ExecuteFunction';
import React from 'react';
import MessageState from './components/MessageState';
import ChangeMessageState from './components/ChangeMessageState';
import Desafio4 from './components/Desafio4';

function App() {

  const [message, setMessage] = useState('')
  const handleMessage = (message) => {
setMessage(message)
  }

  const cars =[
    {id:1 , brand: 'Ford', km: '100', color: 'Vermelho' },
    {id:2 , brand: 'Fiat', km: '200', color: 'Azul' },
    {id:3 , brand: 'Chevrolet', km: '300', color: 'Preto' },
    {id:4 , brand: 'Honda', km: '400', color: 'Branco' },
    {id:5 , brand: 'Toyota', km: '500', color: 'Vermelho' },
  ]

  function showMessage(alerta) {
    alert(alerta);
  }
  return (
    <div className="App">
      <h1>Avançando no React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>
      <div>
        <img src={City} alt="Noite na cidade"/>
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRendering/>
      {/* props */}
      <ShowUserName name='Teste'/>
      {/* destructuring */}
      <CarDetails brand='Fiat' km='100' color='Vermelho'/>
      {/* renderização em loop */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color}/>
      ))}
      <ExecuteFunction myFunction={showMessage}/>
      <MessageState msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
      <Desafio4/>
    </div>
  );
}

export default App;
