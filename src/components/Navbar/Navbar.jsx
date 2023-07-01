import { motion } from "framer-motion";
import CustomLink from "../CustomLink/CustomLink";
import { BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoGithub } from "react-icons/bi";
const Navbar = () => {
  return (
    <header className="flex-between py-3 px-2 fixed top-0 left-0 w-full z-[55] bg-black text-white">
      <nav className="">
        <CustomLink href="" title="Home"></CustomLink>
        <CustomLink href="#about" title="About" />
        <CustomLink href="#projects" title="Projects" />
        <CustomLink href="#contact" title="Contact" />
      </nav>
      <nav className="flex-center ">
        <motion.a
          target="_blank"
          href="https://web.facebook.com/Khalid.hotsot"
          className="w-9 mr-4"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}>
          <BiLogoFacebookCircle size={30}></BiLogoFacebookCircle>
        </motion.a>
        <motion.a
          target="_blank"
          href="https://www.linkedin.com/in/khalid-hasan-42a81427b"
          className="w-9 mr-4"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}>
          <BiLogoLinkedinSquare size={30}></BiLogoLinkedinSquare>
        </motion.a>
        <motion.a
          target="_blank"
          href="https://github.com/khalidhasan8880"
          className="w-9 mr-4"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}>
          <BiLogoGithub size={30}></BiLogoGithub>
        </motion.a>
{/* 
        <button onClick={themeHandler}>{darkMode ? <BiSolidMoon size={25}></BiSolidMoon>: <BiSolidSun size={25}></BiSolidSun>}</button> */}
      </nav>
    </header>
  );
};

export default Navbar;
