import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Warmup from "./components/Warmup";
import ExercisePage from "./pages/ExercisePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/warmup" element={<Warmup />} />
        <Route path="/exercise/:id" element={<ExercisePage />} />
      </Routes>
    </Router>
  );
}

export default App;