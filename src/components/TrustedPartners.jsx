import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const TrustedPartners = () => {
  const [logos, setLogos] = useState();

  useEffect(() => {
    fetch("logos.json")
      .then((res) => res.json())
      .then((data) => setLogos(data));
  }, []);
  return (
    <div className="text-center mt-16">
      <h2 className="text-4xl font-titillium font-bold text-gray-700">
        Trusted Partners
      </h2>
      <div className="border-2 w-10 m-auto border-red-500 my-2"></div>
      <div className="bg-gray-600 py-12">
        <Marquee pauseOnHover gradient gradientWidth>
          {logos?.map((logo, idx) => (
            <img
              key={idx}
              className="w-32 grayscale hover:grayscale-0 mx-5 transition-all duration-300"
              src={logo.url}
            ></img>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedPartners;
