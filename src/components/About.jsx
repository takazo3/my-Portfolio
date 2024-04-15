import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import '../index.css'

export const About = () => {
  const aboutVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  }
  const controls = useAnimation()
  const [ ref, inView ] = useInView()
  useEffect(() => { 
    if (inView) controls.start('visible') 
  }, [ controls, inView ])
  return (
    <section className='relative w-screen h-screen mt-20'>
      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={aboutVariants}
        className='absolute left-[0%] mx-3 md:left-[10%] xl:left-[25%] md:w-1/2 xl:w-1/3 text-white py-3 glowing-shadow border rounded-lg text-center glass-background'>
        <h1 className='text-3xl lg:text-6xl my-font'>
          About{''}
          <span className='light-blue-text font-semibold'>
            Me
          </span>
        </h1>
        <img src='../../public/me.jpg' alt='me' className='mt-2 w-1/3 mx-auto rounded-full' />
        <p className='mt-8 mx-3 text-base font-serif'>
          I'm a full stack web developer with a passion for creating beautiful and functional websites or applications.<br/><br/>
          さまざまなデザインからスマホアプリ、Webアプリケーションの開発や美しいWevサイトの作成が得意です。<br/>
          ハードウェアやネットワーク、ソフトウェアを自己学習し、今でもSNSやさまざまなことにチャレンジし続けています。<br/><br/>
          I have experience with a wide range of technologies and frameworks including:<br/>
          言語：JavaScript, HTML, CSS, Python, PHP, Dart, Go <br/>
          フレームワーク：React, Next.js, Vue.js, Laravel, Flutter, WordPress etc... <br/>
        </p>
      </motion.div>
      <div className='absolute flex flex-col bottom-[20%] left-[50%] translate-x-[-50%]'>
        <div className='slide-bottom'>
          <div className='down-arrow'></div>
          <div className='down-arrow'></div>
          <div className='down-arrow'></div>
        </div>
      </div>
    </section>
  )
}
