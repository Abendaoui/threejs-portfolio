/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start flex-row gap-5`}
      >
        <article className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-violet-600' />
          <div className='w-1 h-40 sm:h-80  violet-gradient' />
        </article>
        <article>
          <h1 className={`${styles.heroHeadText}`}>
            Hi I am <span className='text-violet-500'>Adil</span>
          </h1>
          <p className={`${styles.heroSubText} text-white mt-2 capitalize`}>
            I am A junior full-Stack Developer{' '}
            <br className='sm:block hidden' /> Who Wanna Be A Software Engineer
          </p>
        </article>
      </div>
      <ComputersCanvas />
      <div className='absolute bottom-32 xs:bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
