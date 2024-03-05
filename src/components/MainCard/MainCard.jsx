import { HomeCard } from '../HomeCard/HomeCard'
import { TechCard } from '../TechCard/TechCard'

export const MainCard = () => {
  return (
    <main className='flex flex-col'>
      <HomeCard />
      <section className='flex flex-col mt-16 px-2'>
        <div className='font-general flex flex-row items-center text-xl text-custom-white mb-6'>
          <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16.5 19a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M10 5l2-2m-4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m.5 6l8-8M5.5 21a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m13-13a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M12 21l2-2' /></svg>
          <h2 className='ml-2 font-bold'>Technology</h2>
        </div>
        <div className='flex flex-row justify-between'>
          <TechCard additionalContent={<p>Front End</p>}>
            <div>
              <p>ReactJs</p>
              <p>HTML5</p>
              <p>CSS</p>
              <p>Tailwind</p>
              <p>Bootstrap</p>
            </div>
          </TechCard>
          <TechCard additionalContent={<p>Back End</p>}>
            <div>
              <p>Node.js</p>
              <p>Express</p>
              <p>MongoDB</p>
              <p>Handlebars</p>
              <p>passport.js</p>
              <p>socket.io</p>
            </div>
          </TechCard>
          <TechCard additionalContent={<p>Extras</p>}>
            <div>
              <p>Git</p>
              <p>Github</p>
              <p>StandardJS</p>
              <p>ESlint</p>
              <p>Firebase</p>
              <p>mongoose</p>
            </div>
          </TechCard>
        </div>
      </section>
    </main>
  )
}
