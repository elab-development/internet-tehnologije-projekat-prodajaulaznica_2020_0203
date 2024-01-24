import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/rectangle.png";
import "./navbar.css";
import { useCookies } from "react-cookie";

function Navbar() {
  const [cookie, setCookie, removeCookie] = useCookies(["login"]);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className={`nav ${isOpen ? "open" : ""}`}>
      <div>
        {cookie.admin !== undefined || cookie.user !== undefined ? (
          <button
            className="button"
            onClick={() => {
              removeCookie("admin");
              removeCookie("user");
              navigate("/login");
            }}
          >
            Log out
          </button>
        ) : (
          <button
            className="button"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
