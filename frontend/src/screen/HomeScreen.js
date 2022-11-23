import { useEffect, useReducer } from "react";
import React from "react";
import axios from "axios";
//import data from "../data";
//import { Link } from "react-router-dom";
import logger from "use-reducer-logger";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

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

function HomeScreen() {
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
      // setProducts(result.data);
      // const response = await axios.get("/api/products");
      // console.log(response);
    };
    fetschData();
  }, []);
  return (
    <div>
      <h1>Feautered Products</h1>
      <div className="products">
        {loading ? (
         <LoadingBox/>
        ) : error ? (
         <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          products.map((product, key) => (
            <Product key={key} product={product}></Product>
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
