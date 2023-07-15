import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import ApiService from "../../api";
import "./checkout.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { revertAll } from "../../redux/slices/cartSlice";
import logo from "../../assets/images/loading-58.gif";

const CheckoutForm = ({
  total,
  name,
  line1,
  line2,
  postalCode,
  city,
  state,
  country,
}) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false)

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  var authUrl;
  let win;

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount).toFixed(2);

  // console.log(loadGif);

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    const card = elements.getElement(CardElement);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
    console.log(paymentMethod);

    if (error) {
      setError(error.response.data);
    } else {
      ApiService.saveStripeInfo({
        email,
        description,
        amount: total,
        name,
        line1,
        line2,
        postal_code: postalCode,
        city,
        state,
        country,
        payment_method_id: paymentMethod.id,
      })
        .then((response) => {
          console.log(response.data);
          console.log(response.data.data.payment_url);
          authUrl = response.data.data.payment_url;

          const screenWidth = window.screen.width;
          const screenHeight = window.screen.height;
          win = window.open(
            authUrl,
            "Auth",
            "width=screenWidth,height=screenHeight"
          );

          var timer = setInterval(function () {
            try {
              if (win.closed) {
                clearInterval(timer);
                navigate("/success", {
                  state: {
                    success: response.data,
                    cartItems: cartItems,
                    totalAmount: totalAmount,
                  },
                });
              }
            } catch (error) {
                console.log("Allow Pop up")
                clearInterval(timer);
                navigate("/success", {
                  state: {
                    success: response.data,
                    cartItems: cartItems,
                    totalAmount: totalAmount,
                  },
                });
            }
          }, 1000);
          dispatch(revertAll());
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // const url1 = Object.values(paymentUrl.data);
  // console.log(url1);
  // const myVar = "payment_url";

  return (
    <div
      style={{
        // border: "1px solid green",
        marginTop: "0rem",
        padding: "1rem",
        backgroundColor: "#d8c0af",
        color: "black",
        borderRadius: "0.5rem",
        marginRight: "-3rem",
        marginLeft: "1rem",
      }}
    >
      <form onSubmit={handleSubmit} className="stripe-form">
        <div
          className="form-row"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="email">Email Address</label>
          <input
            className="form-input"
            id="email"
            name="name"
            type="email"
            placeholder="jenny.rosen@example.com"
            bsSize="sm"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div
          className="form-row"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="text">Description</label>
          <input
            type="textarea"
            id="description"
            name="description"
            placeholder="Description"
            required
            value={description}
            maxLength="50"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div className="form-row" style={{ marginTop: "1.5rem" }}>
          <label htmlFor="card-element">Credit or debit card</label>

          <CardElement id="card-element" onChange={handleChange} />
          <div className="card-errors" role="alert">
            {error}
          </div>
        </div>

        <button
          type="submit"
          className="submit-btn"
          style={{
            width: "100%",
            backgroundColor: "white",
            color: "black",
            marginTop: "1rem",
            borderRadius:"0.7rem"
          }}
          //  onClick={()=>
          //   alert("Allow Pop-up on Browser to complete the Payment Process")
          // }
        >{
          loading ? <img src={logo} alt="Loading..." style={{width:"3rem", height:"3rem", margin:"-0.5rem 0rem"}}/> : <h6 style={{padding:"0.35rem 0rem", backgroundColor:"#1d7211", color:"white", borderRadius:"0.5rem"}}>Confirm Payment</h6>
        }
        </button>

        {/* <button
          type="button"
          class="button"
          style={{
            width: "100%",
            backgroundColor: "#1d7211",
            color: "white",
            marginTop: "1rem",
          }}
          onClick="this.classList.toggle('button--loading')"
        >
          <span class="button__text">Confirm Payment</span>
        </button> */}
      </form>
    </div>
  );
};
export default CheckoutForm;

// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import React, { useState } from "react";
// import ApiService from "../api";
// import "../styles/checkout.css";

// const Popup = (props) => {
//   return (
//     <div className="popup-box">
//       <div className="box">
//         <span className="close-icon" onClick={props.handleClose}>
//           x
//         </span>
//         {props.content}
//       </div>
//     </div>
//   );
// };

// const CheckoutForm = () => {
//   const [error, setError] = useState(null);
//   const [email, setEmail] = useState("");
//   const [paymentUrl, setPaymentUrl] = useState("");
//   const stripe = useStripe();
//   const elements = useElements();

// const [isOpen, setIsOpen] = useState(false);

// const togglePopup = () => {
//   setIsOpen(!isOpen);
// };

//   // Handle real-time validation errors from the card Element.
//   const handleChange = (event) => {
//     if (event.error) {
//       setError(event.error.message);
//     } else {
//       setError(null);
//     }
//   };

//   // Handle form submission.
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const card = elements.getElement(CardElement);

//     const { paymentMethod, error } = await stripe.createPaymentMethod({
//       type: "card",
//       card: card,
//     });
//     console.log(paymentMethod);

//     if (error) {
//       setError(error.response.data);
//     } else {
//       ApiService.saveStripeInfo({ email, payment_method_id: paymentMethod.id })
//         .then((response) => {
//           console.log(response.data);
//           setPaymentUrl(response.data);
//           console.log(paymentUrl.data["payment_url"]);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   };

//   // const url1 = Object.values(paymentUrl.data);
//   // console.log(url1);
//   // const myVar = "payment_url";

//   return (
//     <div
//       style={{
//         // border: "1px solid green",
//         marginTop: "1rem",
//         padding: "1rem",
//         backgroundColor: "#d8c0af",
//         color: "black",
//         borderRadius: "0.5rem",
//         marginRight: "-3rem",
//         marginLeft: "1rem",
//       }}
//     >
//       <form onSubmit={handleSubmit} className="stripe-form">
//         <div
//           className="form-row"
//           style={{ display: "flex", flexDirection: "column" }}
//         >
//           <label htmlFor="email">Email Address</label>
//           <input
//             className="form-input"
//             id="email"
//             name="name"
//             type="email"
//             placeholder="jenny.rosen@example.com"
//             required
//             value={email}
//             onChange={(event) => {
//               setEmail(event.target.value);
//             }}
//           />
//         </div>
//         <div className="form-row">
//           <label htmlFor="card-element">Credit or debit card</label>

//           <CardElement id="card-element" onChange={handleChange} />
//           <div className="card-errors" role="alert">
//             {error}
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="submit-btn"
//           style={{ width: "100%", backgroundColor: "#1d7211", color: "white" }}
//         >
//           Confirm Payment
//         </button>
//       </form>
// <div>
//     <input
//       type="button"
//       value="Checkout"
//       onClick={togglePopup}
//       style={{
//         padding: "0.3rem 8rem",
//         marginTop: "3rem",
//         marginLeft: "1rem",
//         fontWeight: "bold",
//         color: "black",
//         backgroundColor: "beige",
//         borderRadius: "1rem",
//       }}
//     />

//     {isOpen && (
//       <Popup
//         content={
//           <div>
//             <p className="fs-4 text-center payment">
//               Payment Details
//             </p>
//             <p className="fs-6 mt-2 text-center">
//               Amount: <span>${totalAmount}</span>
//             </p>
//             <p className="fs-6 mt-2 text-center">Account Name:</p>
//             <p className="fs-6 mt-2 text-center">BSB: 0137111</p>
//             <p className="fs-6 mt-2 text-center">
//               Account Number: 436860319
//             </p>
//             <p className="fs-6 mt-2 text-center">
//               Bank Name: Anz
//             </p>
//             <button className="chk_btn">
//               <Link to="/success">
//                 Click to confirm payment with seller
//               </Link>
//             </button>
//           </div>
//         }
//         handleClose={togglePopup}
//       />
//     )}
//   </div>
//     </div>
//   );
// };
// export default CheckoutForm;
