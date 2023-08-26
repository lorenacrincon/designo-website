import React from "react";
import aboutHero from "../../assets/images/about/mobile/image-about-hero.jpg";
import talent from "../../assets/images/about/mobile/image-world-class-talent.jpg";
import canada from "../../assets/images/shared/desktop/illustration-canada.svg";
import australia from "../../assets/images/shared/desktop/illustration-australia.svg";
import unitedKingdom from "../../assets/images/shared/desktop/illustration-united-kingdom.svg";

function AboutUs() {
  return (
    <>
      <header className="relative z-40 max-w-6xl mx-auto">
        <div className="font-jost text-white  md:rounded-[15px]">
          <img className="w-full" src={aboutHero} />
          <div className="about-header text-center py-16 px-6 space-y-6 md:flex md:flex-col md:justify-center">
            <h1 className="home-title font-medium">About Us</h1>
            <p className="paragraph-text">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients' audiences.
            </p>
          </div>
        </div>
      </header>
      <main>
        <section className="relative z-40">
          <div className="font-jost text-white  md:rounded-[15px]">
            <img className="w-full" src={talent} />
            <div className="talent-bg text-center py-16 px-6 space-y-6 md:flex md:flex-col md:justify-center">
              <h1 className="home-title peach-text font-medium">
                World-class talent
              </h1>
              <p className="paragraph-text dark-text">
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms. Our
                team is multi-disciplinary and we are not merely interested in
                form — content and meaning are just as important. We give great
                importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand’s story and mission.
              </p>
            </div>
          </div>
        </section>
        <section className="relative z-40">
          <div className="mx-6 flex flex-wrap  justify-center items-center text-center gap-20 py-20 md:mx-10 md:text-start xl:pb-80 xl:flex-nowrap xl:text-center xl:gap-12">
            <div className="space-y-6 md:flex md:gap-14 xl:flex-col xl:space-y-0 xl:gap-5">
              <img
                className="mx-auto top-circle-bg"
                src={canada}
                alt="passionate"
              />
              <div className="space-y-8">
                <h4 className="dark-text font-medium text-[20px] tracking-[5px]">
                  CANADA
                </h4>
                <button className="peach-btn">GET IN TOUCH</button>
              </div>
            </div>
            <div className="space-y-6 md:flex md:gap-14 xl:flex-col xl:space-y-0 xl:gap-5">
              <img
                className="mx-auto left-circle-bg"
                src={australia}
                alt="resourceful"
              />
              <div className="space-y-8">
                <h4 className="dark-text font-medium text-[20px] tracking-[5px]">
                  AUSTRALIA
                </h4>
                <button className="peach-btn">GET IN TOUCH</button>
              </div>
            </div>
            <div className="space-y-6 md:flex md:gap-14 xl:flex-col xl:space-y-0 xl:gap-5">
              <img
                className="mx-auto bottom-circle-bg"
                src={unitedKingdom}
                alt="friendly"
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
        <section className="relative z-40"></section>
      </main>
    </>
  );
}

export default AboutUs;
