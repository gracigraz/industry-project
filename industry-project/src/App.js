import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./components/Onboarding/Onboarding";
import Header from "./components/Header/Header";
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/compare" />
        <Route path="/details" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
