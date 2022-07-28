import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AgentList } from "./components/AgentList";
import { AgentDetail } from "./components/AgentDetail";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/agents"
          element={
            <>
              <AgentList />
            </>
          }
        />
        <Route path="/agent/:uuid" element={<AgentDetail />} />
      </Routes>
    </>
  );
}

export default App;
