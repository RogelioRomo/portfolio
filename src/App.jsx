import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Element } from 'react-scroll'
import { HomeSection } from './components/Sections/HomeSection/HomeSection.jsx'
import { ExpSection } from './components/Sections/ExpSection/ExpSection.jsx'
import { ProjectSection } from './components/Sections/ProjectSection/ProjectSection.jsx'
import { TechSection } from './components/Sections/TechSection/TechSection.jsx'
import { ContactSection } from './components/Sections/ContactSection/ContactSection.jsx'

function App () {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <Element name='topSection'><NavBar name='topSection' /></Element>
          </nav>
        </header>
        <main>
          <section>
            <Element name='homeSection'><HomeSection /></Element>
          </section>
          <section>
            <Element name='expSection'><ExpSection /></Element>
          </section>
          <section>
            <Element name='projectSection'><ProjectSection /></Element>
          </section>
          <section>
            <Element name='techSection'><TechSection /></Element>
          </section>
          <section>
            <Element name='contactSection'><ContactSection /></Element>
          </section>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
