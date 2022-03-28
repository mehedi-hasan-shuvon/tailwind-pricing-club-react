import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import MyChart from './components/MyChart/MyChart';
import SpecialChart from './components/SpecialChart/SpecialChart';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Pricing></Pricing>
      <MyChart></MyChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
