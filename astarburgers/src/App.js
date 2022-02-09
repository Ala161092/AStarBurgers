import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Menu from './components/Menu';
import ImageView from './components/ImageView';

function App() {
  return (
    <div className="App">

      <Header />
      <About />
      <Menu />
      <ImageView />
     
    </div>
  );
}

export default App;
