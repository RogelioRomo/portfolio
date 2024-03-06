import { ExpCard } from '../../Cards/ExpCard/ExpCard.jsx'
import { Icon } from '@iconify/react'

export const ExpSection = () => {
  return (
    <div className='flex flex-col mt-16 px-2'>
      <div className='font-general flex flex-row items-center text-2xl text-custom-white mb-10'>
        <Icon icon='material-symbols:experiment-outline' />
        <h2 className='ml-2 font-bold font-tanker'>Experience</h2>
      </div>
      <ExpCard>
        <div className='mr-6 mb-4 lg:mb-0 lg:text-lg lg:w-[20%]'>
          <h3 className='font-tanker'>Personal Projects</h3>
          <p className='font-general lg:text-base'>Present...</p>
        </div>
        <p className='font-general lg:text-base lg:w-[70%]'>My experience is based purely in my personal projects, in them I have applied everything I know from backend and frontend. Some examples are the creation of RESTful API's and their management endpoints (auth methods included); use of MVC software architecture for my projects; DOM manipulation in React and Javascript; git and github for version control and management. If you want to know more about them please go to my project section.</p>
      </ExpCard>
      <ExpCard>
        <div className='mr-6 mb-4 lg:mb-0 lg:text-lg lg:w-[20%]'>
          <h3 className='font-tanker'>New challenges</h3>
          <p className='font-general lg:text-base'>My future...</p>
        </div>
        <p className='font-general lg:text-base lg:w-[70%]'>I'm looking for new opportunities. I encourage you to test me if you are interested in investing in my future. I consider myself an excellent employe and specially an individual who loves learning new things everyday. So go ahead and contact me, I would appreciate it!</p>
      </ExpCard>
    </div>
  )
}
