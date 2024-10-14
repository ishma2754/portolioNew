import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilePic.jpg";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-gray-200 dark:border-neutral-900 pb-4 lg:mb-35 bg-neutral-100 dark:bg-neutral-950">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl text-neutral-900 dark:text-neutral-300"
            >
              Ishma Khan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-gray-700 dark:text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-8 sm:mb-10"
            >
              <a
                href="https://github.com/ishma2754/Resume/blob/main/Ishma%20Khan%20Resume.pdf"
                download="Ishma_Khan_Resume"
                className="flex items-center justify-center p-2 rounded-md text-xs font-medium transition-all
                 bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-red-500 dark:text-white dark:hover:bg-gradient-to-l"
              >
                <FaDownload className="text-3xl mr-2" />
                <span className="text-xl">Download Resume</span>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-4 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Ishma Khan"
              className="rounded-lg"
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
