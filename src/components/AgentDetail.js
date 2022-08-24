import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import valorantApi from "../apis/valorantApi";

export const AgentDetail = () => {
  let params = useParams();
  const uuid = params?.uuid;
  const [agent, setAgent] = useState([]);

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        const fetchedAgent = await valorantApi.get(`agents/${uuid}`);
        setAgent(fetchedAgent.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAgent();
  }, [uuid]);

  console.log(agent);

  return (
    <div
      id="agent-detail-container"
      className="flex flex-row bg-red-600  agents-image-container overflow-hidden"
    >
      <div
        key={agent.uuid}
        id="agent-detail-information"
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col w-11/12">
          <div className="bg-neutral-100  h-80 rounded-t-lg shadow-md">
            <div className="p-6">
              <div className="font-semibold text-justify italic">
                "{agent.description}"
              </div>
              <div className="pt-5">
                <div className="font-semibold text-lg">Agent Information</div>
                <div>
                  <span className="font-semibold text-gray-500">Name : </span>
                  <span className="font-semibold">{agent?.displayName} </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-500">
                    CodeName :{" "}
                  </span>
                  <span className="font-semibold">{agent?.developerName} </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-500">Skills : </span>
                  <span className="font-semibold">
                    {agent.abilities
                      ?.filter(
                        (e) => e.slot !== "Ultimate" && e.slot !== "Passive"
                      )
                      .map((e) => (
                        <span className="capitalize" key={e.uuid}>
                          {e.displayName.toLowerCase()} |{" "}
                        </span>
                      ))}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-500">
                    Ultimate Skills :{" "}
                  </span>
                  <span className="font-semibold">
                    {agent.abilities
                      ?.filter((e) => e.slot === "Ultimate")
                      .map((e) => (
                        <span className="capitalize" key={e.uuid}>
                          {e.displayName.toLowerCase()}{" "}
                        </span>
                      ))}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-500">
                    Passive Skills :{" "}
                  </span>
                  <span className="font-semibold">
                    {agent.abilities
                      ?.filter((e) => e.slot === "Passive")
                      .map((e) => (
                        <span className="capitalize" key={e.uuid}>{e.displayName} </span>
                      ))}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-500">Role : </span>
                  <span className="font-semibold">
                    {agent.role?.displayName}{" "}
                    <span className="font-light text-sm">
                      ({agent.role?.description})
                    </span>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900  h-36 flex flex-row shadow-md">
            {agent.abilities
              ?.filter((e) => e.slot !== "Passive")
              .map((e, i) => {
                return (
                  <div
                    key={e.uuid}
                    className={
                      i < agent.abilities.length - 1
                        ? `flex flex-col justify-center items-center w-full border-r-2 `
                        : `flex flex-col justify-center items-center w-full`
                    }
                  >
                    <img
                      className=" w-1/5 object-cover"
                      src={e.displayIcon}
                      alt=""
                    />
                    <h3 className="text-white text-base text-center font-bold capitalize">
                      {e.displayName.toLowerCase()}
                    </h3>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div>
        <img
          className="-mr-32 object-cover"
          id="agent-detail-photo"
          src={agent.fullPortrait}
          alt={agent.developerName}
        />
      </div>
    </div>
  );
};
