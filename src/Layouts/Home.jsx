import React from "react";
import TrendingGames from "../components/TrendingGames";
import TrustedPartners from "../components/TrustedPartners";
import Reviews from "../components/Reviews";
import BlogAndNews from "../components/BlogAndNews";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TrendingGames></TrendingGames>
      <TrustedPartners></TrustedPartners>
      <Reviews></Reviews>
      <BlogAndNews></BlogAndNews>
    </div>
  );
};

export default Home;
