import MyComponent from './components/MyComponent';
import './App.css';
import { useState } from "react";
import Title from './components/Title';

function App() {

  const [n, setN] = useState(10);
  const [redTitle, setRedTitle] = useState(true)

  return (
    <div className='App'>
      <h1>React com CSS</h1>
      <MyComponent/>
      <p> este texto é do componente pai</p>
      <p className='p-app'> este texto é do componente pai</p>
      <p style={{color:'lime', Width:'500px' }}> este texto é do inline </p>
      {/* css inlione dinâmico */}
      <h2 style={n < 10 ? ({color:'purple'}):null}>CSS dinâmico</h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle? ('red-title'):null}>Classe dinâmica</h2>
      {/* CSS Modules */}
      <Title/>
    </div>
    );
}

export default App;
