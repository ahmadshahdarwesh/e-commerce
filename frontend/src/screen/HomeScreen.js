import React from "react";
import data from "../data";
import { Link } from "react-router-dom";
function HomeScreen() {
  return (
    <div>
      <h1>Feautered Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>
                  {" "}
                  <strong>{product.name}</strong>
                </p>
              </Link>
              <p>{product.price}</p>
              <button>Add to the Basket</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
