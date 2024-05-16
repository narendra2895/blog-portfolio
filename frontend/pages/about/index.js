/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Avatar2 from '../../components/Avatar2';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
import Image from "next/image";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Flash of the Month',
        stage: 'June 2023',
      },

    ],
  },
  {
    title: 'experience',
    info: [

      {
        title: 'Freelance Web Developer',
        stage: 'January 2023 - Present',
      },
      {
        title: 'Full-Stack Developer - 3 Minds Digital',
        stage: 'January 2023 - August 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Bachelors in Engineering',
        stage: '2017',
      },
      {
        title: 'Fundamentals with MySQL',
        stage: '2023',
      },      
      {
        title: 'IBM Python for Web Development',
        stage: '2023',
      },      
      {
        title: 'Advanced Python Certfication',
        stage: '2023',
      },      
      {
        title: 'Python Development Essential   Certfication',
        stage: '2023',
      },      
      {
        title: 'PG Diploma Certfication in Web Development',
        stage: '2023',
      }
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index)


  return (<div className="h-full bg-primary/30 pt-32 text-center xl:text-left  overflow-y-scroll " >
    <Circles />
    {/* {avatar image} */}
    <motion.div variants={fadeIn('right', 1.5)} initial="hidden" animate="show" exit="hidden" className="hidden  lg:flex xl:flex absolute bottom-[-50px] lg:bottom-[-50px] md:bottom-[65px] -left-[104px] md:w-[450px] md:h-[330px] w-[550px] h-[465px] lg:w-[550px] lg:h-[465px]">
      <Avatar2 />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-start xl:flex-row gap-x-12 gap-y-12 mt-10  lg:mt-0 mb-10 lg:mb-0">
      <div className="flex-1 flex flex-col justify-center "> 
      <h1 className="h1">Hello Peeps<span className="text-accent">.</span></h1>
      <p>I think the website will let you know about my professional skills anyways. So let me tell you about the kind of person I am. I love to watch anime and 
        learn from them. I am full of energy and always up to meet new people. Brining positive and happy vibes to any room that I enter is a top priority for me.
      </p>
      </div>
      <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]   ">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4    ">
          {aboutData.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className={`${index === itemIndex && 'text-accent afteer:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}> {item.title} </div>
            )
          })}
        </div>
   
        <div className="xl:text-left text-center  px-2 py-2 xl:py-2 flex flex-col gap-y-8  xl:gap-y-4 items-center xl:items-start rounded-2xl custom-scroll xl:overflow-visible  h-[150px] md:h-[250px] xl:h-full">
          {aboutData[index].info.map((item, itemIndex) => {
            return <div key={itemIndex}>
              <div>{item.title}</div>
              <p>{item.stage}</p>
              <div className="flex xl:flex-nowrap flex-wrap gap-x-8  gap-y-10 mt-[10px] justify-center">
                  {item.icons?.map((icon, iconIndex)=>{
                    return (
                      <div className="text-3xl xl:text-6xl" key={iconIndex}>
                        {icon}
                         </div>
                    )
                  })

                  }
              </div>
            </div>
          })}
        </div>
        
      </div>

    </div>

  </div>);
};

export default About;
