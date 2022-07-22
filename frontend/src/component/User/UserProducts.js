import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getUserProducts } from "../../actions/productAction";
import "./UserProducts.css";
import { Link, useHistory } from "react-router-dom";
import ProductCard from "../Home/ProductCard";
import Loader from "../layout/Loader/Loader";

const UserProducts = () => {
  const dispatch = useDispatch();
  const { error, products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getUserProducts());
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
       <> 
        <h2 className="homeHeading">My Products</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {products.length>0
            ? products.map((product, index) => (
                <ProductCard key={index} product={product} showAction />
              ))
            : "add new products plz"}
        </div>
        </>
      )}
    </>
  );
};
export default UserProducts;
