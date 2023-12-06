

export const ProfileCard = () => {
    return(
        <article className='bg-custom-black bg-stardust-pattern flex flex-col max-w-7xl mr-auto ml-auto mt-2 py-4 px-8 rounded-3xl'>
            <div className='overflow-hidden w-[108px] h-[108px] rounded-full mb-5 mt-3'>
                <img src='../public/imgAvatar.jpeg' alt='avatar picture' className=''/>
            </div>
            <div>
                <h1 className='text-custom-gray text-6xl'>
                    I'm an
                    <span className="text-[#fff]"> Aerospace Engineer</span> currently working as a
                    <span className='text-[#fff]'> web developer.</span>
                </h1>
            </div>
        </article>
    )
}