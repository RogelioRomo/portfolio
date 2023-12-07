import { format } from 'date-fns'
import { useEffect, useState } from 'react';
import { utcToZonedTime } from 'date-fns-tz';

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
        <div className='bg-custom-black bg-stardust-pattern w-[60%] mt-2 ml-2 py-4 px-8 rounded-3xl border-2 border-transparent hover:border-custom-gray2 flex justify-between'>
            <address className='text-custom-gray text-5xl'>Based in Tijuana,<span className='text-[#fff]'> México</span></address>
            <div title='Rogelio time zone' className='text-custom-orange text-end place-self-end text-5xl '>{formattedDate}<p>PST</p></div>
        </div>
    )
}

