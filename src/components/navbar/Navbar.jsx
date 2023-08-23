import React, { useState } from "react";
import logo from "../../assets/images/shared/desktop/logo-dark.png";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleClose = () => {
    setMobileNav(false);
  };

  return (
    <header className=" w-full z-30 bg-white">
      <nav className="">
        <div className="max-w-full mx-auto px-5 py-9 relative">
          <div className="flex items-center justify-between">
            <a href="#">
              <img className="w-[202px]" src={logo} alt="Logo" />
            </a>
            <div className="hidden xl:flex nav-deco absolute z-50"></div>
            <div className="hidden md:flex md:justify-center md:items-center text-white nav-text gap-10 navbar-bg  my-navbar ">
              <a href="#" activeClassName="active">
                <span className="hidden lg:inline me-4 font-bold">00</span>
                HOME
              </a>

              <a href="#" activeClassName="active">
                <span className="hidden lg:inline me-4 font-bold">01</span>
                DESTINATION
              </a>

              <a href="#" activeClassName="active">
                <span className="hidden lg:inline me-4 font-bold">03</span>
                CREW
              </a>

              <a href="#" activeClassName="active">
                <span className="hidden lg:inline me-4 font-bold">03</span>
                TECHNOLOGY
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
    </header>
  );
}

export default Navbar;
