import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import MyChart from './components/MyChart/MyChart';
import SpecialChart from './components/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
function App() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  })
  return (
    <div className="App">
      <Header></Header>
      <Pricing></Pricing>
      <animated.div style={props}>I will fade in</animated.div>
      <MyChart></MyChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
