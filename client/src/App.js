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
import DamacLagoonValencia from './Pages/Damac/DamacLagoonValencia';
import DamacLagoonValenciaThanks from './Pages/Damac/DamacLagoonValenciaThanks';
import YasIsland from './Pages/Ohana/YasIsland';
import OhanaThanks from './Pages/Ohana/OhanaThanks';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/DamacIsland" />} /> */}
        <Route path="/Damac/DamacIsland" element={<DamacIsland />} />
        <Route path="/Damac/DamacIslandThanks" element={<DamacIslandsThanks />} />
        <Route path="/Damac/DamacLagoonValencia" element={<DamacLagoonValencia />} />
        <Route path="/Damac/DamacLagoonValenciaThanks" element={<DamacLagoonValenciaThanks />} />

        <Route path="/Emaar/EmaarTheValley" element={<EmaarValley />} />
        <Route path="/EmaarvalleyThanks" element={<EmaarvalleyThanks />} />
        <Route path="/Emaar/EmaarHeights" element={<EmaarHeight />} />

        <Route path="/Binghatti/MercedesBenzPlaces" element={<MercedesBenzPlaces />} />
        <Route path="/Binghatti/ThankYou" element={<MercedesThankYou />} />

        <Route path="/Ohana/YasCanel" element={<YasCanel />} />
        <Route path="/Ohana/YasIsland" element={<YasIsland />} />
        <Route path="/Ohana/Thanks" element={<OhanaThanks />} />

      </Routes>
    </Router>
  );
}

export default App;
