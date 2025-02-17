import React from "react";
import Layout from "../../../components/layout/Layout";
import BlogCard from "../../../components/blog/BlogCard";

const Blogs = () => {
  return (
    <Layout className="space-y-10">
      <div className=" w-full flex items-center justify-center text-center space-y-3 flex-col">
        <h6 className="text-lg text-zinc-300 uppercase font-medium">
          What new on our blog?
        </h6>
        <h1 className="md:text-5xl text-2xl font-bold text-zinc-50 uppercase tracking-wide">
          Latest <span className="text-red-600">Blogs</span>
        </h1>
      </div>

      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-12 md:py-12 py-5">
        <BlogCard
          img={
            "https://images.caricos.com/a/abt/2013_abt_as5/images/1920x1080/2013_abt_as5_1_1920x1080.jpg"
          }
          title={"New Car is Coming in our showroom"}
          description={
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
          }
        />
        <BlogCard
          img={
            "https://avatars.mds.yandex.net/get-verba/787013/2a0000018008fc7225a4ccf487ea6ee37169/cattouchret"
          }
          title={"New Car is Coming in our showroom"}
          description={
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
          }
        />
        <BlogCard
          img={
            "https://avatars.mds.yandex.net/get-mpic/4880383/img_id3509059054532467148.jpeg/orig"
          }
          title={"New Car is Coming in our showroom"}
          description={
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint voluptatibus quidem vel tenetur vero."
          }
        />
      </div>
    </Layout>
  );
};

export default Blogs;
