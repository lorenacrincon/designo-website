import React from "react";
import canada from "../../assets/images/shared/desktop/illustration-canada.svg";
import australia from "../../assets/images/shared/desktop/illustration-australia.svg";
import unitedKingdom from "../../assets/images/shared/desktop/illustration-united-kingdom.svg";
import { LocationBtn } from "../common/Buttons";

function Countries() {
  return (
    <section className="max-w-6xl mx-auto relative z-10">
      <div className="mx-6 flex flex-wrap  justify-center items-center text-center gap-20 py-20 md:mx-10 md:grid xl:flex xl:justify-around">
        <div className="space-y-6 md:grid md:gap-3">
          <img className="mx-auto top-circle-bg" src={canada} alt="Canada" />
          <div className="space-y-8">
            <h4 className="dark-text font-medium text-[20px] tracking-[5px]">
              CANADA
            </h4>
            <LocationBtn />
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
            <LocationBtn />
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
            <LocationBtn />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Countries;
