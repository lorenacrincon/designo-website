import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/shared/desktop/logo-dark.png";
import { motion } from "framer-motion";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleClose = () => {
    setMobileNav(false);
  };

  return (
    <>
      <nav className="max-w-6xl mx-auto relative z-10 bg-white">
        <div className="mx-6 py-9 relative md:px-0 md:mx-10 md:py-14">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <img className="w-[202px] " src={logo} alt="Logo" />
            </NavLink>
            <ul className="hidden md:flex md:justify-end md:items-center text-white nav-text gap-10 md:gap-10">
              <NavLink
                to="/about-us"
                className="hover-underline-animation"
                activeClassName="active"
              >
                OUR COMPANY
              </NavLink>

              <NavLink
                to="/locations"
                className="hover-underline-animation"
                activeClassName="active"
              >
                LOCATIONS
              </NavLink>

              <NavLink
                to="/contact"
                className="hover-underline-animation"
                activeClassName="active"
              >
                CONTACT
              </NavLink>
            </ul>

            <motion.button
              initial="hide"
              animate={mobileNav ? "show" : "hide"}
              onClick={toggleMobileNav}
              className="flex flex-col space-y-1 relative z-10 md:hidden"
            >
              <motion.span
                variants={{
                  hide: {
                    rotate: 0,
                  },
                  show: {
                    rotate: 45,
                    y: 8,
                  },
                }}
                className="w-6 black-bg h-[4px] block "
              ></motion.span>
              <motion.span
                variants={{
                  hide: {
                    opacity: 1,
                  },
                  show: {
                    opacity: 0,
                  },
                }}
                className="w-6 black-bg h-[4px] block "
              ></motion.span>
              <motion.span
                variants={{
                  hide: {
                    rotate: 0,
                  },
                  show: {
                    rotate: -45,
                    y: -8,
                  },
                }}
                className="w-6 black-bg h-[4px] block "
              ></motion.span>
            </motion.button>
          </div>
        </div>
      </nav>

      <nav className="absolute w-full z-20">
        {mobileNav && (
          <div className="md:hidden nav-text flex black-bg py-12 ">
            <div>
              <ul className="list-none grid gap-8">
                <li>
                  <NavLink
                    to="/about-us"
                    className="px-6"
                    onClick={handleClose}
                  >
                    OUR COMPANY
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/locations"
                    className="px-6"
                    onClick={handleClose}
                  >
                    LOCATIONS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="px-6" onClick={handleClose}>
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
