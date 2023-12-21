import { Link as ScrollLink } from 'react-scroll';
import { useState, useRef } from 'react';
import { MainPill } from '../mainPill/mainPill';

export const NavCard = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const topCardRef = useRef();

    const handleBurgerMenuClick = () => {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    };

    return (
        <MainPill as='nav' additionalClasses='mr-auto ml-auto rounded-full max-w-7xl flex items-center justify-between'>
            <ScrollLink to='/' className='text-custom-orange no-underline text-xl font-semibold hover:opacity-75 cursor-pointer'>
                rogelio romo.
            </ScrollLink>

            <div ref={topCardRef} className='md:hidden'>
                <button onClick={handleBurgerMenuClick} className='text-xl font-semibold text-[#fff] focus:outline-none'>
                    ☰
                </button>
                {isBurgerMenuOpen && (
                    <div className='mt-4'>
                        <ScrollLink to='homeCardSection' spy={true} smooth={true} duration={500} onClick={handleBurgerMenuClick} className='text-[#fff] no-underline block py-2 px-4 cursor-pointer'>home.</ScrollLink>
                        <ScrollLink to='contactCardSection' spy={true} smooth={true} duration={500} onClick={handleBurgerMenuClick} className='text-custom-gray hover:text-[#fff] no-underline block py-2 px-4 cursor-pointer'>contact.</ScrollLink>
                        <ScrollLink to='projectCardSection' spy={true} smooth={true} duration={500} onClick={handleBurgerMenuClick} className='text-custom-gray hover:text-[#fff] no-underline block py-2 px-4 cursor-pointer'>projects.</ScrollLink>
                    </div>
                )}
            </div>

            <div className='hidden md:flex text-xl font-semibold'>
                <ScrollLink to='homeCardSection' spy={true} smooth={true} duration={500} className='text-[#fff] no-underline px-6 cursor-pointer'>home.</ScrollLink>
                <ScrollLink to='contactCardSection' spy={true} smooth={true} duration={500} className='text-custom-gray hover:text-[#fff] no-underline px-6 cursor-pointer'>contact.</ScrollLink>
                <ScrollLink to='projectCardSection' spy={true} smooth={true} duration={500} className='text-custom-gray hover:text-[#fff] no-underline px-6 cursor-pointer'>projects.</ScrollLink>
            </div>
        </MainPill>
    );
};