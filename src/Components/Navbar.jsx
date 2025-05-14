import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import logo from "../assets/Rent Car Logo (1)/Car Rent Logo-3.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const HandleLogOut = () => {
    logOut();
    navigate("/");
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/availableCars">Available Cars</NavLink>
      </li>
      <li>
        <NavLink to="/myBooking">My Bookings</NavLink>
      </li>
      {user?.email && (
        <>
          <li>
            <NavLink to="/addCar">Add Car</NavLink>
          </li>
          <li>
            <NavLink to="/myCar">My Cars</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar lg:px-20 bg-gradient-to-r from-green-500 to-blue-500 5y-3 ${
        location.pathname === "/" && "fixed z-50 opacity-80 backdrop-blur-sm"
      }`}
    >
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
            className="menu menu-sm dropdown-content bg-green-500 rounded-box z-[1] mt-3 w-60 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img
          className="hidden lg:block w-20 mr-5 rounded-full scale-120"
          src={logo}
          alt="logo"
        />
        <p className="text-2xl font-bold">
          CAR<span className="text-yellow-500">|</span>RENTAL
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="avatar online mr-5">
            <Tooltip
              className="z-10"
              anchorSelect="#showTooltip"
              content={user.displayName}
            ></Tooltip>
            <div className="w-12 lg:w-16 rounded-full">
              <Link>
                <img id="showTooltip" src={user.photoURL} />
              </Link>
            </div>
          </div>
        )}
        {!user ? (
          <NavLink to="/login">
            <button className="btn text-white font-semibold text-lg bg-gradient-to-r from-blue-500 to-green-500">
              Login
            </button>
          </NavLink>
        ) : (
          <Link>
            <button
              onClick={HandleLogOut}
              className="btn bg-red-500 hover:bg-red-600 text-white font-semibold text-sm lg:text-base"
            >
              Logout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
