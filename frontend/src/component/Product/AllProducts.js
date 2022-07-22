import React, { useState, useEffect } from "react";
import { FilterOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Modal, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import "./AllProducts.css";
import ProductCard from "../Home/ProductCard";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader/Loader";

const AllProducts = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(25000);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState([0, 25000]);
  const [keyword, setKeyword] = useState("");

  // let filter;
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const showModal = (f) => {
    setIsModalVisible(true);
    setFilter(f);
  };

  const handleOk = (low, high) => {
    setIsModalVisible(false);
    setPrice([low, high]);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    //  setPrice([low,high])
    // const price=[low,high]
    dispatch(getProduct(keyword, currentPage, price, category));
  }, [dispatch, currentPage, alert, error, price, category]);

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Button
              style={{
                backgroundColor: " #0ba968",
                border: "1px solid  #0ba968",
              }}
              type="primary"
              onClick={() => showModal("type")}
            >
              Category
            </Button>
          ),
        },
        {
          key: "2",
          label: (
            <Button
              type="primary"
              onClick={() => showModal("price")}
              style={{
                backgroundColor: " #0ba968",
                border: "1px solid  #0ba968",
              }}
            >
              Price
            </Button>
          ),
        },
      ]}
    />
  );

  const categories=[
    'laptop','vehicles',''
    ]

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="homeHeading">All Products</h2>
          <div style={{ marginLeft: "32px", marginTop: "32px" }}>
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space
                  style={{
                    width: "80px",
                    padding: "10px",
                    color: "black",
                    boxShadow: "rgb(187 187 187 / 40%) 0px 1px 25px",
                  }}
                >
                  Filter
                  <FilterOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div>
            <Modal
              title="filter"
              visible={isModalVisible}
              onOk={() => handleOk(low, high)}
              onCancel={handleCancel}
            >
              {filter === "price" ? (
                <>
                  low:{" "}
                  <input
                    type="number"
                    placeholder="0"
                    onChange={(e) => setLow(e.target.value)}
                  />
                  high:{" "}
                  <input
                    type="number"
                    placeholder="25000"
                    onChange={(e) => setHigh(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <button onClick={() => setCategory("laptop")}>laptop</button>{" "}
                  <button onClick={() => setCategory("vehicles")}>
                    Vehicles
                  </button>
                </>
              )}
            </Modal>
          </div>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
};
export default AllProducts;
