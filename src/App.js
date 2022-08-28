import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import { useState } from 'react';

const SCREEN_TYPE = {
  signup : "SIGNUP",
  shopping : "SHOPPING",
  feedback : "FEEDBACK"
}
function App() {
  const [screen, setScreen] = useState(SCREEN_TYPE.signup);

  function changeScreen(type){
    setScreen(SCREEN_TYPE[type]);
  }

  return (
    <div className="App">
      <Header />
      <div className='menu-content'>
        <Menu changeScreen={(type)=>changeScreen(type)} screen={screen}/>
        <Content screen={screen}/>
      </div>
    </div>
  );
}

export default App;
