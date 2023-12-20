import { format } from 'date-fns'
import { useEffect, useState } from 'react';
import { utcToZonedTime } from 'date-fns-tz';
import { MainPill } from '../mainPill/mainPill';

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
        <MainPill as='div' additionalClasses='w-[60%] ml-2 rounded-3xl flex justify-between'>
            <address className='text-custom-gray text-5xl'>Based in Tijuana,<span className='text-[#fff]'> México.</span></address>
            <div title='Rogelio time zone' className='text-custom-orange text-end place-self-end text-5xl '><p className='text-custom-gray'>My time:</p>{formattedDate}<p>UTC-8</p></div>
        </MainPill>
    )
}

