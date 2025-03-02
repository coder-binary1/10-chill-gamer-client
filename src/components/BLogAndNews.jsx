import React, { useEffect, useState } from "react";

const BLogAndNews = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("newsAndBlogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="text-center my-12">
      <h2 className="text-3xl font-titillium font-bold text-gray-700">
        Blog & News
      </h2>
      <div className="border-2 w-10 m-auto border-red-500 my-2"></div>
      <div className="flex flex-wrap justify-center gap-6 mx-5">
        {blogs?.map((blog) => (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={blog.blog_image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p>{blog.details.split(" ", 25).join(" ")} ...</p>
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

export default BLogAndNews;
