import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link href={'/work'} style={{ zIndex: 10 }} className='relative w-[7.70833rem] h-[7.70833rem] md:w-[11.5625rem] md:h-[11.5625rem] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
        <Image src={'/rounded-text.png'} width={141} height={148} alt="image2" className='animate-spin-slow w-full h-full max-w-[5.875rem] max-h-[6.16667rem] md:max-w-[8.8125rem] md:max-h-[9.25rem]' />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
