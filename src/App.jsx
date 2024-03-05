import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { MainCard } from './components/MainCard/MainCard'

function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <MainCard />
      </BrowserRouter>
    </>
  )
}

export default App
