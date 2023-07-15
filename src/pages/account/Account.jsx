import React, { useState } from "react";
import image from "../../assets/images/user-icon.png";
import "./account.css";
import { useLocation } from "react-router";

const Account = () => {
  const location = useLocation();
  console.log(location);

  // const [username, setUsername] = useState(location.state.profile.username);
  // const [email, setEmail] = useState(location.state.profile.email);
  const [name, setName] = useState(location.state.profile.profile.name);
  const [bio, setBio] = useState(location.state.profile.profile.bio);
  const [address, setAddress] = useState(
    location.state.profile.profile.address
  );

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "rgba(169, 112, 23, 0.82)",
          color: "white",
          padding: "10px",
        }}
      >
        Account (This Page is still in Development Phase)
      </h1>
      <section className="accountInfo">
        <div className="container boxItems">
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <img
                  src={location.state.profile.profile.avatar}
                  alt="image1"
                  class="image-preview"
                  style={{ width: "13rem", height: "13rem" }}
                />
                <button
                  style={{
                    marginTop: "15rem",
                    marginLeft: "3rem",
                    color: "blue",
                    fontSize: "1rem",
                  }}
                  onClick={() => (
                    <input type="file" accept="image/*" src={image} alt="img" />
                  )}
                >
                  Change Photo
                </button>
              </div>
            </div>
            <div className="right">
              {/* <label htmlFor="">Username:</label>
              <input type="text" placeholder={username} />

              <label htmlFor="">Email:</label>
              <input type="email" placeholder={email} /> */}

              <label htmlFor="">Name:</label>
              <input
                type="text"
                placeholder={name}
                style={{ marginBottom: "0rem" }}
              />

              <label htmlFor="">Bio:</label>
              <textarea type="text" placeholder={bio} />

              <label htmlFor="">Address:</label>
              <textarea type="text" placeholder={address} />

              <button className="button" style={{ marginTop: "2rem" }} onClick={()=> alert("This Page is still in Development Phase")}>
                Update
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;
