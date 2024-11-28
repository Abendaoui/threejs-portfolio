/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
const ExperienceCard = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={icon}
            alt='icon'
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div className=''>
        <h3 className='text-white text-[20px] font-bold'>{title}</h3>
        <p style={{ margin: 0 }} className='text-secondary text-[16px]'>
          {company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {points.map((point, index) => {
          return (
            <li
              className='text-[14px] capitalize pl-1 tracking-wider text-white-100'
              key={`exp-point-${index}`}
            >
              {point}
            </li>
          )
        })}
      </ul>
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I Have Done So Far ?</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} {...experience} />
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
