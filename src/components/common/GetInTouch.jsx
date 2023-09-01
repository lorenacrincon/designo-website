import React from "react";
import { GetInTouchBtn } from "./Buttons";
import { AnimationX } from "./Animations";

function GetInTouch() {
  return (
    <AnimationX>
      <div className="absolute z-50 contact-box text-white mx-6 md:mx-10 py-12 md:py-16 -top-64 xl:-top-52 xl:w-[1072px]">
        <div className=" font-jost text-center space-y-6 px-8 md:px-36 xl:flex xl:flex-row xl:justify-between xl:items-center xl:text-start xl:px-20">
          <div className="basis-1/2 space-y-4">
            <h3 className="contact-title md:px-10 xl:px-0">
              Let’s talk about <br />
              your project
            </h3>
            <p className="paragraph-text pb-5 xl:pb-0">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <GetInTouchBtn />
        </div>
      </div>
    </AnimationX>
  );
}

export default GetInTouch;
