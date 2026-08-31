import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import DamacIsland from './Pages/Damac/DamacIsland';
import DamacIslandsThanks from './Pages/Damac/DamacIslandsThanks';
import EmaarValley from './Pages/Emaar/EmaarValley';
import EmaarValleyWhatsapp from './Pages/Emaar/EmaarValleyWhatsapp';
import EmaarValleyWhatsappThanks from './Pages/Emaar/EmaarValleyWhatsappThanks';
import EmaarvalleyThanks from './Pages/Emaar/EmaarValleyThank'
import EmaarHeight from './Pages/Emaar/EmaarHeight';
import EmaarHeightThank from './Pages/Emaar/EmaarHeightThank';
import EmaarHeightsWhatsapp from './Pages/Emaar/EmaarHeightsWhatsapp';
import EmaarHeightsWhatsappThanks from './Pages/Emaar/EmaarHeightsWhatsappThanks';
import MercedesBenzPlaces from './Pages/Binghati/MercedesBenzPlaces';
import MercedesThankYou from './Pages/Binghati/MercedesThankYou';
import BinghattSpectreWhatsapp from './Pages/Binghati/BinghattSpectreWhatsapp';
import BinghattSpectreWhatsappThanks from './Pages/Binghati/BinghattSpectreWhatsappThanks';
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
import TheForge from './Pages/TheForge/TheForge';
import TheForgeThanks from './Pages/TheForge/TheForgeThanks';
import { applyPageSeo, getSeoForPath } from './seo/applyPageSeo';
import Hudriyat from './Pages/Modon/Hudriyat';
import HudriyatThanks from './Pages/Modon/HudriyatThanks';
import Obsidian from './Pages/Salboy/Obsidian';
import ObsidianThanks from './Pages/Salboy/ObsidianThanks';
import KingsRoad from './Pages/Berkeley/kingsRoad';
import KingsRoadThanks from './Pages/Berkeley/KingsRoadThanks';
import KingsroadForm from './Pages/Berkeley/KingsroadForm';
import KingsroadFormThanks from './Pages/Berkeley/KingsroadFormThanks';
import Valia from './Pages/Emaar/Valia';
import ValiaThanks from './Pages/Emaar/ValiaThanks';
import KingsRoadWhatsapp from './Pages/Berkeley/KingsRoadWhatsapp';
import KingsRoadWhatsappThanks from './Pages/Berkeley/KingsRoadWhatsappThanks';
import ObsidianWhatsapp from './Pages/Salboy/ObsidianWhatsapp';
import ObsidianWhatsappThanks from './Pages/Salboy/ObsidianWhatsappThanks';
import TheForgeWhatsapp from './Pages/TheForge/TheForgeWhatsapp';
import TheForgeWhatsappThanks from './Pages/TheForge/TheForgeWhatsappThanks';
import UKInvestmentHome from './Pages/UKInvestment/home';
import UKInvestmentThankYou from './Pages/UKInvestment/ThankYou';
import UKQuiz from './Pages/UKInvestment/ukQuiz';
import Nawroz from './Pages/nawroz';
import NawrozThanks from './Pages/NawrozThanks';
import NawrozFavicon from './Assests/Nawroz/favicon.jpeg';
import SamanaFavicon from './Assests/Samana/Samanafavicon.ico';
import EmaarValleyFavicon from './Assests/Emaar/EmaarValleyLogo.png';
import BinghattiFavicon from './Assests/Binghatti/Binghatti.png';

