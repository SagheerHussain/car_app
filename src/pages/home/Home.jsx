import React from "react";
import Hero from "./hero/Hero";
import Category from "./category/Category";
import Search from "./search/Search";
import Services from "./services/Services";
import Cars from "./featured_cars/Cars";
import Banner from "./banner/Banner";
import Blogs from "./blogs/Blogs";

const Home = () => {
  return (
    <div className="w-full space-y-16 pb-12">
      {/* {Hero} */}
      <Hero />

      {/* Car caterory  */}
      <Category />

      {/* {Car Search} */}
      <Search />

      {/* {Services} */}
      <Services />

      {/* {Cars} */}
      <Cars />

      {/* {Banner} */}
      <Banner />

      {/* {Blogs} */}
      <Blogs />
    </div>
  );
};

export default Home;
