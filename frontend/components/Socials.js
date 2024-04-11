import Link from "next/link";

import { RiInstagramLine, RiWhatsappLine, RiLinkedinLine } from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-3xl">
      <Link href={'https://www.instagram.com/narendra_kulkarni28/'} target="_blank" className="hover:text-accent transition-all duration-300" ><RiInstagramLine /></Link>
      <Link href={'https://wa.me/7039226256'} target="_blank" className="hover:text-accent transition-all duration-300" ><RiWhatsappLine /></Link>
      <Link href={'https://www.linkedin.com/in/narendra-kulkarni-4a3487216/'} target="_blank" className="hover:text-accent transition-all duration-300" ><RiLinkedinLine /></Link>

    </div>
  );
};

export default Socials;
