import MyComponent from './components/MyComponent';
import './App.css';
import { useState } from "react";
import Title from './components/Title';
import CarDetails from "./components/CarDetails";

function App() {

  return (
    <div className='App'>
      <CarDetails></CarDetails>
    </div>
    );
}

export default App;
