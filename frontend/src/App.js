import { useEffect, useState } from "react";
import axios from "axios";
// import data from "./data";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetschData = async () => {
      const result = await axios.get("/api/products");
      setProducts(result.data);
    };
    fetschData();
  }, []);
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">MAF</Link>
        </header>
        <main>
          <Routes>
           <Routes path="/product/:slug" element={<ProductScreen />} />
           <Routes path="/" element={<HomeScreen />} />
          </Routes>

          <h1>Feautered Products</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>
                      {" "}
                      <strong>{product.name}</strong>
                    </p>
                  </a>
                  <p>{product.price}</p>
                  <button>Add to the Basket</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
