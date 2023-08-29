import React from "react";
import canada from "../../assets/images/shared/desktop/illustration-canada.svg";
import australia from "../../assets/images/shared/desktop/illustration-australia.svg";
import unitedKingdom from "../../assets/images/shared/desktop/illustration-united-kingdom.svg";
import GetInTouch from "../common/GetInTouch";
import { LocationBtn, SubmitBtn } from "../common/Buttons";

function Contact() {
  return (
    <>
      <section className="max-w-6xl mx-auto relative z-10 font-jost">
        <div className="relative home-header py-16 px-6 md:px-14 md:mx-10 md:rounded-[15px] xl:px-24">
          <div className=" text-white text-center flex flex-col  gap-6 md:text-start xl:flex-row xl:gap-14">
            <div className="space-y-5 xl:basis-1/2 self-center">
              <h1 className="home-title font-medium">Contact Us</h1>
              <p className="paragraph-text md:pe-20 xl:pe-0">
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </p>
            </div>
            <form className="w-full xl:basis-1/2 xl:ps-8">
              <div className="flex flex-col items-center justify-center gap-6 font-jost">
                <div className="border-b border-white py-2 w-full">
                  <input
                    className="appearance-none bg-transparent border-none text-white px-2 leading-tight focus:outline-none placeholder-red-200 text-[15px]"
                    type="text"
                    placeholder="Name"
                    aria-label="Full name"
                  />
                </div>
                <div className="border-b border-white py-2 w-full">
                  <input
                    className="appearance-none bg-transparent border-none text-white px-2 leading-tight focus:outline-none placeholder-red-200 text-[15px]"
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email"
                  />
                </div>
                <div className="border-b border-white py-2 w-full">
                  <input
                    className="appearance-none bg-transparent border-none text-white px-2 leading-tight focus:outline-none placeholder-red-200 text-[15px]"
                    type="number"
                    placeholder="Phone"
                    aria-label="Phone"
                  />
                </div>
                <div className="border-b border-white pt-2 pb-20 w-full">
                  <input
                    className="appearance-none bg-transparent border-none text-white px-2 leading-tight focus:outline-none placeholder-red-200 text-[15px]"
                    type="text"
                    placeholder="Your Message"
                    aria-label="Message"
                  />
                </div>
                <SubmitBtn />
              </div>
            </form>
          </div>
        </div>
      </section>
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
    </>
  );
}

export default Contact;
