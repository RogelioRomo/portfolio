import { MainPill } from "../MainPill/MainPill"
import { Link as ScrollLink } from 'react-scroll';

export const FooterCard = () => {
    return (
        <MainPill as='footer' additionalClasses='max-w-7xl mr-auto ml-auto flex items-center justify-between rounded-full'>            
            <h2 className="text-[#fff] text-lg sm:text-xl font-semibold">
                rogelio romo.
            </h2>
            <div className='text-custom-gray sm:hidden text-lg font-semibold'>
                © 2023
            </div>
            <div className='text-custom-gray hidden sm:block sm:text-xl font-semibold'>
                all rights reserved. © 2023
            </div>
            <ScrollLink to='topCardSection' spy={true} smooth={true} duration={500} className='bg-custom-gray rounded-full hover:opacity-75'>
                <img src='/iconmonstr-caret-up-filled.svg' alt='Back to top' className='h-7' title='Back to top'/>
            </ScrollLink>
        </MainPill>
    )
}
