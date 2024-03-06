import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'

export const ExpCard = ({ children }) => {
  return (
    <div className='flex flex-row text-custom-white gap-4 mt-2'>
      <div className='text-6xl lg:w-[10%]'>
        <Icon icon='lucide:git-commit-vertical' />
        <Icon icon='tabler:minus-vertical' />
        <Icon icon='tabler:minus-vertical' />
      </div>
      <div className='flex flex-col lg:flex lg:flex-row'>
        {children}
      </div>
    </div>
  )
}

ExpCard.propTypes = {
  children: PropTypes.node.isRequired
}
