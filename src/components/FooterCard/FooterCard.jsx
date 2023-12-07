
export const FooterCard = () => {
    return (
        <nav className='bg-custom-black bg-stardust-pattern flex items-center justify-between max-w-7xl mr-auto ml-auto mt-2 py-4 px-8 rounded-full border-2 border-transparent hover:border-custom-gray2'>
            <h2 className="text-[#fff] text-xl font-semibold">
                rogelio romo.
            </h2>
            <div className='text-custom-gray text-xl font-semibold'>
                all rights reserved. © 2023
            </div>
            <button className='bg-custom-gray rounded-full hover:opacity-75'>
                <img src='/iconmonstr-caret-up-filled.svg' alt='Back to top' className='h-7' title='Back to top'/>
            </button>
        </nav>
    )
}
