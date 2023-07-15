import React, { useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import "./header.css";
import logo from "../../assets/images/eco-logo.png";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import User from "./User";

const nav__links = [
  {
    path: "",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
  {
    path: "about",
    display: "About-Us",
  },
];

const Header = () => {
  const token = localStorage.getItem("access_token");
  // const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  // const stidkyHeaderFunc = () => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("sticky__header");
  //     } else {
  //       headerRef.current.classList.remove("sticky__header");
  //     }
  //   });
  // };

  // const logout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       toast.success("Logged out");
  //       navigate("/home");
  //     })
  //     .catch((err) => {
  //       toast.error(err.message);
  //     });
  // };

  // useEffect(() => {
  //   stidkyHeaderFunc();

  //   return () => window.removeEventListener("scroll", stidkyHeaderFunc);
  // });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  // const navigateToLogin = () => {
  //   navigate("/login");
  // };

  return (
    <header className="header">
      <Container style={{ maxWidth: "100%" }}>
        <Row>
          <div className="nav__wrapper">
            <Link to={"/"} style={{ marginLeft: "2rem" }}>
              <div className="logo">
                <img src={logo} alt="logo" style={{marginBottom:"0.4rem"}}/>
                <div>
                  <h1>Unicorn Store</h1>
                </div>
              </div>
            </Link>

            <div className="navigation" ref={menuRef} onClick={menuToggle} style={{marginTop:"-0.25rem"}}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons" style={{ marginRight: "1rem" }}>
              <span
                className="cart__icon"
                onClick={navigateToCart}
                style={{ marginRight: "1.25rem" }}
              >
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              {/* <div className="profile">
                <span className="user-email">
                  <p>
                    {currentUser ? (
                      currentUser.email
                    ) : (
                      <img onClick={navigateToLogin} src={userIcon} alt="" />
                    )}
                  </p>
                </span>
              </div> */}
              {/* <div className="nav__icons">
                {currentUser ? (
                  <span className="cart__icon" onClick={logout}>
                    <i class="ri-logout-box-line"></i>
                  </span>
                ) : (
                  ""
                )}
              </div> */}
              {/* <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div> */}
              <div className="account flexCenter">
                {/* <Link to="/createPost">
              <img
                src={logo1}
                alt=""
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
            </Link> */}

                {token ? (
                  <User />
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="login_header"
                      style={{
                        color: "white",
                        fontWeight: "500",
                        fontSize: "1rem",
                        marginRight: "1rem",
                        backgroundColor: "#72a1ab",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "0.75rem",
                      }}
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="login_header"
                      style={{
                        color: "white",
                        fontWeight: "500",
                        fontSize: "1rem",
                        marginRight: "-1rem",
                        backgroundColor: "#72a1ab",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "0.75rem",
                      }}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
