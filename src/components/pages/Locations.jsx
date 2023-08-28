import React from "react";
import canada from "../../assets/images/locations/desktop/image-map-canada.png";
import canadaTablet from "../../assets/images/locations/tablet/image-map-canada.png";
import australia from "../../assets/images/locations/desktop/image-map-australia.png";
import australiaTablet from "../../assets/images/locations/tablet/image-map-australia.png";
import uk from "../../assets/images/locations/desktop/image-map-united-kingdom.png";
import ukTablet from "../../assets/images/locations/tablet/image-map-uk.png";
import GetInTouch from "../common/GetInTouch";

function Locations() {
  return (
    <main className="relative z-10 max-w-6xl mx-auto ">
      <section className="mb-80 relative z-10 xl:space-y-8">
        <div className="text-white font-jost overflow-hidden md:mx-10 md:mb-20 xl:flex xl:gap-8 xl:mb-0">
          <img className="w-full md:hidden" src={canada} />
          <img
            className="w-full hidden md:block rounded-[15px] xl:hidden"
            src={canadaTablet}
          />
          <img
            className="hidden xl:block rounded-[15px] order-last"
            src={canada}
          />
          <div
            className="talent-bg text-center py-16 px-6 space-y-6  md:mt-8 md:px-20
          md:py-24 md:rounded-[15px] md:text-start xl:mt-0 xl:flex-grow"
          >
            <p className="location-title  font-medium peach-text">Canada</p>
            <div className="md:flex md:flex-row md:justify-start md:items-end md:gap-32">
              <p className="paragraph-text dark-text">
                <span className="font-medium">Designo Central Office</span>
                <br /> 3886 Wellington Street <br />
                Toronto, Ontario M9C 3J5
              </p>
              <p className="paragraph-text dark-text">
                <span className="font-medium">Contact</span>
                <br /> P : +1 253-863-8967 <br />M : contact@designo.co
              </p>
            </div>
          </div>
        </div>
        <div className="text-white font-jost overflow-hidden md:mx-10 md:mb-20 xl:flex xl:gap-8 xl:mb-0">
          <img className="w-full md:hidden" src={australia} />
          <img
            className="w-full hidden md:block rounded-[15px] xl:hidden"
            src={australiaTablet}
          />
          <img className="hidden xl:block rounded-[15px]" src={australia} />
          <div
            className="talent-bg text-center py-16 px-6 space-y-6  md:mt-8 md:px-20
          md:py-24 md:rounded-[15px] md:text-start xl:mt-0 xl:flex-grow"
          >
            <p className="location-title  font-medium peach-text">Australia</p>
            <div className="md:flex md:flex-row md:justify-start md:items-end md:gap-32">
              <p className="paragraph-text dark-text">
                <span className="font-medium">Designo AU Office</span>
                <br />
                19 Balonne Street
                <br />
                New South Wales 2443
              </p>
              <p className="paragraph-text dark-text">
                <span className="font-medium">Contact</span>
                <br />P : (02) 6720 9092
                <br />M : contact@designo.au
              </p>
            </div>
          </div>
        </div>

        <div className="text-white font-jost overflow-hidden md:mx-10 md:mb-20 xl:flex xl:gap-8 xl:mb-0">
          <img className="w-full md:hidden" src={uk} />
          <img
            className="w-full hidden md:block rounded-[15px] xl:hidden"
            src={ukTablet}
          />
          <img
            className="w-[375px] hidden xl:block rounded-[15px] order-last"
            src={uk}
          />
          <div
            className="talent-bg text-center py-16 px-6 space-y-6  md:mt-8 md:px-20
          md:py-24 md:rounded-[15px] md:text-start xl:mt-0 xl:flex-grow"
          >
            <p className="location-title font-medium peach-text">
              United Kingdom
            </p>
            <div className="md:flex md:flex-row md:justify-start md:items-end md:gap-32">
              <p className="paragraph-text dark-text space-y-5">
                <span className="font-medium">Designo UK Office</span>
                <br />
                13 Colorado Way
                <br />
                Rhyd-y-fro SA8 9GA
              </p>
              <p className="paragraph-text dark-text space-y-5">
                <span className="font-medium">Contact</span>
                <br />P : 078 3115 1400
                <br />M : contact@designo.uk
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10">
        <GetInTouch />
      </section>
    </main>
  );
}

export default Locations;
