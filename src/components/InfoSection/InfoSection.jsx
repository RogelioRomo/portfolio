import { TechCard } from '../TechCard/TechCard'
import { TimeZoneCard } from '../TimeZoneCard/TimeZoneCard'

export const InfoSection = () => {
  return (
    <section className='flex flex-col mr-auto ml-auto lg:max-w-7xl lg:flex-row'>
      <TechCard />
      <TimeZoneCard />
    </section>
  )
}
