import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DamacIsland from './Pages/Damac/DamacIsland';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/DamacIsland" />} />
        <Route path="/DamacIsland" element={<DamacIsland />} />
      </Routes>
    </Router>
  );
}

export default App;
