import Link from 'next/link';

import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
  RiGmailLine,
} from 'react-icons/ri';
import { BiLogoGmail, BiLogoWhatsapp } from 'react-icons/bi';
import { CiLinkedin } from 'react-icons/ci';

const Socials = () => {
  const linkStyles = 'hover:text-accent transition-all duration-300';
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className={linkStyles}>
        <RiGithubLine />
      </Link>
      <Link href={''} className={linkStyles}>
        <BiLogoGmail />
      </Link>
      <Link href={''} className={linkStyles}>
        <RiInstagramLine />
      </Link>
      <Link href={''} className={linkStyles}>
        <CiLinkedin />
      </Link>
      {/* <Link href={''} className={linkStyles}>
        <RiTwitterLine />
      </Link> */}
      {/* <Link href={''} className={linkStyles}>
        <BiLogoWhatsapp />
      </Link> */}

      {/* <Link href={''} className={linkStyles}>
        <RiFacebookLine />
      </Link> */}
    </div>
  );
};

export default Socials;
