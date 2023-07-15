import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import CheckoutForm from "../pages/CheckoutForm.jsx";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PROMISE);

const Checkout = () => {
  const [name, setName] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const taxes = 49.99;
  const shipping = 99.99;
  var total = 0;

  function round(num, decimalPlaces = 0) {
    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces);
  }

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />

      <section className="bg_c">
        <Container>
          <Row>
            <Col
              lg="3"
              style={{
                marginLeft: "-3rem",
                marginTop: "0.5rem",
              }}
            >
              <h6 className="mb-4 fw-bold billing" style={{ color: "black" }}>
                Price Summary
              </h6>
              <div
                className="checkout__cart"
                style={{
                  // border: "1px solid yellow",
                  padding: "1rem",
                  backgroundColor: "#d8c0af",
                  color: "black",
                  borderRadius: "0.5rem",
                }}
              >
                <h7>
                  Total Qty: <span>{totalQty} items</span>
                </h7>
                <h7>
                  Subtotal: <span>INR {totalAmount}</span>
                </h7>
                <h7>
                  Taxes: <br />
                  <span>INR {totalQty && taxes}</span>
                </h7>
                <h7>
                  Shipping: <br />
                  <span>INR {totalQty && shipping}</span>
                </h7>
                <hr style={{ border: "2px solid black" }} />
                <div style={{ display: "none" }}>
                  {totalQty
                    ? (total = totalAmount + shipping + taxes)
                    : (total = totalAmount)}
                </div>
                <h5>
                  Total: <span>INR {round(total)}</span>
                </h5>
              </div>
            </Col>
            <Col lg="5" style={{ marginLeft: "5rem" }}>
              <h6
                className="mb-4 fw-bold billing"
                style={{
                  color: "black",
                  marginTop: "0.5rem",
                }}
              >
                Billing Information
              </h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    maxLength="20"
                    required
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Street"
                    name="line 1"
                    value={line1}
                    maxLength="20"
                    required
                    onChange={(event) => {
                      setLine1(event.target.value);
                    }}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Landmark"
                    name="line 2"
                    value={line2}
                    maxLength="20"
                    required
                    onChange={(event) => {
                      setLine2(event.target.value);
                    }}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    name="postal_code"
                    value={postalCode}
                    maxLength="6"
                    required
                    onChange={(event) => {
                      setPostalCode(event.target.value);
                    }}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={city}
                    maxLength="20"
                    required
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="State"
                    name="state"
                    value={state}
                    maxLength="20"
                    required
                    onChange={(event) => {
                      setState(event.target.value);
                    }}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={country}
                    maxLength="20"
                    required
                    onChange={(event) => {
                      setCountry(event.target.value);
                    }}
                  />
                </FormGroup>
              </Form>
            </Col>

            <Col
              lg="3"
              style={{
                marginLeft: "4rem",
                marginTop: "0.5rem",
              }}
            >
              <h6
                className="mb-4 fw-bold billing"
                style={{
                  color: "black",
                  marginLeft: "1rem",
                }}
              >
                Payment
              </h6>
              <div>
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    total={round(total)}
                    name={name}
                    line1={line1}
                    line2={line2}
                    postalCode={postalCode}
                    city={city}
                    state={state}
                    country={country}
                  />
                </Elements>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
