import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './assets/pages/Home/Home';
import Navbar from './assets/Components/Navbar/Navbar';
import About from './assets/pages/About/About';
import Product from './assets/pages/Product/Product';
import Service from './assets/pages/Service/Service';
import Contact from './assets/pages/Contact/Contact';

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Product/>
      <Service/>
      <Contact/>
    </>
  )
}

export default App
