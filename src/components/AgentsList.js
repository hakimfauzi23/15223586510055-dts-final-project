import React, { useEffect, useState } from "react";
import valorantApi from "../apis/valorantApi";

export const AgentsList = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const fetchedAgents = await valorantApi.get("agents");
        console.log(fetchedAgents.data.data);
        setAgents(fetchedAgents.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAgents();
  }, []);

  return (
    <>
      {agents.map((e) => {
        return <div key={e.uuid}>Agents : {e.displayName}</div>;
      })}
    </>
  );
};
