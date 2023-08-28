import React from "react";
import aboutHeroMobile from "../../assets/images/about/mobile/image-about-hero.jpg";
import aboutHeroTablet from "../../assets/images/about/tablet/image-about-hero.jpg";
import aboutHeroDesktop from "../../assets/images/about/desktop/image-about-hero.jpg";

import talentMobile from "../../assets/images/about/mobile/image-world-class-talent.jpg";
import talentTablet from "../../assets/images/about/tablet/image-world-class-talent.jpg";
import talentDesktop from "../../assets/images/about/desktop/image-world-class-talent.jpg";

import realDealMobile from "../../assets/images/about/mobile/image-real-deal.jpg";
import realDealTablet from "../../assets/images/about/tablet/image-real-deal.jpg";
import realDealDesktop from "../../assets/images/about/Desktop/image-real-deal.jpg";

import canada from "../../assets/images/shared/desktop/illustration-canada.svg";
import australia from "../../assets/images/shared/desktop/illustration-australia.svg";
import unitedKingdom from "../../assets/images/shared/desktop/illustration-united-kingdom.svg";
import GetInTouch from "../common/GetInTouch";

function AboutUs() {
  return (
    <>
      <header className="relative z-10 max-w-6xl mx-auto ">
        <div className="text-white font-jost h-full overflow-hidden md:rounded-[15px] md:mx-10  md:mb-20 xl:flex">
          <img className="w-full md:hidden" src={aboutHeroMobile} />
          <img
            className="w-full hidden md:block xl:hidden"
            src={aboutHeroTablet}
          />
          <img
            className="w-full hidden xl:block order-last"
            src={aboutHeroDesktop}
          />
          <div className="about-header text-center py-16 px-6 space-y-6 md:px-20 md:flex md:flex-col md:justify-center xl:text-start">
            <h1 className="home-title font-medium">About Us</h1>
            <p className="paragraph-text ">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients' audiences.
            </p>
          </div>
        </div>
      </header>
      <main className="relative z-10 max-w-6xl mx-auto ">
        <section className="relative z-10">
          <div className="text-white font-jost overflow-hidden md:rounded-[15px] md:mx-10 md:mt-8 md:mb-20 xl:flex">
            <img className="w-full md:hidden" src={talentMobile} />
            <img
              className="w-full hidden md:block xl:hidden"
              src={talentTablet}
            />
            <img className=" hidden xl:block" src={talentDesktop} />
            <div className="talent-bg text-center py-16 px-6 space-y-6 md:flex md:flex-col md:justify-center md:px-20 xl:text-start">
              <h3 className="home-title font-medium peach-text">
                World-class talent
              </h3>
              <div className="paragraph-text dark-text space-y-5">
                <p>
                  We are a crew of strategists, problem-solvers, and
                  technologists. Every design is thoughtfully crafted from
                  concept to launch, ensuring success in its given market. We
                  are constantly updating our skills in a myriad of platforms.
                </p>
                <p>
                  Our team is multi-disciplinary and we are not merely
                  interested in form — content and meaning are just as
                  important. We give great importance to craftsmanship, service,
                  and prompt delivery. Clients have always been impressed with
                  our high-quality outcomes that encapsulates their brand’s
                  story and mission.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10">
          <div className="mx-6 flex flex-wrap  justify-center items-center text-center gap-20 py-20 md:mx-10 md:grid xl:flex xl:justify-around">
            <div className="space-y-6 md:grid md:gap-3">
              <img
                className="mx-auto top-circle-bg"
                src={canada}
                alt="Canada"
              />
              <div className="space-y-8">
                <h4 className="dark-text font-medium text-[20px] tracking-[5px]">
                  CANADA
                </h4>
                <button className="peach-btn">GET IN TOUCH</button>
              </div>
            </div>
            <div className="space-y-6 md:grid md:gap-3 ">
              <img
                className="mx-auto left-circle-bg"
                src={australia}
                alt="Australia"
              />
              <div className="space-y-8">
                <h4 className="dark-text font-medium text-[20px] tracking-[5px]">
                  AUSTRALIA
                </h4>
                <button className="peach-btn">GET IN TOUCH</button>
              </div>
            </div>
            <div className="space-y-6 md:grid md:gap-3 ">
              <img
                className="mx-auto bottom-circle-bg"
                src={unitedKingdom}
                alt="UK"
              />
              <div className="space-y-8">
                <h4 className="dark-text font-medium text-[20px] tracking-[5px]">
                  UNITED KINGDOM
                </h4>
                <button className="peach-btn">GET IN TOUCH</button>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10">
          <div className="text-white font-jost h-full overflow-hidden mb-80 md:rounded-[15px] md:mx-10 md:mt-8 xl:flex">
            <img className="w-full md:hidden" src={realDealMobile} />
            <img
              className="w-full hidden md:block xl:hidden"
              src={realDealTablet}
            />
            <img
              className="w-full hidden xl:block order-last"
              src={realDealDesktop}
            />
            <div className="talent-bg text-center py-16 px-6 space-y-6 md:flex md:flex-col md:justify-center md:px-20 xl:text-start">
              <h3 className="home-title font-medium peach-text">
                The real deal
              </h3>
              <div className="paragraph-text dark-text space-y-5">
                <p>
                  As strategic partners in our clients’ businesses, we are ready
                  to take on any challenge as our own. Solving real problems
                  require empathy and collaboration, and we strive to bring a
                  fresh perspective to every opportunity.
                </p>
                <p>
                  We make design and technology more accessible and give you
                  tools to measure success. We are visual storytellers in
                  appealing and captivating ways. By combining business and
                  marketing strategies, we inspire audiences to take action and
                  drive real results.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10">
          <GetInTouch />
        </section>
      </main>
    </>
  );
}

export default AboutUs;
