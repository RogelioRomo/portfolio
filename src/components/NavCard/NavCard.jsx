import { Link, NavLink } from 'react-router-dom'

export const NavCard = () => {
    return (
        <nav className='bg-custom-black flex items-center justify-between max-w-7xl mr-auto ml-auto py-4 px-8 rounded-full'>
            <Link to='/' className='no-underline text-xl font-semibold'>
                rogelio romo.
            </Link>
            <div className='text-xl font-semibold'>
                <NavLink style={{color: '#22C55E'}} className='no-underline px-6'> home. </NavLink>
                <NavLink style={{color: '#8a8a93'}} className='no-underline px-6'> projects. </NavLink>
                <NavLink style={{color: '#8a8a93'}} className='no-underline px-6'> contact. </NavLink>
            </div>
        </nav>
    )
}

