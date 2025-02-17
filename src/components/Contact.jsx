import { useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_th6by12',
        'template_949i30c',
        {
          from_name: form.name,
          to_name: 'Pave Up',
          from_email: form.email,
          to_email: 'info@pave-up.co.jp',
          message: form.message,
        },
        'S5d2zA9pvePI-OuPB'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thanks! I will get back to you soon.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert('Oops, something went wrong. Please try again.')
        }
      )
  }

  // FRAMER MOTION
  const contactVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  }
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section className='w-full h-full relative flex flex-col justify-center items-center overflow-hidden'>
      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={contactVariants}
        className='border-2 w-[98%] md:w-[60%] xl:w-[40%] text-center transparent-glass-background py-8 px-4 rounded-3xl glowing-shadow  mt-20 mb-10'>
        <h1 className=' header-text-glow my-font text-5xl lg:text-7xl text-white  '>
          C<span className=' light-blue-text font-semibold '>on</span>t
          <span className=' light-blue-text font-semibold '>act</span>
        </h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white mb-4 font-bold'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className='border-2  py-4 px-6 text-white
               rounded-lg outline-none  font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-bold- mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="aaa@xxx.com"
              className='border-2  text-black py-4 px-6 rounded-lg outline-none  font-medium'></input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Please leave your message...'
              className='border-2  py-4 px-6 text-black rounded-lg outline-none  font-medium'></textarea>
          </label>
          <button
            type='submit'
            className='border-2 hover-glowing-shadow-and-scale py-3 px-8 rounded-xl outline-none w-fit text-white font-bold'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </section>
  )
}

