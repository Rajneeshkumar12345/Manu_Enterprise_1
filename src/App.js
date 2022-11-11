import "./App.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Product from "./components/Product";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navbar2 from "./components/Navbar2";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar2 />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Product" element={<Product />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="*" element={<Navigate to="/" />}></Route>
        </Routes>
        <Footer/>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
