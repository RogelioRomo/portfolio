import { BrowserRouter } from 'react-router-dom'
import { NavCard } from './components/NavCard/NavCard'
import { ProfileCard } from './components/ProfileCard/ProfileCard'
import { FooterCard } from './components/FooterCard/FooterCard'
import { InfoSection } from './components/InfoSection/InfoSection'
import { ProjectSection } from './components/ProjectSection/ProjectSection'
import { ContactCard } from './components/ContactCard/ContactCard'
import { Element } from 'react-scroll'
import { ProjectSection2 } from './components/ProjectSection/ProjectSection2'
import { ProjectSection3 } from './components/ProjectSection/ProjectSection3'

function App () {
  return (
    <>
      <BrowserRouter>
        <Element name='topCardSection'><NavCard /></Element>
        <ProfileCard />
        <InfoSection />
        <Element name='contactCardSection'><ContactCard /></Element>
        <Element name='projectCardSection'><ProjectSection /></Element>
        <Element name='projectCardSection'><ProjectSection2 /></Element>
        <Element name='projectCardSection'><ProjectSection3 /></Element>
        <FooterCard />
      </BrowserRouter>
    </>
  )
}

export default App
