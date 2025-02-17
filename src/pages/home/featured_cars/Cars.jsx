import React from "react";
import Layout from "../../../components/layout/Layout";
import { GoArrowUpRight } from "react-icons/go";
import CarCard from "../../../components/car/CarCard";
import CarImg from "../../../assets/hero2.png";
import CarImg2 from "../../../assets/hero.png";

const Cars = () => {
  return (
    <Layout className="space-y-10">
      <div className="w-full flex items-center justify-center text-center space-y-3 flex-col">
        <h6 className="text-lg text-zinc-300 uppercase font-medium">
          What brands we offer?
        </h6>
        <h1 className="md:text-5xl text-2xl font-bold text-zinc-50 uppercase tracking-wide">
          Featured <span className="text-red-600">Cars</span>
        </h1>
      </div>

      {/* Tabs Section */}

      <div className="py-5">
        {/* Tab Buttons */}
        <div className="w-full flex items-center justify-center">
          <div className="w-fit mb-8 flex items-center justify-center p-2 bg-zinc-800 rounded-full">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-styled-tab"
              data-tabs-toggle="#default-styled-tab-content"
              data-tabs-active-classes="bg-zinc-900 text-red-600 hover: text-red-600"
              data-tabs-inactive-classes="bg-transparent text-zinc-400"
              role="tablist"
            >
              <li className="me-2" role="presentation">
                <button
                  className="inline-block md:px-5 px-4 py-3 rounded-full"
                  id="all-cars-styled-tab"
                  data-tabs-target="#styled-all-cars"
                  type="button"
                  role="tab"
                  aria-controls="all-cars"
                  aria-selected="false"
                >
                  All Cars
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="inline-block md:px-5 px-4 py-3 rounded-full"
                  id="luxury-cars-styled-tab"
                  data-tabs-target="#styled-luxury-cars"
                  type="button"
                  role="tab"
                  aria-controls="luxury-cars"
                  aria-selected="false"
                >
                  Luxury
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="inline-block md:px-5 px-4 py-3 rounded-full"
                  id="sports-cars-styled-tab"
                  data-tabs-target="#styled-sports-cars"
                  type="button"
                  role="tab"
                  aria-controls="sports-cars"
                  aria-selected="false"
                >
                  Sports
                </button>
              </li>
              <li role="presentation">
                <button
                  className="inline-block md:px-5 px-4 py-3 rounded-full"
                  id="used-cars-styled-tab"
                  data-tabs-target="#styled-used-cars"
                  type="button"
                  role="tab"
                  aria-controls="used-cars"
                  aria-selected="false"
                >
                  Used Cars
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Tabs Content */}
        <div id="default-styled-tab-content">
          {/* All Cars */}
          <div
            className="hidden p-4 rounded-lg"
            id="styled-all-cars"
            role="tabpanel"
            aria-labelledby="all-cars-tab"
          >
            <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 sm:gap-4 gap-8">
              <CarCard
                img={CarImg}
                price={"$250,000"}
                title={"BMW M8"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
                }
              />
              <CarCard
                img={CarImg2}
                price={"$100,000"}
                title={"BMW M2"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
                }
              />
              <CarCard
                img={CarImg}
                price={"$250,000"}
                title={"BMW M8"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
                }
              />
              <CarCard
                img={CarImg2}
                price={"$250,000"}
                title={"BMW M8"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
                }
              />
            </div>
          </div>
          {/* Luxury Cars */}
          <div
            className="hidden p-4 rounded-lg"
            id="styled-luxury-cars"
            role="tabpanel"
            aria-labelledby="luxury-cars-tab"
          >
            <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 sm:gap-4 gap-8">
              <CarCard
                img={CarImg}
                price={"$250,000"}
                title={"BMW M8"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
                }
              />
              <CarCard
                img={CarImg2}
                price={"$100,000"}
                title={"BMW M2"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
                }
              />
              <CarCard
                img={CarImg}
                price={"$250,000"}
                title={"BMW M8"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
                }
              />
            </div>
          </div>
          {/* Sports Cars */}
          <div
            className="hidden p-4 rounded-lg"
            id="styled-sports-cars"
            role="tabpanel"
            aria-labelledby="sports-cars-tab"
          >
            <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 sm:gap-4 gap-8">
              <CarCard
                img={CarImg}
                price={"$250,000"}
                title={"BMW M8"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
                }
              />
              <CarCard
                img={CarImg}
                price={"$250,000"}
                title={"BMW M8"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
                }
              />
            </div>
          </div>
          {/* Used Cars */}
          <div
            className="hidden p-4 rounded-lg"
            id="styled-used-cars"
            role="tabpanel"
            aria-labelledby="used-cars-tab"
          >
            <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 sm:gap-4 gap-8">
              <CarCard
                img={CarImg2}
                price={"$100,000"}
                title={"BMW M2"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
                }
              />
              <CarCard
                img={CarImg}
                price={"$250,000"}
                title={"BMW M8"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
                }
              />
              <CarCard
                img={CarImg2}
                price={"$250,000"}
                title={"BMW M8"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}

      <button className="w-full flex items-center justify-center">
        <button className="border border-zinc-30 text-zinc-300 md:px-6 px-3.5 md:py-4 py-2 rounded-full uppercase md:text-base text-sm font-medium group flex items-center justify-center md:gap-x-3 gap-x-1.5 ease-in-out duration-300">
          View All Cars
          <GoArrowUpRight className="text-xl group-hover:rotate-45 ease-in-out duration-300" />
        </button>
      </button>
    </Layout>
  );
};

export default Cars;
