import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import ProductsList from "../../components/UI/ProductsList";
import "./product-details.css";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [tab, setTab] = useState("desc");
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });

    axios.get("https://fakestoreapi.com/products/").then((res) => {
      setCategory(res.data);
    });
  }, [id]);

  const relatedProducts = category.filter(
    (item) => item.category === product.category
  );

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
      })
    );

    toast.success("Product added successfully");
  };

  return (
    <Helmet title={product.title}>
      <CommonSection title={product.title} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6" className="card_img">
              <img src={product.image} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2 style={{ marginLeft: "0rem" }}>{product.title}</h2>

                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">
                    Category: {product.category}
                  </span>
                </div>

                <Col lg="12">
                  <div className="tab__wrapper d-flex align-items-center gap-5 mt-4">
                    <h6>Description</h6>
                  </div>

                  {tab === "desc" && (
                    <div className="tab__content mt-2">
                      <p>{product.description}</p>
                    </div>
                  )}
                </Col>

                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">
                    Price : INR {product.price}
                  </span>

                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="buy__btn"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mt-2">
              <h2 className="related__title">You might also like</h2>
            </Col>

            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;

// import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "reactstrap";
// import { useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../redux/slices/cartSlice";
// import { toast } from "react-toastify";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import ProductsList from "../components/UI/ProductsList";
// import "../styles/product-details.css";
// import axios from "axios";

// const ProductDetails = () => {
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products/").then((res) => {
//       setResults(res.data);
//     });
//   }, [results]);

//   console.log(results);

//   const [tab, setTab] = useState("desc");
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   const result = results.find((item) => item.id === id);
//   console.log(result);

//   const relatedProducts = results.filter(
//     (item) => item.category === result.category
//   );

//   const addToCart = () => {
//     dispatch(
//       cartActions.addItem({
//         id: result.id,
//         image: result.image,
//         title: result.title,
//         price: result.price,
//       })
//     );

//     toast.success("Product added successfully");
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [result]);

//   return (
//     <Helmet title={result.title}>
//       <CommonSection title={result.title} />

//       <section className="pt-0">
//         <Container>
//           <Row>
//             <Col lg="6">
//               <img src={result.image} alt="" />
//             </Col>
//             <Col lg="6">
//               <div className="product__details">
//                 <h2>{result.title}</h2>
//                 <div className="product__rating d-flex align-items-center gap-5 mb-3">
//                   <div>
//                     <span>
//                       <i className="ri-star-s-fill"></i>
//                     </span>
//                     <span>
//                       <i className="ri-star-s-fill"></i>
//                     </span>
//                     <span>
//                       <i className="ri-star-s-fill"></i>
//                     </span>
//                     <span>
//                       <i className="ri-star-s-fill"></i>
//                     </span>
//                     <span>
//                       <i className="ri-star-half-s-line"></i>
//                     </span>
//                   </div>
//                 </div>

//                 <div className="d-flex align-items-center gap-5">
//                   <span className="product__price">$ {result.price}</span>
//                   <span>Category: {result.category.toUpperCase()}</span>
//                 </div>

//                 <motion.button
//                   whileTap={{ scale: 1.2 }}
//                   className="buy__btn"
//                   onClick={addToCart}
//                 >
//                   Add to Cart
//                 </motion.button>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               <div className="tab__wrapper d-flex align-items-center gap-5">
//                 <h6
//                   className={`${tab === "desc" ? "active__tab" : ""}`}
//                   onClick={() => setTab("desc")}
//                 >
//                   Description
//                 </h6>
//               </div>

//               {tab === "desc" && (
//                 <div className="tab__content mt-5">
//                   <p>{result.description}</p>
//                 </div>
//               )}
//             </Col>

//             <Col lg="12" className="mt-5">
//               <h2 className="related__title">You might also like</h2>
//             </Col>

//             <ProductsList data={relatedProducts} />
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default ProductDetails;
