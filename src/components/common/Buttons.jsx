import React from "react";
import { motion } from "framer-motion";

const btnHover = {
  color: "white",
  backgroundColor: "var(--lightPeach)",
};

export const GetInTouchBtn = () => {
  return (
    <motion.button whileHover={btnHover} className="white-btn">
      GET IN TOUCH
    </motion.button>
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
      type="button"
    >
      SUBMIT
    </motion.button>
  );
};
