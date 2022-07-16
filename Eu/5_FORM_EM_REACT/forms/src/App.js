import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name:'josias', email:'josias@gmail.com'}}></MyForm>
    </div>
  );
}

export default App;
