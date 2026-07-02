import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import DamacIsland from './Pages/Damac/DamacIsland';
import DamacIslandsThanks from './Pages/Damac/DamacIslandsThanks';
import EmaarValley from './Pages/Emaar/EmaarValley';
import EmaarvalleyThanks from './Pages/Emaar/EmaarValleyThank'
import EmaarHeight from './Pages/Emaar/EmaarHeight';
import EmaarHeightThank from './Pages/Emaar/EmaarHeightThank';
import MercedesBenzPlaces from './Pages/Binghati/MercedesBenzPlaces';
import MercedesThankYou from './Pages/Binghati/MercedesThankYou';
import YasCanel from './Pages/Ohana/YasCanel';
import DamacLagoonValencia from './Pages/Damac/DamacLagoonValencia';
import DamacLagoonValenciaThanks from './Pages/Damac/DamacLagoonValenciaThanks';
import YasIsland from './Pages/Ohana/YasIsland';
import OhanaThanks from './Pages/Ohana/OhanaThanks';
import OfflineHome from './Pages/OfflineListing/OfflineHome';
import OfflineDetails from './Pages/OfflineListing/OfflineDetails';
import SamanaBusinessHub from './Pages/Samana/SamanaBusinessHub';
import SamanaBusinessHubThanks from './Pages/Samana/SamanaBusinessHubThanks';
import Generic from './Pages/generic';
import GenericThankYou from './Pages/GenericThankYou';
import { applyPageSeo, getSeoForPath } from './seo/applyPageSeo';

function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const applyCurrentPageSeo = () => applyPageSeo(getSeoForPath(pathname));
    applyCurrentPageSeo();

    const timeoutId = window.setTimeout(applyCurrentPageSeo, 0);
    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <SeoManager />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/DamacIsland" />} /> */}
        <Route path="/Damac/DamacIsland" element={<DamacIsland />} />
        <Route path="/Damac/DamacIslandThanks" element={<DamacIslandsThanks />} />
        <Route path="/Damac/DamacLagoonValencia" element={<DamacLagoonValencia />} />
        <Route path="/Damac/DamacLagoonValenciaThanks" element={<DamacLagoonValenciaThanks />} />

        <Route path="/Emaar/EmaarTheValley" element={<EmaarValley />} />
        <Route path="/EmaarvalleyThanks" element={<EmaarvalleyThanks />} />
        <Route path="/Emaar/EmaarHeights" element={<EmaarHeight />} />
        <Route path="/Emaar/EmaarHeightsThanks" element={<EmaarHeightThank />} />

        <Route path="/Binghatti/MercedesBenzPlaces" element={<MercedesBenzPlaces />} />
        <Route path="/Binghatti/ThankYou" element={<MercedesThankYou />} />

        <Route path="/Ohana/YasCanel" element={<YasCanel />} />
        <Route path="/Ohana/YasIsland" element={<YasIsland />} />
        <Route path="/Ohana/Thanks" element={<OhanaThanks />} />

        <Route path="/offline-listing" element={<OfflineHome />} />
        <Route path="/offline-listing/details/:listingId" element={<OfflineDetails />} />

        <Route path="/samana/samanabusinesshub" element={<SamanaBusinessHub />} />
        <Route path="/samana/samanabusinesshub/thanks" element={<SamanaBusinessHubThanks />} />

        <Route path="/sidra-1-dubai-hills-estate" element={<Generic />} />
        <Route path="/sidra-1-dubai-hills-estate/thank-you" element={<GenericThankYou />} />

        <Route path="/sitemap" element={<Navigate to="/sitemap.xml" replace />} />

      </Routes>
    </Router>
  );
}

export default App;
