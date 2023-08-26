import React from "react";
import phone from "../../assets/images/home/desktop/image-hero-phone.png";
import passionate from "../../assets/images/home/desktop/illustration-passionate.svg";
import resourceful from "../../assets/images/home/desktop/illustration-resourceful.svg";
import friendly from "../../assets/images/home/desktop/illustration-friendly.svg";
import arrow from "../../assets/images/shared/desktop/icon-right-arrow.svg";
import GetInTouch from "../common/GetInTouch";

function Home() {
  return (
    <>
      <header className="max-w-6xl mx-auto relative z-40">
        <div className="relative home-header pb-80 md:pb-[470px] md:rounded-[15px] md:mx-10 xl:pb-36">
          <div className="font-jost text-white text-center pt-20 flex flex-col px-6 gap-6 xl:text-start xl:px-24 xl:pt-36 xl:flex-row ">
            <div className="space-y-5 md:px-20 md:space-y-7  xl:px-0 xl:basis-7/12">
              <h1 className="home-title font-medium">
                Award-winning custom designs and digital branding solutions
              </h1>
              <p className="paragraph-text px-4 pb-5 md:pb-7 xl:px-0 xl:pe-20">
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
              <button className="white-btn ">LEARN MORE</button>
            </div>
          </div>
          <div className="absolute top-90 md:top-80 md:inset-x-8 xl:flex justify-end xl:-inset-x-20 xl:-top-4">
            <img className="mx-auto xl:m-0" src={phone} alt="Phone" />
          </div>
        </div>
      </header>
      <main className="font-jost max-w-6xl mx-auto ">
        <div className="hidden xl:block bg-shape left-0 top-96 absolute z-0"></div>
        <section className="relative z-40">
          <div className="py-28 mx-6 md:mx-10 flex flex-col justify-center items-center text-center gap-7 xl:grid xl:grid-cols-2 xl:py-36">
            <div className="flex flex-col justify-center items-center box web-design-box py-[90px] space-y-2 xl:h-full">
              <h3 className="box-title">WEB DESIGN</h3>
              <div className="flex justify-center items-center gap-4">
                <p className="box-subtitle">VIEW PROJECTS</p>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="space-y-7 xl:py-0 w-full">
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
          </div>
        </section>
        <section className="relative z-40">
          <div className="mx-6 md:mx-10 flex flex-wrap  justify-center items-center text-center md:text-start gap-20 pb-60 xl:pb-80 xl:flex-nowrap xl:text-center xl:gap-12">
            <div className="space-y-6 md:flex md:gap-14 xl:flex-col xl:space-y-0 xl:gap-5">
              <img
                className="mx-auto left-circle-bg"
                src={passionate}
                alt="passionate"
              />
              <div className="space-y-3">
                <h4 className="dark-text font-medium text-[20px] tracking-[5px]">
                  PASSIONATE
                </h4>
                <p className="dark-text paragraph-text">
                  Each project starts with an in-depth brand research to ensure
                  we only create products that serve a purpose. We merge art,
                  design, and technology into exciting new solutions.
                </p>
              </div>
            </div>
            <div className="space-y-6 md:flex md:gap-14 xl:flex-col xl:space-y-0 xl:gap-5">
              <img
                className="mx-auto bottom-circle-bg"
                src={resourceful}
                alt="resourceful"
              />
              <div className="space-y-3">
                <h4 className="dark-text font-medium text-[20px] tracking-[5px]">
                  RESOURCEFUL
                </h4>
                <p className="dark-text paragraph-text">
                  Everything that we do has a strategic purpose. We use an agile
                  approach in all of our projects and value customer
                  collaboration. It guarantees superior results that fulfill our
                  clients’ needs.
                </p>
              </div>
            </div>
            <div className="space-y-6 md:flex md:gap-14 xl:flex-col xl:space-y-0 xl:gap-5">
              <img
                className="mx-auto top-circle-bg"
                src={friendly}
                alt="friendly"
              />
              <div className="space-y-3">
                <h4 className="dark-text font-medium text-[20px] tracking-[5px]">
                  FRIENDLY
                </h4>
                <p className="dark-text paragraph-text">
                  We are a group of enthusiastic folks who know how to put
                  people first. Our success depends on our customers, and we
                  strive to give them the best experience a company can provide.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="hidden xl:block bg-shape right-0 -bottom-[1400px]  absolute z-0 rotate-180"></div>
        <section className="relative z-40">
          <GetInTouch />
        </section>
      </main>
    </>
  );
}

export default Home;