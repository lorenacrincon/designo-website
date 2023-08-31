import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/shared/desktop/logo-dark.png";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <>
      <nav className="max-w-6xl mx-auto relative z-30 bg-white">
        <div className="mx-6 py-9 relative md:px-0 md:mx-10 md:py-14">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <img className="w-[202px] " src={logo} alt="Logo" />
            </NavLink>
            <ul className="hidden md:flex md:justify-end md:items-center text-white nav-text gap-10 md:gap-10">
              <NavLink to="/about-us" className="hover-underline-animation">
                OUR COMPANY
              </NavLink>

              <NavLink to="/locations" className="hover-underline-animation">
                LOCATIONS
              </NavLink>

              <NavLink to="/contact" className="hover-underline-animation">
                CONTACT
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
      <MobileNav />
    </>
  );
}

export default Navbar;
