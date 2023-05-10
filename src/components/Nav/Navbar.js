import React, {useEffect, useRef, useState} from "react";
import "./Navbar.css";
import {Link, NavLink} from "react-router-dom";
import {pages} from "../../App";
import Logo from "../Logo/Logo";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [navbarOpen]);
  const colors = ["pink", "lightblue", "green", "orange"];
  return (
    <header>
      <Link to="/home" className="nav-logo">
        <Logo />
      </Link>
      <nav ref={ref} className="navbar">
        <button
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          {navbarOpen ? "close menu" : "open menu"}
        </button>
        <ul className={`menu-nav${navbarOpen ? " show-menu" : ""}`}>
          {pages.map((page, index) => (
            <li key={index} className="navlink-li">
              <NavLink
                onClick={() => setNavbarOpen(false)}
                to={page.to}
                className={({isActive}) =>
                  isActive
                    ? "navlink navlink--active"
                    : "navlink navlink--not-active"
                }
                style={{
                  "--currColor": `var(--colors-${colors[index]})`,
                }}
              >
                {page.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
