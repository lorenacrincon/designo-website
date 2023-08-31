import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

function MobileNav() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleClose = () => {
    setMobileNav(false);
  };
  return (
    <>
      <motion.button
        initial="hide"
        animate={mobileNav ? "show" : "hide"}
        onClick={toggleMobileNav}
        className="flex flex-col space-y-1 absolute right-5 top-9 z-40 md:hidden"
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
      <nav className="absolute w-full z-20" id="mobile-nav">
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                className="md:hidden nav-text flex black-bg py-12"
                key="mobile-nav"
                variants={{
                  hide: {
                    y: "-100%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      staggerChildren: 0.1,
                    },
                  },
                  show: {
                    y: "0%",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      when: "beforeChildren",
                      staggerChildren: 0.1,
                      duration: 0.4,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
              >
                <div>
                  <motion.ul
                    variants={{
                      hide: {
                        y: "10%",
                        opacity: 0,
                      },
                      show: {
                        y: "0%",
                        opacity: 1,
                      },
                    }}
                    className="list-none grid gap-8"
                  >
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
                      <NavLink
                        to="/contact"
                        className="px-6"
                        onClick={handleClose}
                      >
                        CONTACT
                      </NavLink>
                    </li>
                  </motion.ul>
                </div>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default MobileNav;
