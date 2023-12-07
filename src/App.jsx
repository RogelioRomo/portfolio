import { BrowserRouter } from "react-router-dom";
import { NavCard } from './components/navCard/navCard'
import { ProfileCard } from './components/profileCard/profileCard';
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
