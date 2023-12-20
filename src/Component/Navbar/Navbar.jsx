import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Task Magnet</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn bg-teal-600 text-white">Login</Link>
      </div>
    </div>
  );
};

const activeLinkStyle = ({ isActive, isPending }) =>
  isPending
    ? "pending"
    : isActive
    ? "bg-green-800 text-white rounded p-2"
    : " hover:bg-teal-600 hover:text-white rounded p-2";

const navItem = (
  <>
    <NavLink to={"/"} className={activeLinkStyle}>
      Home
    </NavLink>
    <NavLink to={"/about"} className={activeLinkStyle}>
      About Us
    </NavLink>
    <NavLink to={"/blog"} className={activeLinkStyle}>
      Blog
    </NavLink>
    <NavLink to={"/support"} className={activeLinkStyle}>
      Support
    </NavLink>
  </>
);

export default Navbar;

Navbar.propTypes = {
  props: PropTypes.any,
};
