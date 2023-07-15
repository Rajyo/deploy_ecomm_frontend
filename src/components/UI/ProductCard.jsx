import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cartActions } from "../../redux/slices/cartSlice";
import "./product-card.css";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
      })
    );

    toast.success("Product added successfully");
  };

  return (
    <div className="card" key={item.id}>
      <Link to={`/shop/${item.id}`}>
        <motion.img whileHover={{ scale: 0.9 }} src={item.image} alt="" />
      </Link>
      <h4>{item.title}</h4>
      <h5>INR {item.price}</h5>
      <motion.span
        whileTap={{ scale: 1.2 }}
        onClick={() => addToCart(item)}
        className="btn"
      >
        Add to Cart
      </motion.span>
    </div>

    // <Col lg="3" md="4" className="mb-2">
    //   <div className="product__item">
    //     <div className="product__img">
    //       <Link to={`/shop/${item.id}`}>
    //         <motion.img whileHover={{ scale: 0.9 }} src={item.image} alt="" />
    //       </Link>
    //     </div>

    //     <div className="p-2 product__info">
    //       <h3 className="product__name">
    //         <Link to={`/shop/${item.id}`}>{item.title}</Link>
    //       </h3>
    //       <span>{item.category}</span>
    //     </div>

    //     <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
    //       <span className="price">${item.price}</span>
    //       <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
    //         <i className="ri-add-line"></i>
    //       </motion.span>
    //     </div>
    //   </div>
    // </Col>
  );
};

export default ProductCard;
