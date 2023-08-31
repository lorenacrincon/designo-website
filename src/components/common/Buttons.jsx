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
    <Link
      to="/locations"
      onClick={(e) => {
        window.scrollTo(0, 0);
      }}
    >
      <motion.button whileHover={btnHover} className="peach-btn mt-3">
        SEE LOCATION
      </motion.button>
    </Link>
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
