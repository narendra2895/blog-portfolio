import React, { useState } from "react";
import Image from "next/image";


// swiper 

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Autoplay } from 'swiper';



// framermotion

import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

const testimonialData = [
  {
    id: '1',
    name: 'Mustafa',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nisi voluptatibus eius assumenda soluta dolore animi quisquam omnis non corporis corrupti! Sed ipsam autem fugit assumenda inventore quos nesciunt ea cumque laboriosam, ab, odio dolor saepe?',
    imageTest:'/avatar19.png'
  },
  {
    id: '2',
    name: 'Anil',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nisi voluptatibus eius assumenda soluta dolore animi quisquam omnis non corporis corrupti! Sed ipsam autem fugit assumenda inventore quos nesciunt ea cumque laboriosam, ab, odio dolor saepe?',
    imageTest:'/avatar.png'
  },
  {
    id: '3',
    name: 'Vatsal',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nisi voluptatibus eius assumenda soluta dolore animi quisquam omnis non corporis corrupti! Sed ipsam autem fugit assumenda inventore quos nesciunt ea cumque laboriosam, ab, odio dolor saepe?',
    imageTest:'/hero.png'
  },
  {
    id: '3',
    name: 'Vatsal',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nisi voluptatibus eius assumenda soluta dolore animi quisquam omnis non corporis corrupti! Sed ipsam autem fugit assumenda inventore quos nesciunt ea cumque laboriosam, ab, odio dolor saepe?',
    imageTest:'/t-avt-3.png'
  },
]


const Testimonials = () => {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    // Update the current slide index when the slide changes
    setCurrentSlideIndex(swiper.realIndex);
  };


  return (
    <div className=" container mx-auto text-center h-full py-52" >
      <h1 className="h1 xl:text-4xl text-3xl sm:text-2xl">Testimonials by<span className="text-accent"> Clients and Peers</span></h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={6}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwipermx-auto flex-col items-center justify-center gap-10 lg:gap-30"
        onSlideChange={handleSlideChange}
     >
        {testimonialData.map((item, index) => (
          <SwiperSlide key={item.id}>
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate={index === currentSlideIndex ? "show" : "hidden"}
              exit="hidden"
              className="h-[150px] w-[150px] lg:h-[300px] lg:w-[300px] mx-auto "
            >
              <Image src={item.imageTest} height={400} width={400}  alt="test" />
            </motion.div>
            <div className="flex flex-col justify-center items-center mt-10">
              <motion.h2
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                animate={index === currentSlideIndex ? "show" : "hidden"}
                exit="hidden"
                className="xl:text-4xl text-3xl sm:text-2xl "
              >
                {item.name}
              </motion.h2>
              <motion.p
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                animate={index === currentSlideIndex ? "show" : "hidden"}
                exit="hidden"
                className="py-3 text-lg custom-scroll h-[150px] md:h-100"
              >
                {item.content}
              </motion.p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Testimonials;
