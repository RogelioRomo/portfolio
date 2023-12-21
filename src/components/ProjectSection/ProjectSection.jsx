import { Link } from "react-router-dom";
import { MainPill } from '../mainPill/mainPill';
import { useRef } from 'react'

export const ProjectSection = () => {

    const projectCardRef = useRef();

    return(
        <MainPill as='section' additionalClasses='flex flex-col max-w-7xl mr-auto ml-auto rounded-3xl display-inline'>
            <div ref={projectCardRef} className='pb-4'>
                <p  className='text-[#fff] text-3xl sm:text-6xl'>discoland</p>
                <p className='text-custom-gray text-xl sm:text-3xl'>[dis-co-land] </p>
                <p className='text-custom-gray text-xl sm:text-3xl'>adj. 1 Music record store, 2 ecommerce, 3 fantastic.</p>
            </div>
            <div>
            <Link to='https://discoland.vercel.app/' target='_blank'><img className='h-[264px] sm:h-[768px] mb-2 rounded-3xl' src='/static/images/discoland-preview.png' title='discoland preview' alt='discoland preview'></img></Link>
            </div>
        </MainPill>
    )
}