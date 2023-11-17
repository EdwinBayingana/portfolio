import Image from 'next/image';

import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            <p className="animate-pulse text-3xl">
              🚨 The Home Page is still&nbsp;
              <span className="text-accent italic">under construction</span>...
              🚧
            </p>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mi
            molestie, feugiat metus eu, volutpat mi. Suspendisse imperdiet
            viverra augue, vitae elementum dolor feugiat in. Morbi vestibulum
            tempus neque, semper faucibus tellus vulputate eget.
            <br />
            <br />
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          {/* <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div> */}
        </div>
      </div>

      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image 👇🏽*/}
      </div>
    </div>
  );
};

export default Home;
