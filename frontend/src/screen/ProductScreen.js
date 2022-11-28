import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";

const reducer = (state, action) => {
  switch (action.type) {
    case "Fetch_Request":
      return { ...state, loading: true };
    case "Fetch_Success":
      return { ...state, product: action.payload, loading: false };
    case "Fetch_Fail":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function ProductScreen() {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetschData = async () => {
      dispatch({ type: "Fetch_Request" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "Fetch_Success", payload: result.data });
      } catch (error) {
        dispatch({ type: "Fetch_Fail", payload: error.message });
      }
      //setProducts(result.data);
    };
    fetschData();
  }, [slug]);
  return loading ? (
    <div>Loading.....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <h1>{product.name}</h1>
      <img className="pro-image" src={product.image} alt={product.name} />
      <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
      <p>{product.price}</p>
      Description:
      <p>{product.description}</p>
      <p>Status:</p>
      <p>
        {product.stock > 0 ? (
          ((<span>In stock</span>), (<button>Add to cart</button>))
        ) : (
          <button>unavailable</button>
        )}
      </p>
    </div>
  );
}
export default ProductScreen;
