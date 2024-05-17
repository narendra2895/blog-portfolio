import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';



const projectData = [
  {
    id: '0',
    image: 'https://res.cloudinary.com/dldblks5t/image/upload/v1715903723/Screenshot_2024-05-17_005408_ni101d.png',
    name: 'AI Image Manipulation SAAS',
    link: 'https://snaprealm.vercel.app/',
    desc: 'SAAS for image manipulation using AI'
  },
  {
    id: '1',
    image: 'https://res.cloudinary.com/dldblks5t/image/upload/v1715903724/Screenshot_2024-05-17_005438_qaezr0.png',
    name: 'Travel Advisor App',
    link: 'https://narendra2895.github.io/travel-app/',
    desc: 'Travel advisor app using react and travel advisor api'
  },
  {
    id: '2',
    image: '/thumb8.png',
    name: '3D Box Model',
    link: 'https://narendra2895.github.io/3dBoxModel/',
    desc: 'Using three js you can play around by customizing the dimensions and colors of the cube'
  },
  // {
  //   id: '2',
  //   image: '/thumb6.png',
  //   name: 'Gulf AdBlue India',
  //   link: 'https://adblue.gulfoilindia.co.in/',
  //   desc: 'Wordpress website which hass helped increase the marketing and business of the company. '

  // },
  {
    id: '3',
    image: '/blogs.webp',
    name: 'Technical writing ',
    link: 'https://kulkarninarendra.co.uk/blogs',
    desc: 'Blogs page using mern stack'
  },
  {
    id: '4',
    image: '/thumb5.jpg',
    name: 'Javascript Projects',
    link: 'https://github.com/narendra2895/Javascript-Projects',
    desc: 'Javascript projects to enchance knowdledge and skill and just to have fun.'
  },

]

const Work = () => {
  return (
    <div className="lg:p-40 p-5 pt-20 mx-auto scroll custom-scroll pb-20">
      <div className="flex flex-col xl:gap-10  content justify-center items-center ">
        <div className="basis-1/2">
          <h1 className="h1 basis-1/2 text-center mb-0"> My <span className="text-accent">Work.</span></h1>
          <p className="">During my tenure at 3Minds Digital, I successfully led the development of a WordPress microsite for Gulf AdBlue India, managing both frontend and backend components and maintaining close client collaboration. Additionally, I engineered a cost-effective store locator application using the Google Maps Platform, optimizing API calls for efficiency. My portfolio includes diverse JavaScript projects and an interactive 3D box modal created with Three.js, demonstrating my commitment to web development and innovation.</p>
        </div>
        <div className="flex lg:flex-row flex-col  gap:20 xs:mt-20 mt-10 mb-20">

          {projectData.map((item) => (
            // <SwiperSlide key={item.id} className="h-100">
            <>
           
                <div className="flex flex-col gap-3 custom-scroll  lg:basis-1/2 mt-5 mb-5 " >
                  <Image src={item.image} height={300} width={350} alt="image" className="rounded-xl h-[200px] w-[250px] mx-auto" />
                  <a href={item.link} target="blank" clas><p className="text-center text-2xl">{item.name}</p></a>
                  <p className="xl:text-center " >{item.desc}</p>
                </div>
              
            </>
            // </SwiperSlide>
          ))}

</div>
</div>
      </div>


        )}

export default Work;
