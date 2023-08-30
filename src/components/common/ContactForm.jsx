import React, { useState } from "react";
import { SubmitBtn } from "../common/Buttons";

function ContactForm() {
  return (
    <div className=" text-white text-center flex flex-col  gap-6 md:text-start xl:flex-row xl:gap-14">
      <div className="space-y-5 xl:basis-1/2 self-center">
        <h1 className="home-title font-medium">Contact Us</h1>
        <p className="paragraph-text md:pe-20 xl:pe-0">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <form className="w-full xl:basis-1/2 xl:ps-8">
        <div className="flex flex-col items-center justify-center gap-6 font-jost">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="full_name"
              id="full_name"
              className="block py-2.5 px-0 w-full text-[15px] text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-b-2 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="full_name"
              className="peer-focus:font-medium absolute text-red-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
            >
              <p className="text-[15px]">Name</p>
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-[15px] text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-b-2 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-[15px] text-red-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-[15px] text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-b-2 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-[15px] text-red-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
            >
              Phone
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="message"
              id="message"
              className="block pt-2.5 pb-20 px-0 w-full text-[15px] text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-b-2 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-[15px] text-red-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
            >
              Your Message
            </label>
          </div>

          <SubmitBtn />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
