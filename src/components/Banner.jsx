import { PiMonitorBold } from "react-icons/pi";
import { FaTags } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "/src/assets/banner/assassin.jpg";
import img2 from "/src/assets/banner/cod.jpg";
import img3 from "/src/assets/banner/egypt.jpg";
import img4 from "/src/assets/banner/nfs.jpg";
import img5 from "/src/assets/banner/valorant.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const slides = [
    {
      gameName: "Assassin's Creed",
      gameImg: img1,
      gameDescription:
        "An action-adventure game where players explore historical settings, utilizing stealth, parkour, and combat to navigate the world and uncover secrets in a battle between Assassins and Templars.",
      platforms: "PlayStation, Xbox, PC, Nintendo Switch, Stadia",
      category: "Action, Adventure, Stealth, Open-world",
    },
    {
      gameName: "Call of Duty",
      gameImg: img2,
      gameDescription:
        "A fast-paced first-person shooter that features intense multiplayer combat and cinematic campaigns, set in various historical and modern warfare contexts.",
      platforms: "PlayStation, Xbox, PC, Nintendo Switch, Mobile",
      category: "First-person Shooter, Multiplayer, Action",
    },
    {
      gameName: "Egypt and World",
      gameImg: img3,
      gameDescription:
        "An exploration game set in ancient Egypt, where players uncover secrets of the past while solving puzzles and experiencing the culture and mythology of one of history's greatest civilizations.",
      platforms: "PC, PlayStation, Xbox",
      category: "Adventure, Exploration, History",
    },
    {
      gameName: "Return of the Cars",
      gameImg: img4,
      gameDescription:
        "A racing game offering fast-paced action with a variety of vehicles and tracks, featuring both single-player and multiplayer modes with dynamic environments.",
      platforms: "PlayStation, Xbox, PC, Nintendo Switch",
      category: "Racing, Sports, Simulation",
    },
    {
      gameName: "Valorant",
      gameImg: img5,
      gameDescription:
        "A tactical first-person shooter combining precise gunplay with unique character abilities, focusing on strategy and teamwork in objective-based combat.",
      platforms: "PC",
      category: "First-person Shooter, Tactical, Multiplayer",
    },
  ];
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            className="bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.gameImg})`,
            }}
          >
            <div className="flex h-120 lg:h-[calc(100vh-120px)]  flex-col justify-center items-center text-center text-white">
              <div className="absolute w-full h-full bg-black opacity-30"></div>
              <div className="hidden md:flex gap-6 z-10 font-medium">
                <p className="flex items-center gap-2">
                  <PiMonitorBold className="text-red-500 text-lg" />
                  {slide.platforms}
                </p>
                <p className="flex items-center gap-2">
                  <FaTags className="text-red-500 text-lg" />
                  {slide.category}
                </p>
              </div>
              <h2 className="text-4xl lg:text-7xl uppercase font-titillium font-black mt-2 z-10">
                {slide.gameName}
              </h2>
              <p className="w-3/4 md:w-1/2 md:text-lg font-poppins mt-4 z-10 ">
                {slide.gameDescription}
              </p>
              <Link
                to="https://www.youtube.com/"
                className="btn btn-lg bg-red-500 border-0 text-white font-poppins mt-8 z-10"
              >
                Explore All
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
