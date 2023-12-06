import { BrowserRouter } from "react-router-dom";
import { NavCard } from './components/navCard/navCard'
import { ProfileCard } from "./components/profileCard/profileCard";
import { FooterCard } from "./components/FooterCard/FooterCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavCard/>
        <ProfileCard/>
        <FooterCard/>
      </BrowserRouter>
    </>
  )
}

export default App
