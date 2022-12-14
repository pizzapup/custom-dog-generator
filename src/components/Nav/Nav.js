import { Link, NavLink } from "react-router-dom";
import { pages } from "../../App";
import Logo from "../Logo/Logo";
import "./Nav.css";

export function Nav() {
  return (
    <>
      <header>
        <Link to="/home" className="logo-link-wrapper">
          <Logo />
        </Link>
        <nav>
          <input
            type="checkbox"
            name="nav-menu-btn"
            className="nav-btn"
            label="nav menu button"
            title="navigation menu button"
          />
          <ul className="nav">
            {pages.map((page, index) => (
              <li key={index} className="navlink-li">
                <NavLink
                  to={page.to}
                  className={({ isActive }) =>
                    isActive ? "navlink navlink--active" : "navlink"
                  }
                >
                  {page.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
