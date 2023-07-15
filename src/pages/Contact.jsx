import { FaPhone } from "react-icons/fa6";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoGmail, BiLogoLinkedinSquare } from "react-icons/bi";
import { motion } from "framer-motion";

const Contact = () => {
    
  return (
    <section id="contact" className="flex flex-col items-center justify-center">
      <SectionTitle title="Contact"></SectionTitle>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 banner py-5 px-2 ">
        <div className="flex justify-between flex-col gap-2 order-3 lg:order-1">
          <div className="flex items-center gap-3">
            <div className="border-2 border-[#0091ff] flex-center h-20 w-20 rounded-full">
              <FaPhone size={50}></FaPhone>
            </div>
            <div className="flex  flex-col gap-y-2">
              <h1 className="text-1xl md:text-3xl font-extrabold">Phone Number</h1>
              <p className="font-semibold">01619167602</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="border-2 border-[#0091ff] flex-center h-20 w-20 rounded-full">
              <BiLogoGmail size={50}></BiLogoGmail>
            </div>
            <div className="flex  flex-col gap-y-3">
              <h1 className="text-1xl md:text-3xl font-extrabold">Email</h1>
              <p className="font-semibold">khalidhasan8880@gmail.com</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <motion.a
                target="_blank"
                href="https://web.facebook.com/Khalid.hotsot"
                className="w-9 mr-4"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}>
                <BiLogoFacebookCircle size={50}></BiLogoFacebookCircle>
              </motion.a>
              <motion.a
                target="_blank"
                href="https://www.linkedin.com/in/khalid-hasan-42a81427b"
                className="w-9 mr-4"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}>
                <BiLogoLinkedinSquare size={50}></BiLogoLinkedinSquare>
              </motion.a>
              <motion.a
                target="_blank"
                href="https://github.com/khalidhasan8880"
                className="w-9 mr-4"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}>
                <BiLogoGithub size={50}></BiLogoGithub>
              </motion.a>
              {/* 
        <button onClick={themeHandler}>{darkMode ? <BiSolidMoon size={25}></BiSolidMoon>: <BiSolidSun size={25}></BiSolidSun>}</button> */}
            </div>
          </div>
          <div></div>
        </div>
        <form action="https://formspree.io/f/mdornjlw" method="POST" className="lg:col-span-2 rounded-2xl order-1 lg:order-3">
        <input
            className="glass w-full outline-[#0091ff] rounded-xl h-14 border-2 focus:outline-none !border-[#0091ff] px-4 mt-3"
            placeholder="Name"
            name="Name"
            type="text"
            required
          />
          <input
            className="glass w-full outline-[#0091ff] rounded-xl h-14 border-2 focus:outline-none !border-[#0091ff] px-4 mt-3"
            placeholder="Email"
            name="email"
            type="email"
            required
          />
          <textarea
            className="glass w-full outline-[#0091ff] p-4 rounded-xl h-32 border-2 focus:outline-none !border-[#0091ff] px-4 mt-3"
            placeholder="Message"
            name="message"
            type="text"
          />
          <input
            type="submit"
            value="Submit"
            className="mt-1 px-6 py-3 cursor-pointer bg-[#01439C] hover:bg-[#0091ff] transition-all  font-semibold text-white rounded-full "
          />
        </form>
      </div>
      
      
    </section>
  );
};

export default Contact;
