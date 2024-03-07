import { Icon } from '@iconify/react'
import { Linkedin } from '../../Socials/Linkedin.jsx'
import { Github } from '../../Socials/Github.jsx'
import { Stackoverflow } from '../../Socials/Stackoverflow.jsx'
import { Mail } from '../../Socials/Mail.jsx'

export const ContactSection = () => {
  return (
    <div className='flex flex-col mt-16 mb-16 px-2'>
      <div className='font-general flex flex-row items-center text-2xl text-custom-white mb-10'>
        <Icon icon='mynaui:message-dots' />
        <h2 className='ml-2 font-bold font-tanker'>Contact</h2>
      </div>
      <div className='flex flex-col gap-4 px-10 md:flex md:px-0 md:flex-row md:justify-around md:gap-0'>
        <Linkedin />
        <Github />
        <Stackoverflow />
        <Mail />
      </div>
    </div>
  )
}
