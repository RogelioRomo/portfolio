import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
import { MainPill } from '../mainPill/mainPill';

export const NavCard = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const handleBurgerMenuClick = () => {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    };

    return (
        <MainPill as='nav' additionalClasses='max-w-7xl mr-auto ml-auto flex items-center justify-between rounded-full'>
            <ScrollLink to='/' className='text-custom-orange no-underline text-xl font-semibold hover:opacity-75'>
                rogelio romo.
            </ScrollLink>

            <div className='md:hidden'>
                <button onClick={handleBurgerMenuClick} className='text-xl font-semibold text-[#fff] focus:outline-none'>
                    ☰
                </button>
                {isBurgerMenuOpen && (
                    <div className='mt-4'>
                        <ScrollLink onClick={handleBurgerMenuClick} className='text-[#fff]  no-underline block py-2 px-4'>home.</ScrollLink>
                        <ScrollLink to='contactCardSection' spy={true} smooth={true} duration={500} onClick={handleBurgerMenuClick} className='text-custom-gray hover:text-[#fff] no-underline block py-2 px-4 cursor-pointer'>contact.</ScrollLink>
                        <ScrollLink onClick={handleBurgerMenuClick} className='text-custom-gray hover:text-[#fff] no-underline block py-2 px-4'>projects.</ScrollLink>
                    </div>
                )}
            </div>

            <div className='hidden md:flex text-xl font-semibold'>
                <ScrollLink className='text-[#fff]  no-underline px-6'>home.</ScrollLink>
                <ScrollLink to='contactCardSection' spy={true} smooth={true} duration={500} className='text-custom-gray hover:text-[#fff] no-underline px-6 cursor-pointer'>contact.</ScrollLink>
                <ScrollLink className='text-custom-gray hover:text-[#fff] no-underline px-6'>projects.</ScrollLink>
            </div>
        </MainPill>
    );
};