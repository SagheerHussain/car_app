import React from "react";
import Layout from "../../../components/layout/Layout";
import HeroImg from "../../../assets/hero2.png";
import { GoArrowUpRight } from "react-icons/go";

export const Hero = () => {
  return (
    <div className="w-full md:h-screen h-auto pt-[9ch] relative flex items-center justify-center z-30">
      <Layout
        className={"flex items-center justify-between gap-16 z-50 flex-wrap"}
      >
        {/* Hero Content */}
        <div className="w-full md:w-[40%] md:space-y-16 space-y-8">
          <div className="space-y-5">
            <div className="space-y-1">
              <h6 className="text-lg text-zinc-300 font-medium uppecase">
                New Arrivals
              </h6>
              <h1 className="md:text-7xl sm:text-5xl text-4xl text-zinc-50 font-bold uppercase !leading-[1.3]">
                find your next dream <span className="text-red-600">Car</span>
              </h1>
            </div>
            <p className="text-sm md:text-base text-zinc-400 font-normal">
              Enjoy the freedom of driving your dream car with skynetsilicon.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              nesciunt voluptas corporis asperiores velit vel odit at
              perferendis eveniet nam rerum, reiciendis exercitationem
              architecto voluptates.
            </p>
          </div>
          <div className="items-center flex md:gap-5 gap-3 flex-wrap">
            <button className="btn bg-red-700 text-zinc-50 md:px-6 px-3.5 md:py-4 py-2.5 rounded-full uppercase text-base font-medium group flex items-center justify-center md:gap-x-3 gap-x-1 5 ease-in-out duration-300">
              Request Test Drive
              <GoArrowUpRight className="text-xl group-hover:rotate-45 ease-in-out duration-300" />
            </button>
            <button className="border border-zinc-30 text-zinc-300 md:px-6 px-3.5 md:py-4 py-2 rounded-full uppercase md:text-base text-sm font-medium group flex items-center justify-center md:gap-x-3 gap-x-1.5 ease-in-out duration-300">
              Learn More
              <GoArrowUpRight className="text-xl group-hover:rotate-45 ease-in-out duration-300" />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-[55%] w-full h-auto">
          <img src={HeroImg} alt="" className="w-full" />
        </div>
      </Layout>

      {/* right car shadow circle */}
      <div className="absolute md:flex hidden rounded-full w-[1000px] h-[650px] -top-24 -right-96 -rotate-[365] bg-gradient-to-r from-red-950/80  via-zinc-950 to transparent" />
    </div>
  );
};

export default Hero;
