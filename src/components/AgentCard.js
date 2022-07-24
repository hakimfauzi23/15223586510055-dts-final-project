import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "swiper/css";

export const AgentCard = (data) => {
  const agents = data.data.filter((e) => e.isPlayableCharacter == true);
  console.log(agents);

  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={5}
        spaceBetween={10}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {agents.map((e) => {
          return (
            <SwiperSlide>
              <div
                key={e.uuid}
                className=" bg-gray-800  rounded-t-lg relative w-48 h-96 m-10"
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
