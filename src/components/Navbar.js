import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import Auth Context
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth(); // Get auth state and logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout function
    navigate("/signup"); // Redirect to Signup page
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1>
        <span>SMT</span>
        <span>Kart</span>
      </h1>
      <div className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/men" onClick={toggleMobileMenu}>
              Men
            </Link>
          </li>
          <li>
            <Link to="/women" onClick={toggleMobileMenu}>
              Women
            </Link>
          </li>
          <li>
            <Link to="/kids" onClick={toggleMobileMenu}>
              Kids
            </Link>
          </li>
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/signup" onClick={toggleMobileMenu}>
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={toggleMobileMenu}>
                  Login
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                LogOut
              </button>
            </li>
          )}
        </ul>
      </div>
      <button
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
