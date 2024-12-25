import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import img1 from '../images/Avatar_1.png'
import img3 from '../images/Avatar_3.png'
import { IconContext } from 'react-icons'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import Image from 'next/image'
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

export default function App() {
  const [swiperRef, setSwiperRef] = useState(0)

  const swiperlist = [
    {
      id: 0,
      img: <Image src={img1} className="pb-5" alt="alsdkjf" />,
      name: 'Meet Sam',
      title: 'This is first slide.',
      subtitle: 'A subtitle',
    },
    {
      id: 1,
      img: <Image src={img3} className="pb-5" alt="alsdkjf" />,
      name: 'Meet Sam',
      title: 'This is second slide.',
      subtitle: 'A subtitle',
    },
    {
      id: 2,
      img: <Image src={img1} className="pb-5" alt="alsdkjf" />,
      name: 'Meet Sam',
      title: 'This is third slide.',
      subtitle: 'A subtitle',
    },
    {
      id: 3,
      img: <Image src={img3} className="pb-5" alt="alsdkjf" />,
      name: 'Meet Sam',
      title: 'This is fourth slide.',
      subtitle: 'A subtitle',
    },
  ]

  const [prevEl, setPrevEl] = useState(null)
  const [nextEl, setNextEl] = useState(null)

  return (
    <>
      <div className="w-full bg-gray-900">
        <div className="mx-auto max-w-screen-md py-10 px-5 sm:px-10 md:py-20">
          <h1 className="pb-5 text-center text-3xl font-bold text-white sm:text-left">
            Meet Sam
          </h1>
          <div className="flex flex-col items-center px-5 sm:flex-row sm:items-start sm:px-10">
            <div className="h-40 w-40">{swiperlist[swiperRef].img}</div>
            <span className="flex flex-col pl-0 pb-10 sm:pl-10">
              <p className="pt-5 text-center text-2xl font-bold text-white sm:text-left">
                {swiperlist[swiperRef].name}
              </p>
              <p className="py-5 text-center text-white sm:text-left">
                {swiperlist[swiperRef].title}
              </p>
              <p className="text-center text-white sm:text-left">
                {swiperlist[swiperRef].subtitle}
              </p>
            </span>
          </div>
          <div className="relative px-10">
            <Swiper
              onSlideChange={(swiper) => setSwiperRef(swiper.activeIndex)}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
              centeredSlides={true}
              spaceBetween={30}
              navigation={{ prevEl, nextEl }}
              // navigation={true}
            >
              <SwiperSlide className="text-justify text-white">
                Slide 1 Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industrys
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries.
              </SwiperSlide>
              <SwiperSlide className="text-justify text-white">
                Slide 1 Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industrys
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries.
              </SwiperSlide>
              <SwiperSlide className="text-justify text-white">
                Slide 1 Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industrys
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries.
              </SwiperSlide>
              <SwiperSlide className="text-justify text-white">
                Slide 1 Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industrys
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries.
              </SwiperSlide>
            </Swiper>
            <div
              ref={(node) => setPrevEl(node)}
              className="absolute bottom-[40%] left-0 -ml-1.5 h-10 w-10 cursor-pointer rounded-full bg-white duration-300 hover:opacity-80 md:-ml-6"
            >
              <span className="flex justify-center pt-[7px]">
                <GrFormPreviousLink size="1.5rem" />
              </span>
            </div>
            <div
              ref={(node) => setNextEl(node)}
              className="absolute bottom-[40%] right-0 -mr-1.5 h-10 w-10 cursor-pointer rounded-full bg-white duration-300 hover:opacity-80 md:-mr-6"
            >
              <span className="flex justify-center pt-[7px]">
                <GrFormNextLink size="1.5rem" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
