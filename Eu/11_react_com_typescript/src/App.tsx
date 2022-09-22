import React from 'react';
import './App.css';
import Destructuring, { Category } from './components/Destructuring';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import States from './components/States';

type textOrNull = string | null;
type fixed = 'Isso' | 'Ou' | 'Aquilo';

function App() {
  const name:string = 'John';
  const age: number = 30;
  const isWorking: boolean = true;
  const myText: textOrNull = 'Hello World';
  let mySecondText: textOrNull = 'null';
  const myFixed: fixed = 'Aquilo';
  mySecondText = null;

  function userGreeting(name: string) {
    return <h1>Hello {name}</h1>;
  }


  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2> Nome: {name}</h2>
      <h2>idade: {age}</h2>
      {isWorking &&
        <p>Está trabalhando
        </p>
        }
        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>
        <SecondComponent name='teste'/>
        <Destructuring title='primeiro post' commentQnt={10} content='Algum comentário' tags={['ts', 'tsx'] } category={Category.JS}/>
        <Destructuring title='segundo post' commentQnt={10} content='segundo comentário' tags={['JS', 'Python']} category={Category.P}/>
        <States />
        {myText}
        {mySecondText}
    </div>
  );
}

export default App;
