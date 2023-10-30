import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = (
        <>
         
          <li>
            <Link to="academics" activeClass="active"  className="cursor-pointer">
            Academics
            </Link>
          </li>
          <li>
            <Link to="facilities" activeClass="active" className="cursor-pointer">
              Facilities
            </Link>
          </li>
         
          <li>
            <Link
              to="admission"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              Admission
            </Link>
          </li>
          <li>
            <Link
              to="highlights"
              activeClass="active"
              
              className="cursor-pointer"
            >
              Highlights
            </Link>
          </li>
          <li>
            <Link to="about" activeClass="active" smooth={true} spy={true} className="cursor-pointer">
              About Us
            </Link>
          </li>
          <li>
            <Link to="contact" activeClass="active" smooth={true} spy={true} className="cursor-pointer">
              Contact Us
            </Link>
          </li>
         
        </>
  );
  return (
    <div className="navbar bg-base-200 px-[8%]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="normal-case text-2xl font-bold">M<span className="text-yellow-500">G</span>S<span className="text-yellow-500">C</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] font-medium">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline">Apply Online</a>
      </div>
    </div>
  );
};

export default Navbar;
