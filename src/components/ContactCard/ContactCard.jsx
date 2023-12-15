import { Link } from 'react-router-dom'

export const ContactCard = () => {
    return (
        <section className='flex mr-auto ml-auto max-w-7xl'>
            <div className='bg-custom-black bg-stardust-pattern flex flex-col items-center justify-center h-[264px] w-[60%] mr-auto mt-2 py-4 px-8 rounded-3xl border-2 border-transparent hover:border-custom-gray2'>
                <p className='text-[#fff] text-6xl mb-6 text-center'>Want to work with me?</p>
                <Link to='mailto:rogelioromo955@gmail.com' className='text-[#ffff] bg-custom-orange rounded-full text-xl font-semibold p-6'>rogelioromo955@gmail.com</Link>
            </div>
            <div className='bg-custom-black bg-stardust-pattern h-[264px] w-[40%] mr-auto mt-2 ml-2 py-4 px-8 rounded-3xl border-2 border-transparent hover:border-custom-gray2 flex justify-center'>
            <img className='w-[300px]' src='/static/images/pngwing.com.png' title='astronaut filler picture' alt='astronaut filler picture'></img>
            </div>
        </section>
    )
}

