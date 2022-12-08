import Navbar from "../components/Navbar.jsx";
import Home from "../components/Home.jsx"
import ComoComprar from "../components/ComoComprar.jsx";
import ProductDetail from "../components/ProductDetail.jsx";
import {Routes, Route} from "react-router-dom"
import "./App.css";



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/como-comprar" element={<ComoComprar />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
