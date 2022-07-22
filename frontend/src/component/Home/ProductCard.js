import React from "react";
import "./ProductCard.css"

import { Rating } from "@material-ui/lab";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getUserProducts } from "../../actions/productAction"





const ProductCard = ({product, showAction}) => {
 
//  const product={
//   name:"product1",
//   owner:"user1",
//   type:"SELL",
//   price:5000,
//  }
 
const history = useHistory();
const dispatch = useDispatch();

 
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const editHandler=()=>{

    const url=  `/admin/product/${product._id}`;
    history.push(url);
    // console.log(" product id id:", id)
  
  }
  
  const deleteProductHandler =()=>{
    console.log("product id",product._id)
     dispatch(deleteProduct(product._id))
  }
  
  return (
    // <Link className="productCard" to={`/product/${product._id}`}>
      <div className="productCard">
      <img src="https://cdn.shopify.com/s/files/1/2291/2069/files/Home_page.jpg?v=1600606863"
       alt={product.name} />
      <p className="productCardHeader">{product.name}  </p>
      <p>@{product.user?.name}</p>
      <span>{`₹${product.price}`}</span>
      
     { showAction?<div className="actionButton" style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <Button type="primary" style={{background:"#0ba968", border:"1px solid  #0ba968"}} onClick={editHandler}> EDIT</Button>
        <Button type="primary"  style={{background:"tomato", border:"1px solid  tomato"}} onClick={deleteProductHandler}> Delete</Button>
      </div>:""}
      </div>
    // </Link>
  );
};

export default ProductCard;
