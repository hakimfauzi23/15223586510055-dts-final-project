import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AgentList } from "./components/AgentList";
import { AgentDetail } from "./components/AgentDetail";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
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
      <Footer />
    </>
  );
}

export default App;
