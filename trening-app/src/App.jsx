import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Warmup from './components/Warmup'
import BenchPress from './components/exercises/BenchPress'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/warmup" element={<Warmup />}/>
                <Route path="/benchpress" element={<BenchPress />}/>
            </Routes>
        </Router>
    );
}

export default App;
