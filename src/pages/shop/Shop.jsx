import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../../components/UI/CommonSection";
import Helmet from "../../components/Helmet/Helmet";
import "./shop.css";
import ProductsList from "../../components/UI/ProductsList";

const Shop = () => {
  const [products, setProducts] = useState([]);

  var count = 0;
  const [flag, setFlag] = useState(count);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then((res) => {
      setProducts(res.data);
    });
  }, [flag]);

  const [productsData, setProductsData] = useState(products);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then((res) => {
      setProductsData(res.data);
    });
    // axios.get("http://127.0.0.1:8000/post/post/").then((res) => {
    //   setProductsData1(res.data);
    // });
  }, []);

  // Object.assign(products, productsData1);
  // Object.assign(productsData, productsData1);
  // var finalArray = productsData1.concat(productsData);
  // console.log(finalArray);

  const handleSort = (e) => {
    const filterValue = e.target.value;
    console.log(filterValue)

    switch (filterValue) {
      case "ascending":
        setProductsData(products.sort((r1,r2)=> r1.price - r2.price))
        setFlag(count++)
        break;
      
      case "descending":
        setProductsData(products.sort((r1,r2)=> r2.price - r1.price))
        setFlag(count++)
        break;
      
      default :
        break;
    }
  };

  // const handleFilter = (e) => {
  //   const filterValue = e.target.value;
  //   if (filterValue === "electronics") {
  //     const filteredProducts = products.filter(
  //       (item) => item.category === "electronics"
  //     );

  //     setProductsData(filteredProducts);
  //   }

  //   if (filterValue === "jewelery") {
  //     const filteredProducts = products.filter(
  //       (item) => item.category === "jewelery"
  //     );

  //     setProductsData(filteredProducts);
  //   }

  //   if (filterValue === "men's clothing") {
  //     const filteredProducts = products.filter(
  //       (item) => item.category === "men's clothing"
  //     );

  //     setProductsData(filteredProducts);
  //   }

  //   if (filterValue === "women's clothing") {
  //     const filteredProducts = products.filter(
  //       (item) => item.category === "women's clothing"
  //     );

  //     setProductsData(filteredProducts);
  //   }

  //   if (filterValue === "filter") {
  //     setProductsData(products);
  //   }
  // };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <div className="products">
        <section>
          <Container>
            <Row>
              {/* <Col lg="3" md="5" style={{marginTop:"-2rem"}}>
                <div className="filter__widget">
                  <select onChange={handleFilter}>
                    <option value="filter" selected disabled>Filter By Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                  </select>
                </div>
              </Col> */}
              <Col
                lg="3"
                md="5"
                className="text-end"
                style={{ marginLeft: "-9rem", marginTop: "-2rem" }}
              >

                <div className="filter__widget">
                  <select onClick={handleSort}>
                    <option value="filter" selected disabled>Sort By</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>

              </Col>
              <Col lg="6" md="12">
                <div
                  className="search__box"
                  style={{ marginLeft: "49rem", marginTop: "-2rem" }}
                >
                  <input
                    type="text"
                    placeholder="Search Title..."
                    onChange={handleSearch}
                  />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pt-0" style={{ marginTop: "2rem" }}>
          <Container>
            <Row>
              {productsData.length === 0 ? (
                <h1 className="text-center fs-4">No products found!</h1>
              ) : (
                <ProductsList data={productsData} />
              )}
            </Row>
          </Container>
        </section>
      </div>
    </Helmet>
  );
};

export default Shop;

// import React, { useState } from "react";
// import { Container, Row, Col } from "reactstrap";
// import CommonSection from "../components/UI/CommonSection";
// import Helmet from "../components/Helmet/Helmet";
// import products from "../assets/data/products";
// import "../styles/shop.css";
// import ProductsList from "../components/UI/ProductsList";

// const Shop = () => {
//   const [productsData, setProductsData] = useState(products);

//   const handleFilter = (e) => {
//     const filterValue = e.target.value;
//     if (filterValue === "console") {
//       const filteredProducts = products.filter(
//         (item) => item.category === "console"
//       );

//       setProductsData(filteredProducts);
//     }

//     if (filterValue === "mobile") {
//       const filteredProducts = products.filter(
//         (item) => item.category === "mobile"
//       );

//       setProductsData(filteredProducts);
//     }

//     if (filterValue === "computer") {
//       const filteredProducts = products.filter(
//         (item) => item.category === "computer"
//       );

//       setProductsData(filteredProducts);
//     }

//     if (filterValue === "watch") {
//       const filteredProducts = products.filter(
//         (item) => item.category === "watch"
//       );

//       setProductsData(filteredProducts);
//     }

//     if (filterValue === "wireless") {
//       const filteredProducts = products.filter(
//         (item) => item.category === "wireless"
//       );

//       setProductsData(filteredProducts);
//     }
//   };

//   const handleSearch = (e) => {
//     const searchTerm = e.target.value;

//     const searchedProducts = products.filter((item) =>
//       item.productName.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setProductsData(searchedProducts);
//   };

//   return (
//     <Helmet title="Shop">
//       <CommonSection title="Products" />

//       <section>
//         <Container>
//           <Row>
//             <Col lg="3" md="6">
//               <div className="filter__widget">
//                 <select onChange={handleFilter}>
//                   <option>Filter By Category</option>
//                   <option value="console">Console</option>
//                   <option value="mobile">Mobile</option>
//                   <option value="computer">Computers</option>
//                   <option value="watch">Watch</option>
//                   <option value="wireless">Wireless</option>
//                 </select>
//               </div>
//             </Col>
//             <Col lg="3" md="6" className="text-end">
//               <div className="filter__widget">
//                 <select>
//                   <option>Sort By</option>
//                   <option value="ascending">Ascending</option>
//                   <option value="descending">Descending</option>
//                 </select>
//               </div>
//             </Col>
//             <Col lg="6" md="12">
//               <div className="search__box">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   onChange={handleSearch}
//                 />
//                 <span>
//                   <i className="ri-search-line"></i>
//                 </span>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="pt-0">
//         <Container>
//           <Row>
//             {productsData.length === 0 ? (
//               <h1 className="text-center fs-4">No products found!</h1>
//             ) : (
//               <ProductsList data={productsData} />
//             )}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Shop;
