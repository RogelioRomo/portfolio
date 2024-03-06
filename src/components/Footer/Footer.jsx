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
      <ScrollLink to='topSection' spy smooth duration={500} className='group flex items-center justify-start w-11 h-11 bg-custom-gray-1 rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1'>
        <div className='flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3'>
          <Icon icon='icon-park-outline:to-top' className='' />
        </div>
        <div className='absolute right-5 transform translate-x-full opacity-0 text-lg font-tanker transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
          Back to top
        </div>
      </ScrollLink>
    </footer>
  )
}
