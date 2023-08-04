import React from "react";
import { BlogType } from "../types/types";
import Image from "next/image";
import BlogItem from "./BlogItem";

type FeaturedBlogsProps = {
  blogs: BlogType[];
};

const FeaturedBlogs: React.FC<FeaturedBlogsProps> = ({ blogs }) => {
  return (
    <section className="sec-blog bg0 p-t-60 p-b-90">
      <div className="container">
        <div className="p-b-66">
          <h3 className="ltext-105 cl5 txt-center respon1">Our Blogs</h3>
        </div>

        <div className="row">
          {/* blog skeleton */}

          {(blogs ?? []).map((blog) => (
            <div key={blog.id} className="col-sm-6 col-md-4 p-b-40">
              <BlogItem {...blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
