import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./success.css";
import CommonSection from "../../components/UI/CommonSection";

const Success = () => {
  const location = useLocation();
  function stopBack() {
    window.history.go(1);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onload = stopBack();
  });

  const customer = location.state.success.data.customer;
  const payment = location.state.success.data.payment;
  const cartItems = location.state.cartItems;
  const totalAmount = location.state.totalAmount;
  console.log("customer", customer);
  console.log("payment", payment);
  console.log("cart_items", cartItems);
  const taxes = 49.99;
  const shipping = 99.99;

  const date = new Date();
  const currentDay = String(date.getDate()).padStart(2, "0");
  const currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  const currentYear = date.getFullYear();
  const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

  return (
    <>
      <CommonSection title="Order Summary" />
      <div className="success-wrapper">
        <div
          className="success"
          style={{ backgroundColor: "rgb(234, 232, 232)" }}
        >
          <h4 style={{ marginBottom: "2rem", textAlign: "center" }}>
            Thank you for your order!
          </h4>

          <div>
            <div className="details_section">
              <div className="div_sec" style={{ maxWidth: "35rem" }}>
                <table>
                  <tr>
                    <th>
                      <h5>Payment Details</h5>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <h6>Stripe Invoice Id</h6>
                    </td>
                    <td>{customer.invoice_prefix}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Stripe Payment Id</h6>
                    </td>
                    <td>{payment.id}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Payment Method</h6>
                    </td>
                    <td>{payment.payment_method_types[0]}</td>
                  </tr>
                </table>
                <div></div>
              </div>

              <div className="div_sec" style={{ width: "16rem" }}>
                <h5>Billing Details</h5>
                <div className="billing_sec" style={{ marginTop: "2.5rem" }}>
                  <h6>
                    {customer.address.line1} {""}
                    {customer.address.line2},
                  </h6>
                  <h6>{customer.address.city},</h6>
                  <h6>{customer.address.state},</h6>
                  <h6>{customer.address.country}.</h6>
                  <h6>{customer.address.postal_code}.</h6>
                </div>
              </div>

              <div className="div_sec" style={{ maxWidthidth: "35rem" }}>
                <table>
                  <tr>
                    <th>
                      <h5>Customer Details</h5>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <h6>Name</h6>
                    </td>
                    <td>{customer.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Email</h6>
                    </td>
                    <td>{customer.email}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Stripe Customer Id</h6>
                    </td>
                    <td>{customer.id}</td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="cart_section">
              <div className="items_section">
                <h4 style={{ fontWeight: "bold", marginBottom: "3rem" }}>
                  Ordered Items
                </h4>
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Qty</th>
                      <th>Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="misc_section">
                <div className="data_section">
                  <h6 style={{ margin: "1rem" }}>Date: {currentDate}</h6>
                  <h6 style={{ margin: "1rem" }}>
                    Live Mode: false
                  </h6>
                </div>
                <div
                  className="total_section"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "-1.5rem",
                    marginRight: "2.4rem",
                    width: "17rem",
                    // border: "1px solid red",
                    fontSize: "0.95rem",
                  }}
                >
                  <table className="amount_table">
                    <tr>
                      <td>
                        <h7>Subtotal:</h7>
                      </td>
                      <td>INR {totalAmount}</td>
                    </tr>
                    <tr>
                      <td>
                        <h7>Taxes:</h7>
                      </td>
                      <td>INR {taxes}</td>
                    </tr>
                    <tr>
                      <td>
                        <h7>Shipping:</h7>
                      </td>
                      <td>INR {shipping}</td>
                    </tr>
                    <tr>
                      <td>
                        <h4 style={{ fontWeight: "bold", marginTop:"1rem" }}>Total:</h4>
                      </td>
                      <td>
                        <h4 style={{ fontWeight: "bold" , marginTop:"1rem"}}>
                          INR {payment.amount / 100}
                        </h4>
                      </td>
                    </tr>
                  </table>
                  {/* <h7>Subtotal: {totalAmount}</h7>
                  <h7>Taxes: 49.99</h7>
                  <h7>Shipping: 99.99</h7>
                  <h5 style={{ fontWeight: "bold" }}>
                    Total: {totalAmount + 99.99 + 49.99}
                  </h5> */}
                </div>
              </div>
            </div>
          </div>

          <Link to="/" replace={true}>
            <button type="button" className="suc_btn">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

const Tr = ({ item }) => {
  return (
    <tr>
      <td className="td">
        <img src={item.image} alt="" />
      </td>
      <td>{item.title}</td>
      <td>{item.quantity}px</td>
      <td>INR {item.price}</td>
    </tr>
  );
};

export default Success;
