import { Link } from "react-router-dom";
import logo from "/assets/images/shared/desktop/logo-light.png";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <>
      <footer className="relative font-jost text-white text-center pb-20 px-6 md:px-10 pt-32 md:pt-24 z-0 ">
        <div className="max-w-6xl mx-auto xl:px-10">
          <div className="md:flex justify-between items-center md:py-10">
            <Link
              to="/"
              onClick={(e) => {
                window.scrollTo(0, 0);
              }}
            >
              <img
                className="w-[202px] mx-auto pb-6 md:pb-0"
                src={logo}
                alt="Light Logo"
              />
              <hr className="md:hidden opacity-20" />
            </Link>
            <div>
              <div className="py-8 space-y-6 md:space-y-0 md:flex md:py-0 md:gap-12 footer-link">
                <Link
                  to="/about-us"
                  className="footer-hover-animation"
                  onClick={(e) => {
                    window.scrollTo(0, 0);
                  }}
                >
                  OUR COMPANY
                </Link>
                <Link
                  to="/locations"
                  className="footer-hover-animation"
                  onClick={(e) => {
                    window.scrollTo(0, 0);
                  }}
                >
                  LOCATIONS
                </Link>
                <Link
                  to="/contact"
                  className="footer-hover-animation"
                  onClick={(e) => {
                    window.scrollTo(0, 0);
                  }}
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
          <hr className="hidden md:block opacity-20" />
          <SocialMediaIcons />
        </div>
      </footer>
    </>
  );
}

export default Footer;
