import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product(props) {
  const { product } = props;
  return (
    <div>
      <div className="product">
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
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <p>{product.price}</p>
          <button>Add to the Basket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
