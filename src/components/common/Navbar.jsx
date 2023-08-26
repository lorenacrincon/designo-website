import React, { useState } from "react";
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
      <nav className="max-w-6xl mx-auto z-30 bg-white">
        <div className="mx-6 py-9 relative md:px-0 md:mx-10 md:py-14">
          <div className="flex items-center justify-between">
            <a href="#">
              <img className="w-[202px] " src={logo} alt="Logo" />
            </a>
            <div className="hidden md:flex md:justify-end md:items-center text-white nav-text gap-10 md:gap-10">
              <a href="#" activeClassName="active">
                OUR COMPANY
              </a>

              <a href="#" activeClassName="active">
                LOCATIONS
              </a>

              <a href="#" activeClassName="active">
                CONTACT
              </a>
            </div>

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

      <nav className="absolute w-full z-10">
        {mobileNav && (
          <div className="md:hidden nav-text flex black-bg py-12 ">
            <div>
              <ul className="list-none grid gap-8">
                <li>
                  <a href="#" className="px-6" onClick={handleClose}>
                    OUR COMPANY
                  </a>
                </li>
                <li>
                  <a href="#" className="px-6" onClick={handleClose}>
                    LOCATIONS
                  </a>
                </li>
                <li>
                  <a href="#" className="px-6" onClick={handleClose}>
                    CONTACT
                  </a>
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
