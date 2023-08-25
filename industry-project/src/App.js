import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./components/Onboarding/Onboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/compare" />
        <Route path="/details" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
