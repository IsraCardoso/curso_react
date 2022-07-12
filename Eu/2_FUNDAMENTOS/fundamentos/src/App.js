//components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';
//styles
import './App.css';
import MyComponent from './components/MyComponent';

//component
function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
