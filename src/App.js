import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AgentList } from "./containers/AgentList";
import { AgentDetail } from "./components/AgentDetail";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./containers/Login";
import { Register } from "./containers/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navbar />
              <AgentList />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/agents"
          element={
            <ProtectedRoute>
              <Navbar />
              <AgentList />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/agent/:uuid"
          element={
            <>
              <Navbar />
              <AgentDetail />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute loginOnly={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute loginOnly={false}>
              <Register />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
