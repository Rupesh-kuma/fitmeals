import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Login/authContext";
function Nav() {
    const { isAuthenticated, logout} = useAuth();
    console.log(localStorage.username);
  return (
    <div className="container ">
    <nav className="navbar navbar-expand-lg navbar-light bg-light fix px-5 py-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="../image/logo-black.png" alt="logo"  title="Home" className="w-50"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                <b>Home</b>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>Meal Plans</b>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/meal_plans">
                    <b>Weight Loss Meal Plans</b>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/maintenace_meal_plans">
                    <b>Maintenance Meal Plans</b>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Athletic">
                    <b>Athletic Meal Plans</b>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Keto">
                    <b>Keto Meal Plans</b>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Transformation">
                    <b>Transformation Challenge</b>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health_coaching">
                <b>Health coaching</b>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/products"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>Producats</b>
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/vegan_sweets">
                    <b>Vegan sweets</b>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/low_cal_sauces">
                    <b>Low-Cal sauces</b>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/nut_butters">
                    <b>Nut Butters</b>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/fresh_bakes">
                    <b>Fresh Bakes</b>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                <b>Blog</b>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>About Us</b>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/About">
                    <b>Our story</b>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Faq">
                    <b>FAQ</b>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Testimonials">
                    <b>Testimonials</b>
                  </Link>
                </li>
                
              </ul>
            </li>
          </ul>
          <button className="btn btn-danger text-light rounded-pill px-3 py-2"><b className="fs-6">call: 9100347480</b></button>
        </div>
      </div>
    </nav>
    </div>
  );
}
export default Nav;
