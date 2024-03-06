import { Icon } from '@iconify/react'

export const ContactSection = () => {
  return (
    <div className='flex flex-col mt-16 px-2'>
      <div className='font-general flex flex-row items-center text-2xl text-custom-white mb-10'>
        <Icon icon='mynaui:message-dots' />
        <h2 className='ml-2 font-bold font-tanker'>Contact</h2>
      </div>
    </div>
  )
}
