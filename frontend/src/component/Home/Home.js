import React, { Fragment, useEffect } from "react";

import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products , productsCount } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());


    
  }, [dispatch, error, alert]);
//  loading=false;
console.log("products",products, productsCount)

return (
    <Fragment>
      {false ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          {/* <div className="bann">
            <Carousel animation="slide">
              <img src={banner} alt="banner" className="carouselImage"/>
              <img src={cover} alt="banner" className="carouselImage"/>


            </Carousel>
            
          </div> */}

          <h2 className="homeHeading">Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            

          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
