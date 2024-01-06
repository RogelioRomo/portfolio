import { BrowserRouter } from 'react-router-dom'
import { NavCard } from './components/NavCard/NavCard'
import { ProfileCard } from './components/ProfileCard/ProfileCard'
import { FooterCard } from './components/FooterCard/FooterCard'
import { InfoSection } from './components/InfoSection/InfoSection'
import { ProjectSection } from './components/ProjectSection/ProjectSection'
import { ContactCard } from './components/ContactCard/ContactCard'
import { Element } from 'react-scroll'

function App () {
  return (
    <>
      <BrowserRouter>
        <Element name='topCardSection'><NavCard /></Element>
        <ProfileCard />
        <InfoSection />
        <Element name='contactCardSection'><ContactCard /></Element>
        <Element name='projectCardSection'><ProjectSection /></Element>
        <FooterCard />
      </BrowserRouter>
    </>
  )
}

export default App
