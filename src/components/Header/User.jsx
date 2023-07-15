import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";
import logo from "../../assets/images/user-icon.png";
import { useNavigate } from "react-router-dom";
import "./header.css";

const User = () => {
  const [profile, setProfile] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();

  const getProfile = () => {
    axiosInstance(`api/userProfile/`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setProfile(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div className="profile" style={{ marginRight: "1rem" }}>
        {profile ? (
          <div style={{ position: "relative" }}>
            {/* <img
              src={profile.profile.avatar}
              alt=""
              onClick={() => {
                setProfileOpen(!profileOpen);
              }}
              style={{
                position: "absolute",
                top: "-1.5rem",
                right: "-1rem",
                width: "3rem",
                height: "3rem",
              }}
            /> */}

        { profile.profile.avatar == null ? 
            <img
              src={logo}
              alt=""
              onClick={() => {
                setProfileOpen(!profileOpen);
              }}
              style={{
                position: "absolute",
                top: "-1.5rem",
                right: "-1rem",
                width: "3rem",
                height: "3rem",
              }}
            />  :
            <img
              src={profile.profile.avatar}
              alt=""
              onClick={() => {
                setProfileOpen(!profileOpen);
              }}
              style={{
                position: "absolute",
                top: "-1.5rem",
                right: "-1rem",
                width: "3rem",
                height: "3rem",
              }}
          /> }

            {profileOpen && (
              <div
                className="openProfile boxItems"
                onClick={() => {
                  setProfileOpen(false);
                }}
              >
                <div
                  className="image"
                  style={{ height: "3.5rem", marginLeft: "0.5rem" }}
                >
                  <div className="img">
                    {
                      profile.profile.avatar == null ? <img src={logo} alt="" /> :<img src={profile.profile.avatar} alt="" />
                    }
                    {/* <img src={profile.profile.avatar} alt="" /> */}
                  </div>
                  <div className="text">
                    <h4
                      style={{
                        textTransform: "capitalize",
                        marginLeft: "2rem",
                        marginTop: "1rem",
                      }}
                    >
                      {profile.profile.name}
                    </h4>
                    <h4 style={{ marginLeft: "2rem", marginTop: "0.25rem" }}>
                      @{profile.username}
                    </h4>
                  </div>
                </div>

                <hr style={{ marginBottom: "1.5rem" }}></hr>

                <Link to="/account" state={{ profile: profile }}>
                  <button className="box">
                    <IoSettingsOutline className="icon" />
                    <h4>My Account</h4>
                  </button>
                </Link>

                <Link to="/logout">
                  <button className="box">
                    <BiLogOut className="icon" />
                    <h4>Log Out</h4>
                  </button>
                </Link>

                <div style={{ marginTop: "0.5rem" }}></div>
              </div>
            )}
          </div>
        ) : (
          <img
            src={logo}
            alt=""
            onClick={() => {
              navigate("/login");
            }}
            style={{
              position: "absolute",
              top: "-1.5rem",
              right: "-1rem",
              width: "3rem",
              height: "3rem",
            }}
          />
        )}
      </div>
    </>
  );
};

export default User;
