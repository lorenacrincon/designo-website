import React, { useState } from "react";
import { graphic } from "../../data.json";
import arrow from "../../assets/images/shared/desktop/icon-right-arrow.svg";
import GetInTouch from "../common/GetInTouch";

function GraphicDesign() {
  const [graphicdesigns] = useState(graphic);

  return (
    <>
      <header className="relative z-40 max-w-6xl mx-auto mb-16">
        <div className="web-design-header md:rounded-[15px] md:mx-10 ">
          <div className="font-jost text-white text-center py-28 flex flex-col px-6 gap-6">
            <div className="space-y-4">
              <h1 className="home-title font-medium">Graphic design</h1>
              <p className="mx-auto paragraph-text md:w-96 ">
                We deliver eye-catching branding materials that are tailored to
                meet your business objectives.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="font-jost max-w-6xl mx-auto">
        <div className="hidden xl:block bg-shape left-0 top-96 absolute z-0"></div>
        <section className="relative z-40 max-w-6xl mx-auto px-6 mb-10 gap-6 space-y-10 md:px-10 xl:px-10 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-9">
          {graphicdesigns.map((item, index) => (
            <div class="font-jost rounded-[15px] overflow-hidden lightPeach-bg shadow-lg md:max-w-full md:flex xl:block">
              <img class="w-full md:w-1/2 xl:w-full" src={item.image} />
              <div class="text-center py-10 px-6 md:flex md:flex-col md:justify-center">
                <div class="mb-2 card-title uppercase">{item.name}</div>
                <p class="dark-text text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="relative z-40 max-w-6xl mx-auto">
          <div className="pt-10 pb-60 mx-6 flex flex-wrap justify-center items-center text-center gap-7 md:mx-10 xl:flex-nowrap">
            <div className="box app-design-box py-[90px] space-y-2">
              <h3 className="box-title">APP DESIGN</h3>
              <div className="flex justify-center items-center gap-4">
                <p className="box-subtitle">VIEW PROJECTS</p>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="box web-design-box py-[90px] space-y-2">
              <h3 className="box-title">WEB DESIGN</h3>
              <div className="flex justify-center items-center gap-4">
                <p className="box-subtitle">VIEW PROJECTS</p>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-40 ">
          <GetInTouch />
        </section>
      </main>
    </>
  );
}

export default GraphicDesign;
