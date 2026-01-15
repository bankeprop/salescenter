import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DamacIsland from './Pages/Damac/DamacIsland';
import DamacIslandsThanks from './Pages/Damac/DamacIslandsThanks';
import EmaarValley from './Pages/Emaar/EmaarValley';
import EmaarvalleyThanks from './Pages/Emaar/EmaarValleyThank'
import EmaarHeight from './Pages/Emaar/EmaarHeight';
import MercedesBenzPlaces from './Pages/Binghati/MercedesBenzPlaces';
import MercedesThankYou from './Pages/Binghati/MercedesThankYou';
import YasCanel from './Pages/Ohana/YasCanel';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/DamacIsland" />} /> */}
        <Route path="/Damac/DamacIsland" element={<DamacIsland />} />
        <Route path="/Damac/DamacIslandThanks" element={<DamacIslandsThanks />} />
        <Route path="/Emaar/EmaarTheValley" element={<EmaarValley />} />
        <Route path="/EmaarvalleyThanks" element={<EmaarvalleyThanks />} />
        <Route path="/Emaar/EmaarHeights" element={<EmaarHeight />} />
        <Route path="/Binghatti/MercedesBenzPlaces" element={<MercedesBenzPlaces />} />
        <Route path="/Binghatti/ThankYou" element={<MercedesThankYou />} />
        <Route path="/Ohana/YasCanel" element={<YasCanel />} />

      </Routes>
    </Router>
  );
}

export default App;
