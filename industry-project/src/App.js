import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/compare" />
        <Route path="/details" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
