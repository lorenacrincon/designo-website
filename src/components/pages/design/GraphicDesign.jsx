import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../common/PageTitle";
import { graphic } from "../../../data.json";
import { motion } from "framer-motion";
import arrow from "/assets/images/shared/desktop/icon-right-arrow.svg";
import GetInTouch from "../../common/GetInTouch";
import {
  ScrollAnimation,
  AnimationX,
  AnimationXInverse,
} from "../../common/Animations";

function GraphicDesign() {
  const [graphicdesigns] = useState(graphic);
  const pageTitle = "Designo / Graphic Design";

  return (
    <>
      <PageTitle title={pageTitle} />
      <header className="relative z-10 max-w-6xl mx-auto mb-16">
        <motion.div
          className="web-design-header md:rounded-[15px] md:mx-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-jost text-white text-center py-28 flex flex-col px-6 gap-6">
            <div className="space-y-4">
              <h1 className="home-title font-medium">Graphic design</h1>
              <p className="mx-auto paragraph-text md:w-96 ">
                We deliver eye-catching branding materials that are tailored to
                meet your business objectives.
              </p>
            </div>
          </div>
        </motion.div>
      </header>
      <main className="font-jost max-w-6xl mx-auto">
        <div className="hidden xl:block bg-shape left-0 top-96 absolute z-0"></div>
        <section className="relative z-10 max-w-6xl mx-auto px-6 mb-10 gap-6 space-y-10 md:px-10 xl:px-10 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-9">
          {graphicdesigns.map((item, index) => (
            <ScrollAnimation>
              <motion.div
                whileHover={{
                  backgroundColor: "var(--peach)",
                }}
                key={index}
                className="group font-jost rounded-[15px] overflow-hidden lightPeach-bg shadow-lg md:max-w-full md:flex xl:block "
              >
                <img className="w-full md:w-1/2 xl:w-full" src={item.image} />
                <div className="text-center py-10 px-6 md:flex md:flex-col md:justify-center ">
                  <p className="mb-2 uppercase card-title group-hover:text-white">
                    {item.name}
                  </p>
                  <p className="dark-text text-base group-hover:text-white">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </section>
        <section className="relative z-10 max-w-6xl mx-auto">
          <div className="pt-10 pb-80 mx-6 flex flex-wrap justify-center items-center text-center gap-7 md:mx-10 xl:flex-nowrap">
            <Link
              to="/app-design"
              className="w-full h-full"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <AnimationX>
                <div className="box app-design-box py-[90px] space-y-2">
                  <motion.div
                    className="box-bg top-0"
                    whileHover={{
                      backgroundColor: "hsl(11, 73%, 66%,0.8)",
                    }}
                  ></motion.div>
                  <h3 className=" box-title">APP DESIGN</h3>
                  <div className="flex justify-center items-center gap-4">
                    <p className="box-subtitle">VIEW PROJECTS</p>
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </AnimationX>
            </Link>
            <Link
              to="/web-design"
              className="w-full h-full"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <AnimationXInverse>
                <div className="box web-design-box py-[90px] space-y-2">
                  <motion.div
                    className="box-bg top-0"
                    whileHover={{
                      backgroundColor: "hsl(11, 73%, 66%,0.8)",
                    }}
                  ></motion.div>
                  <h3 className="box-title">WEB DESIGN</h3>
                  <div className="flex justify-center items-center gap-4">
                    <p className="box-subtitle">VIEW PROJECTS</p>
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </AnimationXInverse>
            </Link>
          </div>
        </section>
        <section className="relative z-10 ">
          <GetInTouch />
        </section>
      </main>
    </>
  );
}

export default GraphicDesign;
