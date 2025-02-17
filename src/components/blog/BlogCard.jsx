import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ img, title, description }) => {
  return (
    <Link to="/" className="w-full h-auto rounded-xl overflow-hidden space-y-5">
      <img
        src={img}
        className="w-full aspect-video object-center object-cover rounded-xl"
      />

      <div className="space-y-2 px-2">
        <h1 className="text-2xl text-zinc-100 font-medium line-clamp-1">
          {title}
        </h1>
      </div>

      <p className="text-sm text-zinc-400 font-normal mt-4 line-clamp-2">
        {description}
      </p>
    </Link>
  );
};

export default BlogCard;
