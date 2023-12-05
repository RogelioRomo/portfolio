import { BrowserRouter } from "react-router-dom";
import './App.css'
import { NavCard } from './components/navCard/navCard'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavCard />
      </BrowserRouter>
    </>
  )
}

export default App
