import Image from "next/image";

import ParticleContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';


// framermotion

import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../variants'


const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      {/* text  */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40  xl:text-left h-full container mx-auto">
          {/* title  */}
          <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1">Full Stack  <span className="text-accent">Developer</span></motion.h1>
          {/* subtitle */}
          <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">Ignited with curiosity, I embarked on a transformative web development journey. From the inception, my focus on frontend skills blazed a trail of innovation. Overcoming hurdles, I sculpted captivating websites, each line of code reflecting my dedication to mastering the art of frontend design</motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image  */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0" >
        {/* bg-image  */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

        {/* particles  */}

        <ParticleContainer />
        {/* Avatar */}

        <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden" className="w-full h-[90%] max-w-[737px] max-h-[678px] absolute -bottom-0 lg:bottom-[0%] lg:right-[-3%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
