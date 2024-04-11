import Image  from "next/image";

import Link from "next/link";

import Socials from '../components/Socials'

const Header = () => {
  return (
  <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        {/* logo */}
        <Link href={'/'}><Image src={'/logo4.svg'}  width={340} height={32} alt="logo-image" priority={true}/></Link>
      {/* Socials
       */}
      
       <Socials />

      </div>
    </div>
  </header>);
};

export default Header;
