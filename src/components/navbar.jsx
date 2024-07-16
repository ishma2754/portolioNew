import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import ThemeToggle from "./ThemeToggle";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 bg-neutral-100 dark:bg-neutral-950">
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ishma-khan-3765992a5" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" />
        </a>
        <a href="https://github.com/ishma2754" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" />
        </a>
        <a href="https://x.com/Ishma2754" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" />
        </a>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
