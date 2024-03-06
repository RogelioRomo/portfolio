import { TechCard } from '../../Cards/TechCard/TechCard.jsx'
import { Icon } from '@iconify/react'

export const TechSection = () => {
  return (
    <div className='flex flex-col mt-16 px-2'>
      <div className='font-general flex flex-row items-center text-2xl text-custom-white mb-10'>
        <Icon icon='grommet-icons:technology' />
        <h2 className='ml-2 font-bold font-tanker'>Technology</h2>
      </div>
      <div className='flex flex-col w-fit gap-10 m-auto lg:grid lg:grid-cols-2 xl:flex xl:flex-row'>
        <TechCard additionalContent={<span>Front End</span>}>
          <div className='flex flex-col items-center'>
            <Icon icon='akar-icons:react-fill' />
            <h3 className='text-sm'>ReactJs</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='flowbite:html-solid' />
            <h3 className='text-sm'>HTML</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='flowbite:css-solid' />
            <h3 className='text-sm'>CSS</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='mdi:tailwind' />
            <h3 className='text-sm'>Tailwind</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='ri:bootstrap-fill' />
            <h3 className='text-sm'>Bootstrap</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='ri:javascript-fill' />
            <h3 className='text-sm'>Javascript</h3>
          </div>
        </TechCard>
        <TechCard additionalContent={<span>Back End</span>}>
          <div className='flex flex-col items-center'>
            <Icon icon='akar-icons:node-fill' />
            <h3 className='text-sm'>Node.js</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='devicon-plain:nodemon' />
            <h3 className='text-sm'>Nodemon</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='simple-icons:passport' />
            <h3 className='text-sm'>Passport</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='simple-icons:socketdotio' />
            <h3 className='text-sm'>Socket.io</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='devicon-plain:mongodb' />
            <h3 className='text-sm'>MongoDB</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='mdi:firebase' />
            <h3 className='text-sm'>Firebase</h3>
          </div>
        </TechCard>
        <TechCard additionalContent={<span>Extras</span>}>
          <div className='flex flex-col items-center'>
            <Icon icon='mdi:git' />
            <h3 className='text-sm'>Git</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='mdi:github' />
            <h3 className='text-sm'>Github</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='simple-icons:handlebarsdotjs' />
            <h3 className='text-sm'>Handlebars</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='mdi:sass' />
            <h3 className='text-sm'>Sass</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='simple-icons:standardjs' />
            <h3 className='text-sm'>Standarjs</h3>
          </div>
          <div className='flex flex-col items-center'>
            <Icon icon='mdi:eslint' />
            <h3 className='text-sm'>ESlint</h3>
          </div>
        </TechCard>
      </div>
    </div>
  )
}
