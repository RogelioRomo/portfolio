import PropTypes from 'prop-types'

export const TechCard = ({ children, additionalContent }) => {
  return (
    <div className='relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer font-tanker text-2xl text-custom-white font-bold bg-custom-black border-solid border-2 border-custom-white'>
      <div className='z-10 absolute w-full h-full peer' />
      <div className='absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-custom-gray-2 transition-all duration-500' />
      <div className='absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-32 h-44 rounded-full bg-custom-gray-2 transition-all duration-500'>
        {children}
      </div>
      <div className='w-full h-full items-center justify-center flex uppercase'>
        {additionalContent}
      </div>
    </div>
  )
}

TechCard.propTypes = {
  children: PropTypes.node.isRequired,
  additionalContent: PropTypes.node.isRequired
}