function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const applyCurrentPageSeo = () => {
      const seo = getSeoForPath(pathname);
      const normalizedPath = pathname.replace(/\/+$/, '') || '/';
      const isNawrozPage =
        normalizedPath === '/nawroz-mamdani' ||
        normalizedPath === '/nawroz-mamdani/thanks';
      const isEmaarValleyPage =
        normalizedPath === '/Emaar/EmaarTheValley' ||
        normalizedPath === '/emaar/emaar-valley-whatsapp' ||
        normalizedPath === '/emaar/emaar-valley-whatsapp/thanks' ||
        normalizedPath === '/EmaarvalleyThanks';
      const isSpectrePage =
        normalizedPath === '/binghatti/spectre-whatsapp' ||
        normalizedPath === '/binghatti/spectre-whatsapp/thanks';

      applyPageSeo(
        isNawrozPage
          ? { ...seo, favicon: `${NawrozFavicon}?v=nawroz-2` }
          : isEmaarValleyPage
          ? { ...seo, favicon: EmaarValleyFavicon }
          : isSpectrePage
          ? { ...seo, favicon: BinghattiFavicon }
          : normalizedPath === '/samana/samanabusinesshub' || normalizedPath === '/samana/samanabusinesshub/thanks'
          ? { ...seo, favicon: SamanaFavicon }
          : seo
      );
    };
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
        <Route path="/emaar/emaar-valley-whatsapp" element={<EmaarValleyWhatsapp />} />
        <Route path="/emaar/emaar-valley-whatsapp/thanks" element={<EmaarValleyWhatsappThanks />} />
        <Route path="/Emaar/EmaarHeights" element={<EmaarHeight />} />
        <Route path="/Emaar/EmaarHeightsThanks" element={<EmaarHeightThank />} />
        <Route path="/emaar/emaar-heights-whatsapp" element={<EmaarHeightsWhatsapp />} />
        <Route path="/emaar/emaar-heights-whatsapp/thanks" element={<EmaarHeightsWhatsappThanks />} />
        <Route caseSensitive path="/Emaar/Valia" element={<Navigate to="/emaar/valia" replace />} />
        <Route path="/emaar/valia" element={<Valia />} />
        <Route path="/emaar/valia/thanks" element={<ValiaThanks />} />
        <Route path="/berkeley/kings-road-whatsapp" element={<KingsRoadWhatsapp />} />
        <Route path="/berkeley/kings-road-whatsapp/thanks" element={<KingsRoadWhatsappThanks />} />
        <Route path="/obsidian-whatsapp" element={<ObsidianWhatsapp />} />
        <Route path="/obsidian-whatsapp/thanks" element={<ObsidianWhatsappThanks />} />
        <Route path="/theforge-whatsapp" element={<TheForgeWhatsapp />} />
        <Route path="/theforge-whatsapp/thanks" element={<TheForgeWhatsappThanks />} />

        <Route path="/Binghatti/MercedesBenzPlaces" element={<MercedesBenzPlaces />} />
        <Route path="/Binghatti/ThankYou" element={<MercedesThankYou />} />
        <Route path="/binghatti/spectre-whatsapp" element={<BinghattSpectreWhatsapp />} />
        <Route path="/binghatti/spectre-whatsapp/thanks" element={<BinghattSpectreWhatsappThanks />} />

        <Route path="/Ohana/YasCanel" element={<YasCanel />} />
        <Route path="/Ohana/YasIsland" element={<YasIsland />} />
        <Route path="/Ohana/Thanks" element={<OhanaThanks />} />

        <Route path="/offline-listing" element={<OfflineHome />} />
        <Route path="/offline-listing/details/:listingId" element={<OfflineDetails />} />

        <Route path="/samana/samanabusinesshub" element={<SamanaBusinessHub />} />
        <Route path="/samana/samanabusinesshub/thanks" element={<SamanaBusinessHubThanks />} />

        <Route path="/sidra-1-dubai-hills-estate" element={<Generic />} />
        <Route path="/sidra-1-dubai-hills-estate/thank-you" element={<GenericThankYou />} />

        <Route path="/theforge" element={<TheForge />} />
        <Route path="/theforge/thanks" element={<TheForgeThanks />} />

        <Route path="/hudayriyat" element={<Hudriyat />} />
        <Route path="/hudayriyat/thanks" element={<HudriyatThanks />} />

        <Route path="/obsidian" element={<Obsidian />} />
        <Route path="/obsidian/thanks" element={<ObsidianThanks />} />

        <Route caseSensitive path="/berkeley/kings-road" element={<KingsRoad />} />
        <Route caseSensitive path="/berkeley/kings-road/thanks" element={<KingsRoadThanks />} />
        <Route caseSensitive path="/berkeley/kings-road/form" element={<KingsroadForm />} />
        <Route caseSensitive path="/berkeley/kings-road/form/thanks" element={<KingsroadFormThanks />} />
        <Route caseSensitive path="/Berkeley/kings-road" element={<Navigate to="/berkeley/kings-road" replace />} />
        <Route caseSensitive path="/Berkeley/kings-road/thanks" element={<Navigate to="/berkeley/kings-road/thanks" replace />} />
        <Route caseSensitive path="/Berkeley/kings-road/form" element={<Navigate to="/berkeley/kings-road/form" replace />} />
        <Route caseSensitive path="/Berkeley/kings-road/form/thanks" element={<Navigate to="/berkeley/kings-road/form/thanks" replace />} />

        <Route path="/sitemap" element={<Navigate to="/sitemap.xml" replace />} />

        <Route path="/uk-investment" element={<UKInvestmentHome />} />
        <Route path="/uk-investment/thank-you" element={<UKInvestmentThankYou />} />
        <Route path="/invest-in-uk-Quiz" element={<UKQuiz />} />
        <Route path="/invest-in-uk-Quiz/thank-you" element={<Navigate to="/uk-investment/thank-you" replace />} />

        <Route path="/nawroz-mamdani" element={<Nawroz />} />
        <Route path="/nawroz-mamdani/thanks" element={<NawrozThanks />} />

      </Routes>
    </Router>
  );
}

export default App;
