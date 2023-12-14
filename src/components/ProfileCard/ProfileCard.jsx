import { Link } from 'react-router-dom'


export const ProfileCard = () => {
    return(
        <section className='bg-custom-black bg-stardust-pattern flex flex-col max-w-7xl mr-auto ml-auto mt-2 py-4 px-8 rounded-3xl border-2 border-transparent hover:border-custom-gray2 display-inline'>
            <div className='mb-5 mt-3 flex items-start justify-between'>
                <img title='avatar picture' src='/imgAvatar.jpeg' alt='avatar picture' className='w-[108px] h-[108px] rounded-full overflow-hidden'/>
                <div className='flex'>
                    <Link className='hover:opacity-75' to='https://drive.google.com/file/d/1bZ2sXCIGC-4g3xy01QJ1LBkzTMrBTVw7/view?usp=sharing' target='_blank' title='Resume'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 0 0-7.071-7.071L9.878 7.05L8.464 5.636l1.414-1.414a7 7 0 0 1 9.9 9.9zm-2.829 2.828l-1.414 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 0 0 7.07 7.071l1.415-1.414zm-.707-10.607l1.415 1.415l-7.072 7.07l-1.414-1.414z" fill='#fff'/></svg>
                    </Link>
                    <Link className='pl-2 hover:opacity-75' to='https://www.linkedin.com/in/rogelio-romo-5712591b8/' target='_blank' title='Linkedin'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' fill='#fff'/></svg>
                    </Link>
                    <Link className='pl-2 hover:opacity-75' to='https://github.com/RogelioRomo' target='_blank' title='Github'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill='#fff'/></svg>
                    </Link>
                </div>
            </div>
            <div className='mb-2'>
                <h1 className='text-custom-gray text-6xl'>
                    <p className='text-custom-gray mb-1'>I am an <span className='text-[#fff]'>Aerospace Engineer</span></p> 
                    <p className='text-custom-gray'> currently working as a <span className='text-[#fff]'>web developer.</span></p>
                </h1>
            </div>
        </section>
    )
}