import { useState } from "react";
import axiosInstance from "../../axios";
import CommonSection from "../../components/UI/CommonSection";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      password: password,
    };

    await axiosInstance
      .post(
        `api/register/`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        localStorage.clear();
        console.log("Registration successful", res);
        alert("Success");
        window.location.href = "/login";
      })
      .catch((e) => {
        console.log("Error");
        alert("Error", e);
        return Promise.reject(e);
      });
  };

  return (
    <>
      <CommonSection title={"Register"} />
      <div className="Auth-form-container" style={{display:"flex", justifyContent:"center", backgroundColor:"whitesmoke"}}>
        <form className="Auth-form" onSubmit={submit} style={{padding:"2rem", backgroundColor:"#e4e4e4", margin:"2rem 0rem", borderRadius:"1rem"}}>
          <div className="Auth-form-content" style={{ marginBottom: "0.2rem", color:"black", fontWeight:"bold" }}>
            <div className="form-group mt-3">
              <label>Username:</label>
              <input
                className="form-control mt-1"
                placeholder="Enter Username"
                name="Username"
                type="username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                style={{width:"25rem"}}
              />
            </div>
            <div className="form-group mt-4" style={{ marginBottom: "0.2rem" }}>
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
                  padding: "0.5rem",
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

export default Register;
