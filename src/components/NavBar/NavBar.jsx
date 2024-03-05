import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export const NavBar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen)
  }
  return (
    <header className='mb-16 lg:mb-28'>
      <nav className='font-tanker flex flex-row justify-between items-center'>
        <ScrollLink to='/' className='text-4xl text-custom-white hover:opacity-75 hover:scale-105 cursor-pointer'><h1>Rogelio Romo</h1></ScrollLink>
        <ul className='hidden text-lg text-custom-gray-4 lg:flex flex-row gap-4'>
          <li className='hover:scale-105 hover:text-custom-white cursor-pointer'><ScrollLink to='/'>Home</ScrollLink></li>
          <li className='hover:scale-105 hover:text-custom-white cursor-pointer'><ScrollLink to='/'>Technology</ScrollLink></li>
          <li className='hover:scale-105 hover:text-custom-white cursor-pointer'><ScrollLink to='/'>Projects</ScrollLink></li>
          <li className='hover:scale-105 hover:text-custom-white cursor-pointer'><ScrollLink to='/'>Contact</ScrollLink></li>
        </ul>

        <div className='lg:hidden'>
          <button onClick={handleBurgerClick} className='text-custom-white'>
            ☰
          </button>
          {isBurgerOpen && (
            <ul className='text-lg text-custom-gray-4 flex flex-col gap-4'>
              <li className='hover:scale-105 hover:text-custom-white cursor-pointer'><ScrollLink to='/'>Home</ScrollLink></li>
              <li className='hover:scale-105 hover:text-custom-white cursor-pointer'><ScrollLink to='/'>Technology</ScrollLink></li>
              <li className='hover:scale-105 hover:text-custom-white cursor-pointer'><ScrollLink to='/'>Projects</ScrollLink></li>
              <li className='hover:scale-105 hover:text-custom-white cursor-pointer'><ScrollLink to='/'>Contact</ScrollLink></li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}
