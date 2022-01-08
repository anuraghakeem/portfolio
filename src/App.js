import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner'
import Divider from './Components/Divider'
import Skills from './Components/Skills'

function App() {
  return (
    <div className="App App-Container">
      <div class='grid-1100'>
        <Banner />
        <Divider />
        <Skills />
        <Divider />
      </div>
    </div>
  );
}

export default App;
