import React from "react";
import Layout from "../../../components/layout/Layout";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <Layout className={"pt-16"}>
      <div className="w-full bg-zinc-900 py-5 px-7 rounded-xl relative">
        <div className="md:w-fit w-[65%] md:px-6 px-4 pt-3 pb-2 flex items-center justify-center rounded-xl bg-zinc-900 text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="md:text-3xl text-xl font-bold text-zinc-50 uppercase tracking-wide">
            Find your <span className="text-red-600">Cars</span>
          </h1>
        </div>

        <div className="pt-8 pb-5">
          <div className="w-full grid md:grid-cols-7 grid-cols-2 gap-10 items-center">
            <div className="w-full h-14 col-span-2 border border-zinc-700 rounded-xl px-3">
              <select className="w-full h-full bg-zinc-900 focus:outline-none rounded-xl">
                <option selected>CAR TYPE</option>
                <option value="luxury">Luxury</option>
                <option value="suv">SUV</option>
                <option value="normal">Normal</option>
                <option value="used">Used</option>
              </select>
            </div>

            <div className="w-full h-14 col-span-2 border border-zinc-700 rounded-xl px-3">
              <select className="w-full h-full bg-zinc-900 focus:outline-none rounded-xl">
                <option selected>BRAND</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                <option value="toyota">Toyota</option>
                <option value="byd">BYD</option>
              </select>
            </div>

            <div className="w-full h-14 col-span-2 border border-zinc-700 rounded-xl px-3">
              <select className="w-full h-full bg-zinc-900 focus:outline-none rounded-xl">
                <option selected>MODEL</option>
                <option value="sports">Sports</option>
                <option value="adventure">Adventure</option>
                <option value="normal">Normal</option>
                <option value="used">Used</option>
              </select>
            </div>

            <button className="w-full h-14 md:col-span-1 col-span-2 rounded-xl bg-red-600 text-base text-zinc-50 font-medium uppercase flex items-center justify-center gap-x-2">
              <FaSearch /> Search
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
