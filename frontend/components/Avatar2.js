import Image from 'next/image';

const Avatar2 = () => {
  return (
    <div className='hidden md:flex lg:flex xl:flex xl:max-w-none'>
      <Image src={'/avata-side-6.png'} width={800} height={578} alt="avatar"  className='translate-z-0 '/>
    </div>);
};

export default Avatar2;
