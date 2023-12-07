import { Link, NavLink } from 'react-router-dom'

export const NavCard = () => {
    return (
        <nav className='bg-custom-black bg-stardust-pattern flex items-center justify-between max-w-7xl mr-auto ml-auto py-4 px-8 rounded-full border-2 border-transparent hover:border-custom-gray2'>
            <Link to='/' className='text-custom-orange no-underline text-xl font-semibold hover:opacity-75'>
                rogelio romo.
            </Link>
            <div className='text-xl font-semibold'>
                <NavLink className='text-[#fff]  no-underline px-6'> home. </NavLink>
                <NavLink className='text-custom-gray hover:text-[#fff] no-underline px-6'> projects. </NavLink>
                <NavLink className='text-custom-gray hover:text-[#fff] no-underline px-6'> contact. </NavLink>
            </div>
        </nav>
    )
}

