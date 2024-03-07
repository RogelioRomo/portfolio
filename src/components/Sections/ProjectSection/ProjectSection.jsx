import { Icon } from '@iconify/react'
import { ProjectCard } from '../../Cards/ProjectCard/ProjectCard.jsx'

export const ProjectSection = () => {
  return (
    <div className='flex flex-col mt-16 px-2'>
      <div className='font-general flex flex-row items-center text-2xl text-custom-white mb-14'>
        <Icon icon='bx:code-block' />
        <h2 className='ml-2 font-bold font-tanker'>Projects</h2>
      </div>
      <div className='flex flex-col gap-10 m-auto lg:grid lg:grid-cols-2'>
        <ProjectCard valueOne={<img src='/static/images/pokedexium-preview.png' alt='pokedexium home page preview' className='rounded-xl mx-auto' title='pokedexium home page preview' width='95%' height='95%' />} valueTwo='https://github.com/RogelioRomo/pokedexium' valueThree=''>
          <div className='p-6'>
            <h5 className='mb-2 block font-tanker text-xl leading-snug tracking-normal text-custom-white antialiased'>
              Pokedexium
            </h5>
            <p className='block font-general text-base leading-relaxed text-inherit antialiased'>
              A ReactJS and Node.js fullstack project with RESTful API's, authentication using passport.js, and a responsive design. (In development)
            </p>
          </div>
        </ProjectCard>
        <ProjectCard valueOne={<img src='/static/images/techgeek-preview.png' alt='pokedexium home page preview' className='rounded-xl mx-auto' title='pokedexium home page preview' width='95%' height='95%' />} valueTwo='https://github.com/RogelioRomo/coderhouse-backend/tree/main/projecto-final' valueThree=''>
          <div className='p-6'>
            <h5 className='mb-2 block font-tanker text-xl leading-snug tracking-normal text-custom-white antialiased'>
              TechGeek
            </h5>
            <p className='block font-general text-base leading-relaxed text-inherit antialiased'>
              A ReactJS and Node.js fullstack project with RESTful API's, authentication using passport.js, and a responsive design. (In development)
            </p>
          </div>
        </ProjectCard>
        <ProjectCard valueOne={<img src='/static/images/discoland-previeww.png' alt='discoland home page preview' className='rounded-xl mx-auto' title='dicoland home page preview' width='95%' height='95%' />} valueTwo='https://github.com/RogelioRomo/Discoland' valueThree='https://discoland.vercel.app/'>
          <div className='p-6'>
            <h5 className='mb-2 block font-tanker text-xl leading-snug tracking-normal text-custom-white antialiased'>
              Discoland
            </h5>
            <p className='block font-general text-base leading-relaxed text-inherit antialiased'>
              A ReactJS ecommerce project, use of hooks, carts creation, order number creations, item details, record type pages.
            </p>
          </div>
        </ProjectCard>
        <ProjectCard valueOne={<img src='/static/images/flute-preview.png' alt='flute login page preview' className='rounded-xl mx-auto' title='flute login page preview' width='95%' height='95%' />} valueTwo='https://github.com/RogelioRomo/flute-music-app' valueThree=''>
          <div className='p-6'>
            <h5 className='mb-2 block font-tanker text-xl leading-snug tracking-normal text-custom-white antialiased'>
              Flute music app
            </h5>
            <p className='block font-general text-base leading-relaxed text-inherit antialiased'>
              A ReactJS and Node.js fullstack project using Spotify's API, authentication using Oauth and web tokens, and a responsive design.
            </p>
          </div>
        </ProjectCard>
      </div>
    </div>
  )
}
