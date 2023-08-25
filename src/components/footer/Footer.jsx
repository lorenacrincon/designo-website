import React from "react";
import logo from "../../assets/images/shared/desktop/logo-light.png";
import facebook from "../../assets/images/shared/desktop/icon-facebook.svg";
import youtube from "../../assets/images/shared/desktop/icon-youtube.svg";
import twitter from "../../assets/images/shared/desktop/icon-twitter.svg";
import pinterest from "../../assets/images/shared/desktop/icon-pinterest.svg";
import instagram from "../../assets/images/shared/desktop/icon-instagram.svg";

function Footer() {
  return (
    <>
      <footer className="relative font-jost text-white text-center pb-20 px-6 md:px-10 pt-64 z-0 xl:pt-40">
        <div className="max-w-6xl mx-auto xl:px-10">
          <div className="md:flex justify-between items-center md:py-10">
            <div>
              <img
                className="w-[202px] mx-auto pb-6 md:pb-0"
                src={logo}
                alt="Light Logo"
              />
              <hr className="md:hidden opacity-20" />
            </div>
            <div>
              <ul className="py-8 space-y-6 md:space-y-0 md:flex md:py-0 md:gap-12 ">
                <li>OUR COMPANY</li>
                <li>LOCATIONS</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </div>
          <hr className="hidden md:block opacity-20" />

          <div className="space-y-6 pb-8 text-base px-12 md:px-0 md:flex justify-between md:text-start md:items-end md:pt-3">
            <div className="opacity-50 ">
              <p>
                <span className="font-bold ">Designo Central Office</span>
                <br />
                3886 Wellington Street
                <br />
                Toronto, Ontario M9C 3J5
              </p>
            </div>
            <div className="opacity-50 ">
              <p>
                <span className="font-bold">Contact Us (Central Office)</span>
                <br />
                P : +1 253-863-8967 <br />M : contact@designo.co
              </p>
            </div>
            <div className="pt-5  flex justify-center md:items-end gap-5 ">
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={youtube} alt="facebook" />
              </a>
              <a href="#">
                <img src={twitter} alt="facebook" />
              </a>
              <a href="#">
                <img src={pinterest} alt="facebook" />
              </a>
              <a href="#">
                <img src={instagram} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
