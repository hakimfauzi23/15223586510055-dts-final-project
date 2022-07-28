import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import { Link } from "react-router-dom";

export const AgentCard = (data) => {
  const agents = data.data.filter((e) => e.isPlayableCharacter == true);

  return (
    <div className="flex flex-row bg-red-600 agents-image-container">
      <div
        className="uppercase section-label self-center"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        AGENTS
      </div>
      <Swiper
        navigation={true}
        spaceBetween={10}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {agents.map((e) => {
          return (
            <SwiperSlide>
              <Link to={`/agent/${e.uuid}`}>
                <div
                  key={e.uuid}
                  className=" bg-gray-800  rounded-t-lg relative w-48 h-96 my-32 ml-10 hover:bg-amber-400 cursor-pointer duration-300"
                >
                  <div className="w-full h-full overflow-hidden">
                    <img
                      className="object-center object-cover scale-125 ml-8"
                      id="agent-photo"
                      src={e.fullPortraitV2}
                      alt="phoenix"
                    />
                  </div>
                  <div
                    id="agent-origin"
                    className="absolute font-medium top-3 left-5  text-red-500"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    a.k.a {e.developerName}
                  </div>
                  <div
                    id="agent-name"
                    className="absolute top-2 -left-8 uppercase"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    {e.displayName}
                  </div>
                  <div className="absolute -bottom-3 -right-4 h-11 w-48 bg-gray-800 flex flex-row justify-evenly border-solid border-2 border-white">
                    {e.abilities.map((e) => {
                      return (
                        <img
                          className="agent-skills"
                          src={e.displayIcon}
                          alt=""
                        />
                      );
                    })}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
