// import data from "./data";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";

function App() {
  //const [products, setProducts] = useState([]);

  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">MAF</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
