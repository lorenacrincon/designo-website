import React, { useState } from "react";
import PageTitle from "../../common/PageTitle";
import { web } from "../../../data.json";
import { Link } from "react-router-dom";
import arrow from "../../../assets/images/shared/desktop/icon-right-arrow.svg";
import GetInTouch from "../../common/GetInTouch";
import { motion } from "framer-motion";

function WebDesign() {
  const [webdesigns] = useState(web);
  const pageTitle = "Designo / Web Design";

  return (
    <>
      <PageTitle title={pageTitle} />
      <header className="relative z-10 max-w-6xl mx-auto mb-16">
        <div className="web-design-header md:rounded-[15px] md:mx-10 ">
          <div className="font-jost text-white text-center py-28 flex flex-col px-6 gap-6">
            <div className="space-y-4">
              <h1 className="home-title font-medium">Web design</h1>
              <p className="mx-auto paragraph-text md:w-96 ">
                We build websites that serve as powerful marketing tools and
                bring memorable brand experiences.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="font-jost max-w-6xl mx-auto">
        <div className="hidden xl:block bg-shape left-0 top-96 absolute z-0"></div>
        <section className="relative z-10 max-w-6xl mx-auto px-6 mb-10 gap-6 space-y-10 md:px-10 xl:px-10 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-9">
          {webdesigns.map((item, index) => (
            <motion.div
              whileHover={{
                backgroundColor: "var(--peach)",
              }}
              key={index}
              className="group font-jost rounded-[15px] overflow-hidden lightPeach-bg shadow-lg md:max-w-full md:flex xl:block"
            >
              <img className="w-full md:w-1/2 xl:w-full" src={item.image} />
              <div className="text-center py-10 px-6 md:flex md:flex-col md:justify-center">
                <div className="mb-2 card-title uppercase group-hover:text-white">
                  {item.name}
                </div>
                <p className="dark-text text-base group-hover:text-white">
                  {item.description}
                </p>
              </div>
            </motion.div>
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
            </Link>
            <Link
              to="/graphic-design"
              className="w-full h-full"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div className="box graphic-design-box py-[90px] space-y-2">
                <motion.div
                  className="box-bg top-0"
                  whileHover={{
                    backgroundColor: "hsl(11, 73%, 66%,0.8)",
                  }}
                ></motion.div>
                <h3 className="box-title">GRAPHIC DESIGN</h3>
                <div className="flex justify-center items-center gap-4">
                  <p className="box-subtitle">VIEW PROJECTS</p>
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
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

export default WebDesign;
