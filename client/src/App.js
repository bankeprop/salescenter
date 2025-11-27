import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DamacIsland from './Pages/Damac/DamacIsland';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/DamacIsland" />} />
        <Route path="/Damac" element={<DamacIsland />} />
        {/* <Route path="/Damac" element={<DamacIsland />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
