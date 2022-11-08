import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import data from "./data";

const reducer = (state, action) => {
  switch (action.type) {
    case "Fetch_Request":
      return { ...state, loading: true };
    case "Fetch_Success":
      return { ...state, products: action.payload, loading: false };
    case "Fetch_Fail":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function App() {
  //const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetschData = async () => {
      dispatch({ type: "Fetch_Request" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "Fetch_Success", payload: result.data });
      } catch (error) {
        dispatch({ type: "Fetch_Fail", payload: error.message });
      }

      //setProducts(result.data);
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
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            data.products.map((product) => (
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
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
