import PropTypes from 'prop-types'

export const TechCard = ({ children, additionalContent }) => {
  return (
    <div className='bg-custom-white rounded-2xl shadow-sm shadow-custom-white outline outline-custom-black -outline-offset-8'>
      <div className='group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-20 after:h-20 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-custom-black rounded-2xl outline outline-custom-white -outline-offset-8'>
        <div className='z-10 flex flex-col items-center gap-2'>
          <div className='text-custom-gray-3 text-5xl grid grid-cols-3 gap-x-8 gap-y-2'>{children}</div>
          <p className='text-custom-white'>{additionalContent}</p>
        </div>
      </div>
    </div>

  )
}

TechCard.propTypes = {
  children: PropTypes.node.isRequired,
  additionalContent: PropTypes.node.isRequired
}

// after:bg-custom-gray-2
// before:bg-custom-gray-2
