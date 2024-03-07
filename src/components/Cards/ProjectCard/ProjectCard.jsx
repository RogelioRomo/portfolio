import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

export const ProjectCard = ({ children, valueOne, valueTwo, valueThree }) => {
  return (
    <div className='relative flex w-80 flex-col rounded-xl bg-custom-black bg-clip-border text-custom-white shadow-md border-solid border-2 border-custom-gray-2'>

      <div className='relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-custom-white bg-clip-border text-custom-black border-solid border-2 border-custom-black border-transparent flex items-center'>
        {valueOne}
      </div>

      {children}

      <div className='px-[10%] py-[10%] flex gap-4 items-center text-custom-white'>
        <Link to={valueTwo} target='_blank' title='button to github repository' className='group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-custom-gray-2 to-custom-gray-3 font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500'>
          <Icon icon='mdi:github' />
          <span className='absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700'>
            GitHub
          </span>
        </Link>
        <Link to={valueThree} target='_blank' title='button to github repository' className='group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-custom-gray-2 to-custom-gray-3 font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500'>
          <Icon icon='iconamoon:link-external' />
          <span className='absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700'>
            Website
          </span>
        </Link>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  children: PropTypes.node.isRequired,
  valueOne: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  valueTwo: PropTypes.string.isRequired,
  valueThree: PropTypes.string.isRequired
}
