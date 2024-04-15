import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Circles from "../../components/Circles";
import { Autoplay } from 'swiper';
import Image from "next/image";

import { FaPaperPlane, FaDragon } from "react-icons/fa";

const servicesData = [
  {
    id: '0',
    icon: <FaPaperPlane />,
    name: 'Custom Website Development',
    detail: 'I create custom websites that are tailored to your specific needs and requirements. I will work with you to design, develop, and launch a website that meets your goals. I can help you with everything from creating a wireframe to developing the final code. I also offer a variety of additional services, such as SEO, content writing, and social media marketing.'
  },
  {
    id: '1',
    icon: <FaDragon />,
    name: 'Web-Design with UI/UX principles',
    detail: 'I use modern UI/UX principles to create websites that are visually appealing and easy to use. My designs are based on the latest research in human-computer interaction, ensuring that your website is user-friendly and engaging. I can help you create a website that is both beautiful and functional. All my websites are web responsive, so that they can be easily accesible via any user device'
  },
  {
    id: '2',
    name: 'Front-End Development',
    detail: 'I develop front-end websites using the latest technologies, such as React or even traditional HTML, CSS and JS websites. My code is clean, efficient, and secure, ensuring that your website performs well and is protected from security threats.'
  },
  {
    id: '3',
    name: 'Logo or Brand Design',
    detail: 'I have designed a lot of UI screens for a variety of projects that I have worked on, Society Pro, Gulf AdBlue, Harleens Nail N Spa are to name a few'
  },
];

const Services = () => {

  return (
    <div className='container pt-52 mx-auto'>
      <div className="container flex flex-col gap-10 items-center xl:items-start pt-0  mx-auto h-full">
        <Circles />
        <div className=" animate-pulse duration-75 z-10 lg:block hidden">
          <Image src={'/bulb.png'} height={350} width={220} className="absolute bottom-[50px] -left-[100px]" alt="bottom-image " />
        </div>
        <div >
          <h1 className="h1 mb-1 lg:mb-2" style={{maxHeight:'20vh'}}>My Services <span className="text-accent">.</span></h1>
          <p>I have a good understanding of colors and design and love to create websites. </p>
        </div>
        
          <Swiper
            className="mySwiper "
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            // autoplay={{
            //   delay: 10000,
            //   disableOnInteraction: false,
            // }}
            modules={[Autoplay]}
          >
            {servicesData.map((item) => (
              <SwiperSlide key={item.id} className="text-center">
              
                  <h2>{item.name}</h2>
                  <p > {item.detail}</p>
                
              </SwiperSlide>
            ))}

          </Swiper>
        

      </div>
    </div>
  );
};

export default Services;
