import React from "react";
import { Route, Routes, NavLink as Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Logout from "./Logout";
import HomePage from "./HomePage";
import { isLoggedIn } from "../helper.js";
import Community from "./Community";
import Shops from "./Shops";
import Shop from "./ShopDetails";
import CommunityDetails from "./CommunityDetails";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md m-1 rounded navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            🎉 VendorVortex
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#vision">
                  Vision
                </a>
              </li>
              <Link className="nav-link" to={`/communities`}>
                Communities
              </Link>
              <Link className="nav-link" to={`/shops`}>
                Shops
              </Link>
              <li className="nav-item">
                {!isLoggedIn() ? (
                  <></>
                ) : (
                  <>
                    <div className="d-flex justify-contenct-center align-items center flex-row">
                      <Link
                        className="nav-link"
                        to={`/profile/${localStorage.getItem("_id")}`}
                      >
                        Profile
                      </Link>
                    </div>
                  </>
                )}
              </li>
            </ul>

            {!isLoggedIn() ? (
              <>
                <Link className="btn btn-outline-primary me-2" to="/login">
                  Login
                </Link>
                <Link className="btn btn-outline-success me-2" to="/signup">
                  Signup
                </Link>
              </>
            ) : (
              <>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
                <Link className="btn btn-outline-info me-2" to="/logout">
                  Logout
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/profile/:id" element={<Profile />}></Route>
        <Route exact path="/communities" element={<Community />}></Route>
        <Route exact path="/shops" element={<Shops />}></Route>
        <Route exact path="/logout" element={<Logout />}></Route>
        <Route exact path="/shop/:id" element={<Shop />}></Route>
        <Route
          exact
          path="/community/:id"
          element={<CommunityDetails />}
        ></Route>
      </Routes>
    </>
  );
};

export default Navbar;
