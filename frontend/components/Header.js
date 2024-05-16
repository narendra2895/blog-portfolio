import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-8 md:px-16 xl:px-0 xl:h-[90px]" style={{ backgroundColor: '#121124' }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-2 lg:py-8">
          {/* logo */}
          <Link href={'/'}>
            <Image
              src={'/logo4.svg'}
              width={170} // Half of the original width
              height={16} // Half of the original height
              alt="logo-image"
              priority={true}
              className="sm:w-[170px] sm:h-[16px] md:w-[340px] md:h-[32px]"
            />
          </Link>
          {/* Socials */}
          <div className="flex space-x-4">
            <Socials className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
