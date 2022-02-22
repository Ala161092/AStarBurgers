import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

import About from "./components/About";
import Menu from "./components/Menu";
import ImageView from "./components/ImageView";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Menu />
      <ImageView />
      <Contact />
    </div>
  );
}

export default App;
