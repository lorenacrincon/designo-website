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
      <footer className="relative  font-jost text-white text-center pb-20 px-6 pt-64 z-0 ">
        <div>
          <div>
            <img className="w-44 mx-auto pb-6" src={logo} alt="Light Logo" />
            <hr className="opacity-20" />
          </div>
          <div>
            <ul className="py-8 space-y-6">
              <li>OUR COMPANY</li>
              <li>LOCATIONS</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="opacity-50 space-y-6 pb-8 text-base px-12">
            <div>
              <p>
                <span className="font-bold block">Designo Central Office</span>
                3886 Wellington Street
                <br />
                Toronto, Ontario M9C 3J5
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold block ">
                  Contact Us (Central Office)
                </span>{" "}
                P : +1 253-863-8967 <br />M : contact@designo.co
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-6">
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
      </footer>
    </>
  );
}

export default Footer;
