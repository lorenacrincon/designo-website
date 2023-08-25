import React, { useState } from "react";
import { web } from "../../../data.json";
import arrow from "../../../assets/images/shared/desktop/icon-right-arrow.svg";

function WebDesign() {
  const [webdesigns] = useState(web);

  return (
    <>
      <header className="max-w-6xl mx-auto mb-16">
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
        <section className="max-w-6xl mx-auto px-6 mb-10 gap-6 space-y-10 md:px-10 xl:px-10 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-9">
          {webdesigns.map((item, index) => (
            <div class="font-jost rounded-[15px] overflow-hidden lightPeach-bg shadow-lg md:max-w-full md:flex xl:block">
              <img class="w-full md:w-1/2 xl:w-full" src={item.image} />
              <div class="text-center py-10 px-6 md:flex md:flex-col md:justify-center">
                <div class="mb-2 card-title uppercase">{item.name}</div>
                <p class="dark-text text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="max-w-6xl mx-auto">
          <div className="pt-10 pb-60 mx-6 flex flex-wrap justify-center items-center text-center gap-7 md:mx-10 xl:flex-nowrap">
            <div className="box app-design-box py-[90px] space-y-2">
              <h3 className="box-title">APP DESIGN</h3>
              <div className="flex justify-center items-center gap-4">
                <p className="box-subtitle">VIEW PROJECTS</p>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="box graphic-design-box py-[90px] space-y-2">
              <h3 className="box-title">GRAPHIC DESIGN</h3>
              <div className="flex justify-center items-center gap-4">
                <p className="box-subtitle">VIEW PROJECTS</p>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </section>
        <section className="relative ">
          <div className="absolute z-50 contact-box text-white mx-6 md:mx-10 py-12 md:py-16 -top-40  xl:w-[1072px]">
            <div className="contact-content font-jost text-center space-y-6 px-8 md:px-36 xl:flex xl:flex-row xl:justify-between xl:items-center xl:text-start xl:px-20">
              <div className="basis-1/2 space-y-4">
                <h3 className="contact-title md:px-10 xl:px-0">
                  Let’s talk about <br />
                  your project
                </h3>
                <p className="paragraph-text pb-5 xl:pb-0">
                  Ready to take it to the next level? Contact us today and find
                  out how our expertise can help your business grow.
                </p>
              </div>
              <button className="white-btn">GET IN TOUCH</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default WebDesign;
