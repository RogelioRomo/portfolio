import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

export const Stackoverflow = () => {
  return (
    <Link to='https://stackoverflow.com/users/23042348/imrogerz' target='_blank' title='go to Rogelio stack overflow profile' className='group w-12 hover:w-44 h-12 hover:bg-[#F58025] relative bg-[#F58025] rounded text-custom-white duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-[#F58025] before:hover:bg-[#F58025] before:rotate-45 place-self-end'>
      <Icon icon='cib:stackoverflow' className='w-8 h-8 shrink-0 fill-custom-white' />
      <span className='origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all'>
        imRogerz
      </span>
    </Link>
  )
}
