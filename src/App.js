import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import Navbar from './components/Navbar';
import Product from './components/Product';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar2 from './components/Navbar2';


function App() {
  return (
    <div className="App">
  <Navbar2/>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Product" element={<Product/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
  </BrowserRouter>
  <Footer/>
    </div>
  );
}

export default App;
