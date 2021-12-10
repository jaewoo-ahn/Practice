import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './Practice/Page';
import FeatureLarge from './Practice/FeatureLagrge/FeatureLarge';
import IntroduceCard from './Practice/IntroduceCard/IntroduceCard';
import SmallCard from './Practice/SmallCard/SmallCard';
import Market from './Practice/infinityscroll/Infinity';
import ButtonState from './Practice/buttonState/ButtonState';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/Large" element={<FeatureLarge />} />
        <Route path="Intro" element={<IntroduceCard />} />
        <Route path="/small" element={<SmallCard />} />
        <Route path="/infinit" element={<Market />} />
        <Route path="/buttonState" element={<ButtonState />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
