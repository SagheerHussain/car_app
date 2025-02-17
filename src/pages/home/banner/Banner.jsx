import React from "react";
import Layout from "../../../components/layout/Layout";
import BannerImg from "../../../assets/CarBanner.png";
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <Layout>
      <div className="w-full md:h-[70%] h-[40vh] rounded-2xl relative overflow-hidden">
        <img
          src={BannerImg}
          className="w-full h-full object-cover object-center"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center bg-gradient-r from-zinc-950/70 via-bg-transparent to transparent">
          <div className="md:w-1/2 w-full py-8 md:pl-12 pl-6 md:pr-8 pr-8">
            <h1 className="md:text-5xl text-2xl font-bold text-zinc-50 uppercase !leading-[1.3]">
              Ready to Ride <span className="text-red-600">Car</span>? <br />
              Book Now!
            </h1>
            <p className="text-lg text-zinc-400 font-normal mt-4 md:pr-16 pr-0">
              Our welcoming customer service team is available to assist you.
              Reach out anytime for support and inquiries.
            </p>
            <div className="items-center flex md:gap-5 gap-3 flex-wrap md:mt-10 mt-16">
              <button className="btn bg-red-700 text-zinc-50 md:px-6 px-3.5 md:py-4 py-2.5 rounded-full uppercase text-base font-medium group flex items-center justify-center md:gap-x-3 gap-x-1 5 ease-in-out duration-300">
                Reserve Now
                <GoArrowUpRight className="text-xl group-hover:rotate-45 ease-in-out duration-300" />
              </button>
              <button className="border border-zinc-30 text-zinc-300 md:px-6 px-3.5 md:py-4 py-2 rounded-full uppercase md:text-base text-sm font-medium group flex items-center justify-center md:gap-x-3 gap-x-1.5 ease-in-out duration-300">
                Contact Us
                <GoArrowUpRight className="text-xl group-hover:rotate-45 ease-in-out duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Banner;
