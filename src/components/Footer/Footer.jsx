import { Link as ScrollLink } from 'react-scroll'
import { format } from 'date-fns'
import { Icon } from '@iconify/react'

export const Footer = () => {
  const currentYear = format(new Date(), 'yyyy')

  return (
    <footer className='flex flex-row justify-between text-custom-white items-center'>
      <h2 className='text-custom-white font-tanker text-lg'>
        Rogelio Romo
      </h2>
      <div className='sm:hidden text-base'>
        © {currentYear}
      </div>
      <div className='hidden sm:block text-base font-semibold'>
        all rights reserved. © {currentYear}
      </div>
      <ScrollLink to='topSection' spy smooth duration={500} className='cursor-pointer bg-custom-gray-2 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none'>
        <Icon icon='icon-park-outline:to-top' className='text-xl' />
      </ScrollLink>
    </footer>
  )
}
