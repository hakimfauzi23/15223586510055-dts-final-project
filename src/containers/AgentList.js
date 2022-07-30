import React, { useEffect, useState } from "react";
import { AgentCard } from "../components/AgentCard";
import valorantApi from "../apis/valorantApi";

export const AgentList = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const fetchedAgents = await valorantApi.get("agents");
        setAgents(fetchedAgents.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAgents();
  }, []);

  return (
    <>
      <AgentCard data={agents} />
    </>
  );
};
