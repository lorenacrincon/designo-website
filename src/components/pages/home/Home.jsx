import React from "react";
import phone from "../../../assets/images/home/desktop/image-hero-phone.png";
import passionate from "../../../assets/images/home/desktop/illustration-passionate.svg";
import resourceful from "../../../assets/images/home/desktop/illustration-resourceful.svg";
import friendly from "../../../assets/images/home/desktop/illustration-friendly.svg";
import arrow from "../../../assets/images/shared/desktop/icon-right-arrow.svg";

function Home() {
  return (
    <>
      <header className="max-w-6xl mx-auto">
        <div className="relative home-header pb-80 md:pb-[470px] md:rounded-[15px] md:mx-10 xl:pb-36">
          <div className="font-jost text-white text-center pt-20 flex flex-col px-6 gap-6 xl:text-start xl:px-24 xl:pt-36 xl:flex-row ">
            <div className="space-y-4 md:px-20 md:space-y-7 xl:space-y-10 xl:px-0 xl:basis-7/12">
              <h1 className="home-title font-medium">
                Award-winning custom designs and digital branding solutions
              </h1>
              <p className="paragraph-text px-4 xl:px-0 xl:pe-20">
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
              <button className="white-btn">LEARN MORE</button>
            </div>
          </div>
          <div className="absolute top-90 md:top-80 md:inset-x-8 xl:flex justify-end xl:-inset-x-20 xl:-top-4">
            <img className="mx-auto xl:m-0" src={phone} alt="Phone" />
          </div>
        </div>
      </header>
      <main className="font-jost max-w-6xl mx-auto">
        <section>
          <div className="py-28 mx-6 md:mx-10 flex flex-col justify-center items-center text-center gap-7 xl:grid xl:grid-cols-2 ">
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
        <section>
          <div className="mx-6 md:mx-10 flex flex-wrap  justify-center items-center text-center md:text-start gap-20 pb-60 xl:flex-nowrap xl:text-center xl:gap-12">
            <div className="space-y-6 md:flex md:gap-14 xl:flex-col xl:space-y-0 xl:gap-5">
              <img
                className="mx-auto illustration-bg"
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
                className="mx-auto illustration-bg"
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
                className="mx-auto illustration-bg"
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

export default Home;
