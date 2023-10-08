import Link from 'next/link';

import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
  RiGmailLine,
} from 'react-icons/ri';
import { BiLogoGmail, BiLogoWhatsapp } from 'react-icons/bi';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <BiLogoGmail />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      {/* <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link> */}
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <BiLogoWhatsapp />
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;
