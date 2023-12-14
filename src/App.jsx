import { BrowserRouter } from "react-router-dom";
import { NavCard } from './components/NavCard/NavCard';
import { ProfileCard } from './components/ProfileCard/ProfileCard';
import { FooterCard } from './components/FooterCard/FooterCard';
import { InfoSection } from './components/InfoSection/InfoSection';
import { ProjectSection } from "./components/ProjectSection/ProjectSection";
import { Spacer } from "./components/Spacer/Spacer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavCard/>
        <ProfileCard/>
        <InfoSection/>
        <Spacer text='contact.'/>
        <Spacer text='projects.'/>
        <ProjectSection/>
        <FooterCard/>
      </BrowserRouter>
    </>
  )
}

export default App
