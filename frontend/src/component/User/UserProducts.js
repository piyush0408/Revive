import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getUserProducts } from "../../actions/productAction";
import './UserProducts.css'
import { Link, useHistory } from "react-router-dom";
import ProductCard from "../Home/ProductCard";
import Loader from "../layout/Loader/Loader";



// const ProductCardView=({product})=>{
//   const history = useHistory();
//   const dispatch = useDispatch();
  


   


// return(
// <>
//   <div className="productCardView">
//    <ProductCard product={product} onDelete={deleteProductHandler} onEdit={editHandler} />
// </div>
// <div>

// </div>
// </>


// )



// }














const UserProducts = () => {
    const dispatch = useDispatch();
   const { error, products , loading } = useSelector((state) => state.products);
 

  



  useEffect(() => {
   
    dispatch(getUserProducts());
    // setAllProducts(products);
  
  }, [])

  
  
  
    return (
    <>
      {loading?<Loader/>:
     <div style={{border:"3px solid black", display:"flex", flexWrap:"wrap"}}>
        {products?(
            products.map((product,index)=> <ProductCard key ={index} product={product} showAction/>)
        ):"add new products plz"}
    </div>}
    </>
  )
}
export default UserProducts