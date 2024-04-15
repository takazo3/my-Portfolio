import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/autoplay'

const slides = [
  {
    id: 0,
    jobTitle: 'Freelancer',
    companyName: 'ZERO',
    datesWorked: ' 2008 - 2015 ',
    jobDescription:
      'メディカルトリマーとして皮膚ケアを得意とするペットサロンとレストランバーを経営しながらデザインとWeb制作をしていました。この頃からAdobe IllustratorとPhotoshopを使い始めました。またノーコードのWeb制作やレンタルサーバーなどをこの頃から利用し始めました。\nWhile running a pet salon specializing in skin care as a medical groomer and managing a restaurant bar, I also worked on design and web development. It was during this time that I began using Adobe Illustrator and Photoshop. Additionally, I started utilizing no-code web development tools and rental servers around this period.',
  },
  // {
  //   id: 1,
  //   jobTitle: 'JAPANESE/ENGLISH TEACHER',
  //   companyName: 'NATIVE CAMP/ITALKI',
  //   datesWorked: ' 2016 - 2021',
  //   jobDescription:
  //     'さまざまな国の方にオンラインで英語・日本語を教えていました。ここでオンラインで教えるテクニックを培いました。さらにこの時期に自己学習でプログラミングを始め、この頃からさまざまな言語でアプリケーションを開発したりネットワークやAWSの知識を身に付けてきました。\nI taught English and Japanese online to people from various countries. I honed my online teaching techniques during this time. Additionally, I began self-studying programming during this period and have since developed applications in various languages and acquired knowledge of networking and AWS.'

  // },
  {
    id: 1,
    jobTitle: 'FreeLancer',
    companyName: 'Re:ZERO',
    datesWorked: ' 2020 - 2023',
    jobDescription:
      '本格的にWeb制作や印刷物のデザイン、ドローン撮影と動画編集などをパッケージとして提供を開始し、企業様の情シス的なご相談にも対応しておりました。WordPressや通常のHTMLのページなど多数制作させていただきました。またシステム開発の受託も行いました。　　　I began offering a comprehensive package of services including web production, print design, drone photography, and video editing. I also provided IT consulting for businesses, creating numerous websites using WordPress and standard HTML. Additionally, I undertook contracted system development projects.',
  },
  {
    id: 2,
    jobTitle: 'SES Fullstack Developer',
    companyName: '株式会社Wemotion・Relic ',
    datesWorked: ' 2022 - 2024',
    jobDescription:
      'SESでフルスタックとしてさまざまな案件に携わりました。メインはフロントエンドですがバックエンドやAWSに関わる機会も多くありました。またNext.jsやReactを用いた開発が多く、それ以外にもWord Pressのスポット案件にも携わりつつ学びの多い中、さらに自己学習をしていました。As a full-stack developer in SES (System Engineering Service), I worked on various projects. While my main focus was on frontend development, I also had numerous opportunities to work with backend systems and AWS. I frequently developed using Next.js and React, and engaged in sporadic WordPress projects.',
  },
  {
    id: 3,
    jobTitle: 'CEO',
    companyName: '株式会社Pave Up ',
    datesWorked: ' 2024 - ',
    jobDescription:
      'Re:ZEROの仕事を引き続き、株式会社Pave Upを設立。今後は誰でもITの高度な学習ができるオンライン講座や福祉支援に繋がるアプリケーションの開発をしていくため現在さまざまなものを制作中。一時、体調が悪くとても辛い時期を経験したことを活かしてチャレンジし続ける精神を持ち、また誰かの役に立ちたいと思っています。Following my work on Re:ZERO, I established the company Pave Up. Moving forward, the company aims to offer online courses that enable anyone to undertake advanced IT learning, as well as to develop applications that contribute to welfare support.',
  },
]

export const WorkExperience = () => {
  const Card = ({ jobTitle, companyName, datesWorked, jobDescription }) => {
    return (
      <div className='border-2 w-[98%] glass-background rounded-lg  flex flex-col  glowing-shadow'>
        <div className='text-white flex flex-col justify-start items-center  mx-1 my-5'>
          <h2 className='text-lg text-center mb-5'>{jobTitle}</h2>
          <h3 className='text-lg text-center mb-5'>{companyName}</h3>
          <p className='text-center mb-5'>{datesWorked}</p>
          <p className='text-center mb-5 border-t-2 pt-5'>{jobDescription}</p>
        </div>
      </div>
    )
  }

  return (
    <section className='relative w-screen h-screen overflow-hidden '>
      <div className='w-full h-full flex flex-col justify-center items-center text-white z-10 my-5'>
        <h1 className='text-5xl lg:text-7xl mt-10 my-font text-center mx-1'>
          Work
          <span className=' light-blue-text font-semibold '> Exp</span>
          erience
        </h1>
        <p className='mt-5'>Swipe or drag the items</p>
        <div className='w-[90%] lg:w-1/4 my-10'>
          <Swiper
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            effect={'cube'}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            modules={[ EffectCube, Autoplay ]}
            className='mySwiper'>
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Card
                  jobTitle={slide.jobTitle}
                  companyName={slide.companyName}
                  datesWorked={slide.datesWorked}
                  jobDescription={slide.jobDescription}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

