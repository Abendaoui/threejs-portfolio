/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'
const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [load, setLoad] = useState(false)

  function handleChange(e) {
    e.preventDefault()
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex overflow-hidden flex-col-reverse gap-10'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h2 className={styles.sectionHeadText}>Contact Us.</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label htmlFor='name' className='flex flex-col'>
            <span className='mb-4 text-white text-[12px]'>Your Name :</span>
            <input
              type='text'
              name='name'
              id='name'
              value={form.name}
              onChange={handleChange}
              placeholder='John Doe'
              className='bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none'
            />
          </label>
          <label htmlFor='email' className='flex flex-col'>
            <span className='mb-4 text-white text-[12px]'>Your Email :</span>
            <input
              type='email'
              name='email'
              id='email'
              value={form.email}
              onChange={handleChange}
              placeholder='johndoe@gmail.com'
              className='bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none'
            />
          </label>
          <label htmlFor='msg' className='flex flex-col'>
            <span className='mb-4 text-white text-[12px]'>Your Message :</span>
            <textarea
              rows={7}
              name='message'
              id='msg'
              value={form.message}
              onChange={handleChange}
              placeholder='What Do U Wanna Say ?'
              className='bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none resize-none'
            />
          </label>
          <button
            type='submit'
            className='py-3 px-8 bg-tertiary rounded-xl w-fit text-white shadow-lg shadow-primary'
          >
            {load ? 'Sending' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
