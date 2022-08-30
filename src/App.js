import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';

function App() {

  return (
    <div className="App">
      <img alt='wine-background' className='bg' src="bg.jpg" width="100%"/>
      <Header />
      <div className='menu-content'>
        <Menu />
        <Content/>
      </div>
    </div>
  );
}

export default App;
