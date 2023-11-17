import Image from 'next/image';

import Link from 'next/link';

import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* Dummy Logo with a design of interest */}
          <Link href={'/'}>
            {/* <Image
              src={'/logo.svg'}
              width={220}
              height={48}
              alt="Edwin's logo"
              priority={true}
            /> */}
            <h1 className="text-white text-2xl">
              edwin_<span className="text-accent">zed</span>
            </h1>
          </Link>

          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
