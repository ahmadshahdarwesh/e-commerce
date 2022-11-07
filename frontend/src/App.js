import { useEffect, useState } from "react";
import axios from "axios";
import data from "./data";

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
    <div>
      <header>
        <a href="/">MAF</a>
      </header>
      <main>
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
  );
}

export default App;
