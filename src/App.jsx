import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './assets/pages/Home/Home';
import Navbar from './assets/Components/Navbar/Navbar';
import About from './assets/pages/About/About';
import Product from './assets/pages/Product/Product';
import Service from './assets/pages/Service/Service';
import Contact from './assets/pages/Contact/Contact';
import Footer from './assets/Components/Footer/Footer';
import Links from './assets/Components/Links/Links';

function App() {

  return (
    <>
      <Navbar/>
      <Links/>
      <Home/>
      <About/>
      <Product/>
      <Service/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
