import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DamacIsland from './Pages/Damac/DamacIsland';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DamacIsland />} />
      </Routes>
    </Router>
  );
}

export default App;
