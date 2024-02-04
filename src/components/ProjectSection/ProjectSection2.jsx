import { Link } from 'react-router-dom'
import { MainPill } from '../MainPill/MainPill'
// import { useRef } from 'react'

export const ProjectSection2 = () => {
  // const projectCardRef = useRef()

  return (
    <MainPill as='section' additionalClasses='flex flex-col max-w-7xl mr-auto ml-auto rounded-3xl display-inline'>
      <div className='pb-4'>
        <p className='text-[#fff] text-3xl sm:text-6xl'>Tech geek</p>
        <p className='text-custom-gray text-xl sm:text-3xl'>[Tech geek] </p>
        <p className='text-custom-gray text-xl sm:text-3xl'>adj. 1 Tech ecommerce, 2 fullstack, 3 in development.</p>
      </div>
      <div>
        <Link to='https://github.com/RogelioRomo/coderhouse-backend/tree/main/projecto-final' target='_blank'><img className='h-[264px] sm:h-[768px] mb-2 rounded-3xl' src='/static/images/techgeek-preview.png' title='tech geek preview' alt='tech geek preview' /></Link>
      </div>
    </MainPill>
  )
}
