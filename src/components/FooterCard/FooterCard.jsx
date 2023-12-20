import { MainPill } from "../mainPill/mainPill"

export const FooterCard = () => {
    return (
        <MainPill as='footer' additionalClasses='max-w-7xl mr-auto ml-auto flex items-center justify-between rounded-full'>            
            <h2 className="text-[#fff] text-xl font-semibold">
                rogelio romo.
            </h2>
            <div className='text-custom-gray text-xl font-semibold'>
                all rights reserved. © 2023
            </div>
            <button className='bg-custom-gray rounded-full hover:opacity-75'>
                <img src='/iconmonstr-caret-up-filled.svg' alt='Back to top' className='h-7' title='Back to top'/>
            </button>
        </MainPill>
    )
}
