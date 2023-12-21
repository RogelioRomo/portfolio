import { format } from 'date-fns'
import { useEffect, useState } from 'react';
import { utcToZonedTime } from 'date-fns-tz';
import { MainPill } from '../MainPill/MainPill';

export const TimeZoneCard = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const timezone = 'America/Tijuana';

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const zonedDate = utcToZonedTime(currentDate, timezone);
    const formattedDate = format(zonedDate, "HH:mm:ss", { timeZone: timezone });


    return (
        <MainPill as='div' additionalClasses='h-[264px] rounded-3xl flex justify-between w-[100%] lg:w-[60%] lg:ml-2 lg:h-[auto]'>
            <address className='text-custom-gray text-3xl sm:text-5xl'>Based in Tijuana,<span className='text-[#fff]'> México.</span></address>
            <div title='Rogelio time zone' className='text-custom-orange text-end place-self-end text-3xl sm:text-5xl'><p className='text-custom-gray'>My time:</p>{formattedDate}<p>UTC-8</p></div>
        </MainPill>
    )
}

