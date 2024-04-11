//next image

import Image from "next/image"

const TopLeftImg = () => {
  return <div className="absolute top-[20px] left-[20px] z-10 w-[50px] h-[50px] xl:hidden">
    <Image src="/my-logo.svg" width={50} height={50} alt="logo-img" className="w-full h-full" />
  </div>;
};

export default TopLeftImg;
