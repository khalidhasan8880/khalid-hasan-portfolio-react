import { motion } from "framer-motion";
import {
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiSolidMoon,
  BiSolidSun,
} from "react-icons/bi";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const themeHandler = () => {
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };
  useEffect(() => {
    document.body.className = darkTheme ? "dark" : "light";
  }, [darkTheme]);

  useEffect(() => {
    const handleScroll = () => {
      // const home = document.getElementById('')
      const home = document.getElementById("home");
      const about = document.getElementById("about");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");

      const { scrollY } = window;
      if (scrollY < about.offsetTop) {
        setActiveSection("#");
      } else if (scrollY >= about.offsetTop && scrollY < projects.offsetTop) {
        setActiveSection("#about");
      } else if (scrollY >= projects.offsetTop && scrollY < contact.offsetTop) {
        setActiveSection("#projects");
      } else if (scrollY >= contact.offsetTop) {
        setActiveSection("#contact");
      } else {
        setActiveSection("");
      }
      console.log("section ", about.offsetTop);
      console.log("scroll ", scrollY);
      console.log(activeSection);
    };

    document.addEventListener("scroll", handleScroll);
  }, [activeSection]);
  return (
    <header className="flex-between py-3 px-2 fixed top-0 left-0 w-full z-[55] dark:bg-black bg-white">
      <nav className="">
        <a href="#" className="relative group mr-2 md:mr-4 ">
          {" "}
          Home
          <span
            className={` absolute -bottom-[2px] left-0 bg-[#0091ff] h-[2px] inline-block group-hover:w-full transition-[width] ease-out duration-200 ${
              activeSection === "#" ? "w-full" : "w-0"
            }`}></span>
        </a>
        <a href="#about" className="relative group mr-2 md:mr-4 ">
          About
          <span
            className={` absolute -bottom-[2px] left-0 bg-[#0091ff] h-[2px] inline-block group-hover:w-full transition-[width] ease-out duration-200 ${
              activeSection === "#about" ? "w-full" : "w-0"
            }`}></span>
        </a>
        <a href="#projects" className="relative group mr-2 md:mr-4 ">
          Projects
          <span
            className={` absolute -bottom-[2px] left-0 bg-[#0091ff] h-[2px] inline-block group-hover:w-full transition-[width] ease-out duration-200 ${
              activeSection === "#projects" ? "w-full" : "w-0"
            }`}></span>
        </a>
        <a href="#contact" className="relative group mr-2 md:mr-4 ">
          Contact
          <span
            className={` absolute -bottom-[2px] left-0 bg-[#0091ff] h-[2px] inline-block group-hover:w-full transition-[width] ease-out duration-200 ${
              activeSection === "#contact" ? "w-full" : "w-0"
            }`}></span>
        </a>
      </nav>
      <nav className="hidden sm:flex justify-center items-center ">
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

        <button onClick={themeHandler}>
          {darkTheme ? (
            <BiSolidMoon size={25}></BiSolidMoon>
          ) : (
            <BiSolidSun size={25}></BiSolidSun>
          )}
        </button>
      </nav>
      <button className="sm:hidden" onClick={themeHandler}>
        {darkTheme ? (
          <BiSolidMoon size={25}></BiSolidMoon>
        ) : (
          <BiSolidSun size={25}></BiSolidSun>
        )}
      </button>
    </header>
  );
};

export default Navbar;
