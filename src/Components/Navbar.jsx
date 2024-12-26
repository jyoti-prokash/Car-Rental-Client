import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import logo from "../assets/Rent Car Logo (1)/Car Rent Logo-3.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
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
      {user?.email && (
        <>
          <li>
            <NavLink to="/addCar">Add Car</NavLink>
          </li>
          <li>
            <NavLink to="/myCar">My Cars</NavLink>
          </li>
          <li>
            <NavLink to="/myBooking">My Bookings</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img
          className="hidden lg:block w-28 mr-5 rounded-full scale-120"
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
        {!user ? (
          <NavLink to="/login">
            <button className="btn text-white font-semibold text-lg bg-[#FF3600]">
              Login
            </button>
          </NavLink>
        ) : (
          <Link>
            <button
              onClick={HandleLogOut}
              className="btn text-white font-semibold text-lg bg-[#FF3600]"
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
