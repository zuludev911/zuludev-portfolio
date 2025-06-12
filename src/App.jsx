import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PolicyScreen from "./PolicyScreen";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/private-policy-truthordareapp" element={<PolicyScreen />} />
    </Routes>
  );
}

export default App;
