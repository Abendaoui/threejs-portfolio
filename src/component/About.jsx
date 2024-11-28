/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
function ServiceCard({ title, icon, index }) {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}>
        <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className='py-5 px-12 rounded-[20px] bg-tertiary min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h1 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h1>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>OverView.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam autem,
        voluptas in itaque voluptatem quaerat delectus sit libero adipisci. Esse
        animi, voluptas reiciendis cum et odio quia in quisquam accusamus
        voluptatibus? Ad assumenda voluptatum quam ducimus totam expedita
        laborum corrupti.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
