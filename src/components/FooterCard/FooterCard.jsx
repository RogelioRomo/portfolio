import { MainPill } from '../MainPill/MainPill'
import { Link as ScrollLink } from 'react-scroll'
import { format } from 'date-fns';

export const FooterCard = () => {
  const currentYear = format(new Date(), 'yyyy');

  return (
    <MainPill as='footer' additionalClasses='max-w-7xl mr-auto ml-auto flex items-center justify-between rounded-full'>
      <h2 className='text-[#fff] text-lg sm:text-xl font-semibold'>
        rogelio romo.
      </h2>
      <div className='text-custom-gray sm:hidden text-lg font-semibold'>
        © {currentYear}
      </div>
      <div className='text-custom-gray hidden sm:block sm:text-xl font-semibold'>
        all rights reserved. © {currentYear}
      </div>
      <ScrollLink to='topCardSection' spy smooth duration={500} className='bg-custom-gray rounded-full hover:opacity-75'>
        <img src='/iconmonstr-caret-up-filled.svg' alt='Back to top' className='h-7' title='Back to top' />
      </ScrollLink>
    </MainPill>
  )
}
