import { Link } from "react-router-dom";

export const ProjectSection = () => {
    return(
        <section className='bg-custom-black bg-stardust-pattern flex flex-col max-w-7xl mr-auto ml-auto mt-2 py-4 px-8 rounded-3xl border-2 border-transparent hover:border-custom-gray2 display-inline'>
            <div className='pb-4'>
                <p  className='text-[#fff] text-6xl'>discoland</p>
                <p className='text-custom-gray text-3xl'>[dis-co-land] </p>
                <p className='text-custom-gray text-3xl'>adj. 1 Music record store, 2 ecommerce, 3 fantastic.</p>
            </div>
            <div>
            <Link to='https://discoland.vercel.app/' target='_blank'><img className='h-[768px] mb-2 rounded-3xl' src='/public/static/images/discoland-preview.png' title='discoland preview' alt='discoland preview'></img></Link>
            </div>
        </section>
    )
}