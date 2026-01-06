import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DamacIsland from './Pages/Damac/DamacIsland';
import EmaarValley from './Pages/Emaar/EmaarValley';
import EmaarvalleyThanks from './Pages/Emaar/EmaarValleyThank'
import EmaarHeight from './Pages/Emaar/EmaarHeight';
import MercedesBenzPlaces from './Pages/Binghati/MercedesBenzPlaces';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/DamacIsland" />} /> */}
        <Route path="/Damac/DamacIsland" element={<DamacIsland />} />
        <Route path="/Emaar/EmaarTheValley" element={<EmaarValley />} />
        <Route path="/EmaarvalleyThanks" element={<EmaarvalleyThanks />} />
        <Route path="/Emaar/EmaarHeights" element={<EmaarHeight />} />
        <Route path="/Binghatti/MercedesBenzPlaces" element={<MercedesBenzPlaces />} />
      </Routes>
    </Router>
  );
}

export default App;
