import React, { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";

const BlogAndNews = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("newsAndBlogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="text-center my-16 font-poppins">
      <h2 className="text-4xl font-titillium font-bold text-gray-700">
        Blog & News
      </h2>
      <div className="border-2 w-10 m-auto border-red-500 my-2"></div>
      <div className="flex flex-wrap justify-center gap-6 mx-5 ">
        {blogs?.map((blog, idx) => (
          <div key={idx} className="card bg-base-100 w-96 shadow-sm group">
            <figure>
              <img
                className="group-hover:scale-110 transition-all duration-900 ease-in-out"
                src={blog.blog_image}
                alt="Shoes"
              />
            </figure>
            <div className="flex text-sm pt-2 justify-around">
              <div className="flex items-center gap-2 font-light">
                <MdOutlineDateRange className="text-red-500" />
                <p className="grow-0 text-left">{blog.published_date}</p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdPerson className="text-red-500" />
                <p className="grow-0 text-left">{blog.author}</p>
              </div>
              <div className="flex items-center gap-2">
                <IoReaderOutline className="text-red-500" />
                <p className="grow-0 text-left">{blog.read_time}</p>
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title text-lg">{blog.title}</h2>
              <p className="font-light">
                {blog.details.split(" ", 25).join(" ")} ...
              </p>
              <div className="card-actions justify-center">
                <button className="btn bg-red-500 text-white">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogAndNews;
