import { useState } from "react";
import axiosInstance from "../../axios";
import CommonSection from "../../components/UI/CommonSection";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    const { data } = await axiosInstance.post(
      `api/login/`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      { withCredentials: true }
    );

    localStorage.clear();
    localStorage.setItem("access_token", data.tokens.access);
    localStorage.setItem("refresh_token", data.tokens.refresh);
    axiosInstance.defaults.headers["Authorization"] =
      "JWT " + localStorage.getItem("access_token"); //pass authorization token to all cors origin
    console.log("Login successful", data);
    window.location.href = "/"; //opens tab in the same browser unlike window.open() which will open tab in a new browser
  };

  return (
    <>
      <CommonSection title={"Login"} />
      <div className="Auth-form-container" style={{display:"flex", justifyContent:"center", backgroundColor:"whitesmoke"}}>
        <form className="Auth-form" onSubmit={submit} style={{padding:"2rem", backgroundColor:"#e4e4e4", margin:"2rem 0rem", borderRadius:"1rem"}}>
          <div className="Auth-form-content" style={{ marginBottom: "0.2rem", color:"black", fontWeight:"bold" }}>
            <div className="form-group mt-3">
              <label>Email:</label>
              <input
                className="form-control mt-1"
                placeholder="Enter Email"
                name="Email"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                style={{width:"25rem"}}
              />
            </div>
            <div className="form-group mt-4">
              <label>Password:</label>
              <input
                name="password"
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                style={{width:"25rem"}}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                style={{
                  color: "white",
                  fontSize: "medium",
                  backgroundColor: "black",
                  width: "100% ",
                  padding: "0.25rem",
                  borderRadius: "0.5rem",
                  marginTop: "2rem",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Container, Row, Col, Form, FormGroup } from "reactstrap";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase.config";
// import { toast } from "react-toastify";
// import Helmet from "../components/Helmet/Helmet";
// import "../styles/login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const signIn = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       const user = userCredential.user;

//       console.log(user);
//       setLoading(false);
//       toast.success("Successfully logged in");
//       navigate("/checkout");
//     } catch (error) {
//       setLoading(false);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <Helmet title="Login">
//       <section>
//         <Container>
//           <Row>
//             {loading ? (
//               <Col className="text-center">
//                 <h5 className="fw-bold">Loading...</h5>
//               </Col>
//             ) : (
//               <Col lg="6" className="m-auto text-center">
//                 <h3 className="fw-bold mb-4">Login</h3>

//                 <Form className="auth__form" onSubmit={signIn}>
//                   <FormGroup className="form__group">
//                     <input
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </FormGroup>
//                   <FormGroup className="form__group">
//                     <input
//                       type="password"
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </FormGroup>

//                   <button type="submit" className="buy__btn auth__btn">
//                     Login
//                   </button>
//                   <p>
//                     Don't have an account{" "}
//                     <Link to="/signup">Create an account</Link>
//                   </p>
//                 </Form>
//               </Col>
//             )}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Login;
