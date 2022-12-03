import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Projects from './components/Projects';
import Services from './components/Services';
import Teams from './components/Teams';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Products/>
      <Services/>
      <Projects/>
      <Teams/>
      <Clients/>
    </div>
  );
}

export default App;
