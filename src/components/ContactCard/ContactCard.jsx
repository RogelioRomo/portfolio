import { Link } from 'react-router-dom'
import { MainPill } from '../mainPill/mainPill'
import { useRef } from 'react'

export const ContactCard = () => {
    
    const contactCardRef = useRef();

    return (
        <section ref={contactCardRef} className='flex flex-col lg:flex-row mr-auto ml-auto lg:max-w-7xl'>
            <MainPill as='div' additionalClasses='flex flex-col items-center justify-center h-[264px] w-[100%] lg:w-[60%] mr-auto rounded-3xl'>
                <p className='text-[#fff] text-3xl sm:text-6xl mb-6 text-center'>Want to work with me?</p>
                <Link to='mailto:rogelioromo955@gmail.com' className='text-[#ffff] bg-custom-orange rounded-full text-xl font-semibold p-6 hover:opacity-75'>rogelioromo955@gmail.com</Link>
            </MainPill>
            <MainPill as='div' additionalClasses='h-[264px] w-[100%] lg:w-[40%] mr-auto lg:ml-2 rounded-3xl flex justify-center'>
                <img className='w-[300px]' src='/static/images/pngwing.com.png' title='astronaut filler picture' alt='astronaut filler picture'></img>
            </MainPill>
        </section>
    )
}

