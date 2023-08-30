import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const btnHover = {
  color: "var(--white)",
  backgroundColor: "var(--lightPeach)",
};

export const GetInTouchBtn = () => {
  return (
    <Link
      to="/contact"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <motion.button whileHover={btnHover} className="white-btn">
        GET IN TOUCH
      </motion.button>
    </Link>
  );
};

export const LearnMoreBtn = () => {
  return (
    <motion.button whileHover={btnHover} className="white-btn relative z-40">
      LEARN MORE
    </motion.button>
  );
};

export const LocationBtn = () => {
  return (
    <motion.button whileHover={btnHover} className="peach-btn ">
      SEE LOCATION
    </motion.button>
  );
};

export const SubmitBtn = () => {
  return (
    <motion.button
      whileHover={btnHover}
      className="white-btn self-end"
      type="submit"
    >
      SUBMIT
    </motion.button>
  );
};
