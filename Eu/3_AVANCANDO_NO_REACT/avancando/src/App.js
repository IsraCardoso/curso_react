
import './App.css';
import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';


function App() {
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
    </div>
  );
}

export default App;
