import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './assets/pages/Home/Home';
import Navbar from './assets/Components/Navbar/Navbar';
import About from './assets/pages/About/About';

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
    </>
  )
}

export default App
