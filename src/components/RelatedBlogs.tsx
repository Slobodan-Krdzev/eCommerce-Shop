import React from "react";
import { BlogType } from "../types/types";
import Image from "next/image";
import Link from "next/link";

type RelatedBlogsProps = {
  blogs: BlogType[];
};

const RelatedBlogs: React.FC<RelatedBlogsProps> = ({ blogs = [] }) => {

  console.log(blogs);
  
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {blogs.map((blog) => {
          return (
            <li className="mb-4" key={blog.id}>
              <Link href={`${blog.id}`}> 
              <a className="wrao-pic-w">
                <Image src={blog.img}
                  alt="PRODUCT"
                  className="img-fluid"
                  width={288.66}
                  height={199.94}/>

                <div className="p-t-8 mt-1">
                  <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">
                    {blog.title}
                  </div>
                </div>
              </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
