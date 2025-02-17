import React from "react";
import { FaExchangeAlt, FaHeart } from "react-icons/fa";
import { GiCarSeat, GiGasPump } from "react-icons/gi";
import { TbAutomaticGearbox } from "react-icons/tb";
import { Link } from "react-router-dom";

const CarCard = ({ img, price, title, description }) => {
  return (
    <Link
      to="/"
      className="w-full border border-zinc-800 bg-zinc-900/15 rounded-xl p-4 space-y-5 "
    >
      <div className="w-full h-[28vh] bg-zinc-900 rounded-lg">
        <img
          src={img}
          alt=""
          className="w-full h-full object-contain object-center"
        />
      </div>

      <div className="space-y-5 px-2">
        <div className="space-y-2">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl text-zinc-50 font-semibold">{price}</h2>
            <div className="flex items-center gap-x-3">
              <button
                type="button"
                className="flex items-center justify-center text-zinc-100 bg-zinc-800/40 hover:bg-zinc-700/40 focus:outline-none rounded-xl text-base font-normal w-10 h-8 ease-in-out duration-30 relative"
              >
                <FaHeart />
              </button>
              <button
                type="button"
                className="flex items-center justify-center text-zinc-100 bg-zinc-800/40 hover:bg-zinc-700/40 focus:outline-none rounded-xl text-base font-normal w-10 h-8 ease-in-out duration-30 relative"
              >
                <FaExchangeAlt />
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xl text-zinc-50 font-semibold">{title}</h3>
            <p className="text-xs text-zinc-400 font-normal line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        <hr className="border-zinc-800 my-3 border" />

        <div className="w-full flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-x-1">
            <GiGasPump />
            <p className="text-xs text-zinc-400 font-normal">Petrol</p>
          </div>

          <div className="w-1 h-1 rounded-full bg-zinc-700"></div>

          <div className="flex items-center gap-x-1">
            <GiCarSeat />
            <p className="text-xs text-zinc-400 font-normal">5 Seats</p>
          </div>

          <div className="w-1 h-1 rounded-full bg-zinc-700"></div>

          <div className="flex items-center gap-x-1">
            <TbAutomaticGearbox />
            <p className="text-xs text-zinc-400 font-normal">Automatic</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
