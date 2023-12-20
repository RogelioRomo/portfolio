import { Link } from "react-router-dom";
import { MainPill } from '../mainPill/mainPill';

export const ProjectSection = () => {
    return(
        <MainPill as='section' additionalClasses='flex flex-col max-w-7xl mr-auto ml-auto rounded-3xl display-inline'>
            <div className='pb-4'>
                <p  className='text-[#fff] text-6xl'>discoland</p>
                <p className='text-custom-gray text-3xl'>[dis-co-land] </p>
                <p className='text-custom-gray text-3xl'>adj. 1 Music record store, 2 ecommerce, 3 fantastic.</p>
            </div>
            <div>
            <Link to='https://discoland.vercel.app/' target='_blank'><img className='h-[768px] mb-2 rounded-3xl' src='/static/images/discoland-preview.png' title='discoland preview' alt='discoland preview'></img></Link>
            </div>
        </MainPill>
    )
}