import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "swiper/css";
import { Link } from "react-router-dom";

export const AgentCard = (data) => {
  const [roleId, setRoleId] = useState("");
  const [agents, setAgent] = useState([]);
  const roles = data.data
    .filter((e) => e.isPlayableCharacter === true)
    .map((e) => {
      return e.role;
    })
    .filter((v, i, a) => a.findIndex((v2) => v2.uuid === v.uuid) === i);

  useEffect(() => {
    const fetchData = () => {
      const filteredAgent = data.data.filter(
        (e) => e.isPlayableCharacter === true
      );
      setAgent(filteredAgent);
    };
    const fetchDataByRole = () => {
      const filteredAgent = data.data.filter(
        (e) => e.isPlayableCharacter === true && e.role.uuid === roleId
      );
      setAgent(filteredAgent);
    };

    if (roleId) {
      fetchDataByRole();
    } else {
      fetchData();
    }
  }, [data, roleId]);

  return (
    <div className="flex flex-col bg-red-600 agents-image-container over">
      <div className="flex flex-row  justify-around w-2/3 ml-auto mr-auto p-5">
        <div className="uppercase section-label self-center text-5xl">
          FILTERS
        </div>
        <div className="flex flex-row w-3/4 justify-evenly ">
          {roles.map((e) => {
            return (
              <div className="flex flex-col items-center">
                <img
                  className={`w-20 hover:cursor-pointer duration-200 ${
                    roleId === e.uuid ? "scale-125" : "scale-100"
                  }`}
                  onClick={() => setRoleId(e.uuid)}
                  src={e.displayIcon}
                  alt=""
                />
                <p
                  className={`text-white font-semibold text-center mt-3 duration-200 ${
                    roleId === e.uuid ? "scale-125" : "scale-100"
                  }`}
                >
                  {e.displayName}
                </p>
              </div>
            );
          })}
          <div
            className={`flex flex-col items-center justify-center ${
              roleId ? "block" : "hidden"
            }`}
          >
            <button
              className="border-2 p-4 rounded-lg text-3xl font-extrabold text-white"
              onClick={() => setRoleId("")}
            >
              X
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-10">
        <div
          className="uppercase section-label self-center text-8xl"
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
          modules={[Navigation]}
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
                    className=" bg-gray-800  rounded-t-lg relative w-48 h-96 mb-20 mt-6 ml-10 hover:bg-amber-400 cursor-pointer duration-300"
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
                      className="absolute top-2 -left-10 uppercase"
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
    </div>
  );
};
