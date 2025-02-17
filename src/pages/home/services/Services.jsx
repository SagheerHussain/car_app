import React from "react";
import Layout from "../../../components/layout/Layout";
import { GoArrowUpRight } from "react-icons/go";
import ServiceCard from "../../../components/service/ServiceCard";
import { IoCarSport } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdCarRepair, MdPayments } from "react-icons/md";

const Services = () => {
  return (
    <Layout>
      <div className="w-full flex items-center justify-between gap-20 flex-wrap">
        <div className="md:w-[38%] w-full md:space-y-10 space-y-7">
          <div className="space-y-7">
            <div className="space-y-2">
              <h6 className="text-lg text-zinc-300 uppercase font-medium">
                How it works?
              </h6>
              <h1 className="md:text-5xl text-2xl font-bold text-zinc-50 uppercase tracking-wide">
                Our <span className="text-red-600">Services</span>
              </h1>
            </div>
            <p className="text-base text-zinc-50 font-normal">
              We offer range of services to help you find the perfect car. we
              have team of experts who are here to help you. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Earum sint voluptatibus
              quidem vel tenetur vero.
            </p>
          </div>
          <button className="border border-zinc-30 text-zinc-300 md:px-6 px-3.5 md:py-4 py-2 rounded-full uppercase md:text-base text-sm font-medium group flex items-center justify-center md:gap-x-3 gap-x-1.5 ease-in-out duration-300">
            Explore More
            <GoArrowUpRight className="text-xl group-hover:rotate-45 ease-in-out duration-300" />
          </button>
        </div>

        <div className="flex-1">
          <div className="w-full grid md:grid-cols-2 grid-cols-l gap-10">
            <ServiceCard
              icon={IoCarSport}
              title={"wide range of brands"}
              description="An extensive variety of well-known and respected brands."
            />
            <ServiceCard
              icon={VscWorkspaceTrusted}
              title={"Trusted Clients"}
              description="Reliable service that instills confidence and is trusted by clients"
            />
            <ServiceCard
              icon={MdPayments}
              title={"Secure Payments"}
              description="Secure payments protects your data with advanced encryption'"
            />
            <ServiceCard
              icon={MdCarRepair}
              title={"Free Repair"}
              description="Free repair covers all costs for fixing your vehicle, with no charge to you."
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
