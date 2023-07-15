import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import logo1 from "../../assets/images/hero-1.jpg.webp";
import logo2 from "../../assets/images/hero-2.jpg.webp";
import { Link } from "react-router-dom";
// import logo1 from "../../assets/images/Summer Collection.png";
// import logo2 from "../../assets/images/Winter collection.png";

const homeCarouselData = [
  {
    image: logo1,
  },
  {
    image: logo2,
  },
];
const handleDragStart = (e) => e.preventDefault();
const Banner = () => {
  const item = homeCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      src={item.image}
      alt=""
      onDragStart={handleDragStart}
      role="presentation"
    />
  ));
  return (
    <>
      <div style={{ position: "relative" }}>
        <AliceCarousel
          mouseTracking
          items={item}
          autoPlay
          infinite
          autoPlayInterval={3000}
          disableButtonsControls
        />

        <h5
          style={{
            color: "red",
            margin: "2rem 0px",
            position: "absolute",
            top: "10rem",
            left: "14rem",
          }}
        >
          Winter Collection
        </h5>
        <h1
          style={{
            color: "black",
            margin: "0px 5rem",
            fontWeight: "bold",
            position: "absolute",
            top: "15rem",
            left: "5.5rem",
            // border: "1px solid black",
            width: "18rem",
            height: "6rem",
            textAlign: "center",
            fontSize: "2.1rem",
          }}
        >
          Fall - Winter Collections 2023
        </h1>
        <h6
          style={{
            position: "absolute",
            top: "22rem",
            left: "3rem",
            // border: "1px solid black",
            width: "35rem",
            height: "4rem",
            textAlign: "center",
            fontSize: "1.1rem",
          }}
        >
          A specialist label creating luxury essentials. Ethically crafted with
          an unwavering commitment to exceptional quality.
        </h6>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "0.6rem 1.25rem",
            borderRadius: "2rem",
            marginTop: "1rem",
            position: "absolute",
            top: "26rem",
            left: "15rem",
          }}
        >
          <Link to="/shop">Shop Now</Link>
        </button>
      </div>
    </>
  );
};
export default Banner;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./category.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { GrFormPrevious } from "react-icons/gr";
// import { MdNavigateNext } from "react-icons/md";
// import { Link } from "react-router-dom";

// const SampleNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className="control-btn" onClick={onClick}>
//       <button className="next">
//         <MdNavigateNext className="icon" />
//       </button>
//     </div>
//   );
// };
// const SamplePrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className="control-btn" onClick={onClick}>
//       <button className="prev">
//         <GrFormPrevious className="icon" />
//       </button>
//     </div>
//   );
// };
// const Category = () => {
//   const [category, setCategory] = useState([]);

//   const baseURL = "https://fakestoreapi.com/products/categories";

//   useEffect(() => {
//     getCategory();
//   }, []);

//   const getCategory = async () => {
//     try {
//       await axios.get(baseURL).then((res) => {
//         setCategory(res.data);
//         console.log(res);
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <section className="category">
//         <div className="content">
//           <Slider {...settings}>
//             {category.map((item) => (
//               <div className="boxs">
//                 <div className="box" key={item.id}>
//                   <img src={item.cover} alt="cover" />
//                   <div className="overlay">
//                     <Link to={`/category/${item.id}`}>
//                       <h4>{item.category}</h4>
//                     </Link>
//                     <p>{item.title}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>
//     </>
//   );
// };
// export default Category;
