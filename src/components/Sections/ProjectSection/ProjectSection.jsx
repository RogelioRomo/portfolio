import { Icon } from '@iconify/react'

export const ProjectSection = () => {
  return (
    <div className='flex flex-col mt-16 px-2'>
      <div className='font-general flex flex-row items-center text-2xl text-custom-white mb-10'>
        <Icon icon='bx:code-block' />
        <h2 className='ml-2 font-bold font-tanker'>Projects</h2>
      </div>
    </div>
  )
}
