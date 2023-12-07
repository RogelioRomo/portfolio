import { BrowserRouter } from "react-router-dom";
import { NavCard } from './components/NavCard/NavCard';
import { ProfileCard } from './components/ProfileCard/ProfileCard';
import { FooterCard } from './components/FooterCard/FooterCard';
import { InfoSection } from './components/InfoSection/InfoSection';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavCard/>
        <ProfileCard/>
        <InfoSection/>
        <FooterCard/>
      </BrowserRouter>
    </>
  )
}

export default App
