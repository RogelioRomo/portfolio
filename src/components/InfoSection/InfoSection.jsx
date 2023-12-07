import { TechCard } from '../TechCard/TechCard'
import { TimeZoneCard } from '../TimeZoneCard/TimeZoneCard'

export const InfoSection = () => {
    return(
        <section className='flex mr-auto ml-auto max-w-7xl'>
            <TechCard/>
            <TimeZoneCard/>
        </section>
    )
}