import { Link } from 'react-router-dom'

export const HomeSection = () => {
  return (
    <div className='font-general text-custom-white max-w-xl px-2'>
      <div className='flex gap-4 items-center mb-4'>
        <img className='w-[108px] rounded-full hover:scale-105' src='/static/images/imgAvatar.jpeg' alt='Rogelio avatar picture' title='Rogelio avatar picture' />
        <Link to='https://www.linkedin.com/in/rogelio-romo' target='_blank' title='employment status and go to linkedin'>
          <div className='relative py-1 px-3 text-custom-white overflow-hidden bg-custom-black rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-custom-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-custom-gray-2 before:to-custom-gray-2 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 border-solid border-[1px] hover:border-custom-black'>
            <span>Available to work</span>
          </div>
        </Link>
      </div>
      <p className='text-3xl'>Hi, I'm Rogelio! ✌️</p>
      <p className='mt-4'>1 year of experience in software development with javascript. An <span className='font-tanker'>aerospace engineer and a fullstack developer</span> from Tijuana, Mexico. A passionate and professional individual, discipline driven and dedicated.</p>
    </div>
  )
}
