import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'
import thumbNail from '../assets/github.jpeg'

const slides = [
  {
    id: 0,
    imageSrc: thumbNail,
    projectName: 'GitHub',
    projectLink: 'https://github.com/takazo3?tab=repositories',
    projectDescription:
      'これまでの100以上のさまざまな技術スタックや学びについての詳細が記載されています。\nVarious technology stacks and learning experiences',
    githubLink: 'https://github.com/takazo3?tab=repositories',
  },
  {
    id: 1,
    imageSrc: '../../public/Web.jpg',
    projectName: 'Web Site',
    projectLink: 'https://pave-up.co.jp/work/',
    projectDescription:
      'WordPressを用いたサイトや動的なサイトまでさまざまなサイトを多く手がけてきました。\nI have worked on a wide variety of sites, from those using WordPress to dynamic websites.',
    githubLink: 'https://pave-up.co.jp/work/',
  },
  {
    id: 2,
    imageSrc: '../../public/Hotline.png',
    projectName: 'Line Bot',
    projectLink: 'https://pave-up.co.jp/work#hotline',
    projectDescription:
      '感情の言語化が難しい時に、感情を言葉に変えてくれるLINE Botを開発しました。場面緘黙や自閉のお子さんから小さなお子さんや大人まで。\nI developed a LINE Bot that converts emotions into words when it is difficult to verbalize emotions.',
    githubLink: 'https://pave-up.co.jp/work#hotline',
  },
  {
    id: 3,
    imageSrc: '../../public/design.jpg',
    projectName: 'Design',
    projectLink: 'https://pave-up.co.jp/work#design',
    projectDescription:
      'ロゴや印刷物までさまざまなデザインをしています。クライアント様のコンセプトとアイデアを融合しています。\nI design a wide variety of items, from logos to printed materials, blending my clients\' concepts and ideas.',
    githubLink: 'https://pave-up.co.jp/work#design',
  },
  {
    id: 4,
    imageSrc: '../../public/DT.png',
    projectName: 'オンラインスクール',
    projectLink: 'https://college.coeteco.jp/s/dtacademy',
    projectDescription:
      'お子様から人材育成や就労支援などでスキルを身に付けたい方へ、電源の入れ方からコンピューターサイエンスまで学べるオンラインスクールを製作中。\nAn online school that teaches IT and PC skills accessible to everyone.',
    githubLink: 'https://college.coeteco.jp/s/dtacademy',
  },
  {
    id: 5,
    imageSrc: '../../public/art.png',
    projectName: 'Arts and Crafts',
    projectLink: 'https://minne.com/@tasha965',
    projectDescription:
      '水彩画などのアートからデジタルアート、ハンドメイドのアクセサリーを作ったりしています。\nI create digital art and handmade accessories, in addition to working with traditional mediums like watercolor paintings.',
    githubLink: 'https://minne.com/@tasha965',
  },
]
export const Projects = () => {
  const Card = ({ 
    imageSrc,
    projectName,
    projectLink,
    projectDescription,
    githubLink
  }) => {
    return (
      <div className="border-4 w-full glass-background rounded-lg overflow-hidden flex flex-col">
        <div className="w-full">
          <a href={projectLink} className="black w-full h-full">
            <img
              src={imageSrc}
              alt={projectName}
              className="w-full object-cover cursor-pointer flex-shrink" />
          </a>
          <div className="flex flex-col justify-start items-center h=[40%]mx-1 my-1">
            <h2 className="text-center font-bold my-3">{projectName}</h2>
            <p className="text-center mb-5">{projectDescription}</p>
            <div className="flex justify-center mb-1">
              <a href={githubLink} target="_blank">
                {githubLink !=='https://github.com/takazo3?tab=repositories' ? 
                <img
                src='https://img.icons8.com/nolan/64/external-link.png'
                alt='Link'
                className="w-10 h-10 hover-glowing-shadow-and-scale rounded-full" />:<img
                  src='https://img.icons8.com/material-outlined/24/61dbfb/github.png'
                  alt='github'
                  className="w-10 h-10 hover-glowing-shadow-and-scale rounded-full" />
                }
                  </a>
            </div>
          </div>
        </div>

      </div>
    )
  }
  return (
    <section className="relative w-screen h-full">
      <div className="w-full h-screen flex flex-col justify-center items-center text-white z-10 ">
        <h1 className="text-5xl lg:text-7xl mt-10 my-font text-center">
          Portfolio
          <span className="light-blue-text font-semibold"> Pro</span>
          jects
        </h1>
        <p className="mt-5">Swipe or drag the items</p>
        <div className='w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 my-10'>
        <Swiper
      grabCursor={true}
      centeredSlides={true}
      breakpoints={{
        // when window width is >=
        1: {
          slidesPerView: 1.3,
          spaceBetween: 120,
        },
        400: {
          slidesPerView: 1.3,
          spaceBetween: 200,
        },
        1024: {
          slidesPerView: 1.3,
          spaceBetween: 175,
        },
        1280: {
          slidesPerView: 1.5,
          spaceBetween: 150,
        },
        1580: {
          slidesPerView: 1.5,
          spaceBetween: 175,
        },
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={2000}
      loop={true}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 3,
        slideShadows: true,
      }}
      autoHeight={true}
      resizeObserver={true}
      modules={[EffectCoverflow, Autoplay]}
      >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Card 
                  imageSrc={slide.imageSrc}
                  projectName={slide.projectName}
                  projectDescription={slide.projectDescription}
                  projectLink={slide.projectLink}
                  githubLink={slide.githubLink}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
