import { BrowserRouter } from "react-router-dom";
import { NavCard } from './components/NavCard/NavCard';
import { ProfileCard } from './components/ProfileCard/ProfileCard';
import { FooterCard } from './components/FooterCard/FooterCard';
import { InfoSection } from './components/InfoSection/InfoSection';
import { ProjectSection } from "./components/ProjectSection/ProjectSection";
import { ContactCard } from "./components/ContactCard/ContactCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavCard/>
        <ProfileCard/>
        <InfoSection/>
        <ContactCard/>
        <ProjectSection/>
        <FooterCard/>
      </BrowserRouter>
    </>
  )
}

export default App
