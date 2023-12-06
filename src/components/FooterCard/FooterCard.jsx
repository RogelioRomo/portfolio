
export const FooterCard = () => {
    return (
        <nav className='bg-custom-black bg-stardust-pattern flex items-center justify-between max-w-7xl mr-auto ml-auto mt-2 py-4 px-8 rounded-full'>
            <h2 className="text-[#fff] text-xl font-semibold">
                rogelio romo.
            </h2>
            <div className='text-custom-gray text-xl font-semibold'>
                all rights reserved. © 2023
            </div>
            <button className='bg-custom-gray rounded-full'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 16 16'>
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                </svg>
            </button>
        </nav>
    )
}
