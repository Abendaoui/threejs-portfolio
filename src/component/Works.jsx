/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { github } from '../assets'
import { live } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, speed: 450, scale: 1 }}
        className='p-5 bg-tertiary rounded-2xl w-full 
        sm:w-[360px]'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full rounded-2xl object-cover'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            {/* Github Repo */}
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='w-10 h-10 black-gradient rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt={`github-${name}`}
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            {/* Live Preview */}
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='w-10 h-10 black-gradient rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={live}
                alt={`github-${name}`}
                className='w-1/2 h-1/2 object-contain rounded-full'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white text-[20px] text-bold'>{name}</h3>
          <p className='text-[13px] text-secondary mt-2'>{description}</p>
        </div>
        <div className='mt-5 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color} cursor-pointer hover:opacity-70 duration-500`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          variants={fadeIn('', '', 0.1, 1)}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          laudantium, similique neque quas iste veritatis voluptatem enim nemo a
          itaque recusandae fugit expedita, ipsam maxime ratione dolores
          delectus ea. Perferendis est eos excepturi quo deserunt!
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`p-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'work')
