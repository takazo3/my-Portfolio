import React, { useEffect } from 'react'
import { useAnimation, motion, delay } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


export const Hero = () => {
  const isMobile = window.innerWidth < 767
  const delayTime = isMobile ? 1.5 : 0.5
  const h1variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        stiffness: 100,
        duration: 1,
        delay: delayTime,
      }
    },
    hidden: {
      opacity: 0,
      scale: 0,
    }
  }
  const h2variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        stiffness: 100,
        duration: 0.8,
        delay: delayTime + 0.5,
      }
    },
    hidden: {
      opacity: 0,
      scale: 0,
    }
  }
  const controls = useAnimation()
  const [ ref, inView ] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [ controls, inView ])

  return (
    <section className='w-screen h-screen mx-auto'>
      <div className='absolute left-[8%] top-[7%] xl:left-[14%] mx-auto my-font text-white'>
        <motion.h1
          ref={ref}
          animate={controls}
          initial='hidden'
          variants={h1variants}
          className='text-5xl lg:text-6xl'>
          Hi, I'm {' '}<span className='hover-text-glow light-blue-text font-semibold'>{''}Tasha</span>{''}
        </motion.h1>

        <motion.h2
          ref={ref}
          animate={controls}
          initial='hidden'
          variants={h2variants}
          className='mt-8 text-3xl w-2/3 text-center'>
          I'm a full-stack developer
        </motion.h2>
      </div>
      <div className='absolute flex flex-col bottom-[13%] left-[50%] translate-x-[-50%]'>
        <div className='slide-bottom'>
          <div className='down-arrow'></div>
          <div className='down-arrow'></div>
          <div className='down-arrow'></div>
        </div>
      </div>
    </section>
  )
}
