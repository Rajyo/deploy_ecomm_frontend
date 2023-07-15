import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import About from "../pages/About";
import Success from "../pages/Success";
import CategoryDetails from "../pages/CategoryDetails";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Regsiter";
import Logout from "../pages/Logout";
import Account from "../pages/account/Account";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import CheckoutForm from "../pages/CheckoutForm.jsx";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PROMISE);

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path="/category/:id" element={<CategoryDetails />} />

      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/checkoutForm"
          element={
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          }
        />
      </Route>

      {/* <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements> */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default Routers;
