import { FaPhone } from "react-icons/fa6";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoGmail, BiLogoLinkedinSquare } from "react-icons/bi";
import { motion } from "framer-motion";

const Contact = () => {
    
  return (
    <section id="contact">
      <SectionTitle title="About"></SectionTitle>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 banner py-5 px-2 ">
        <div className="flex justify-between flex-col gap-2 order-3 sm:order-1">
          <div className="flex items-center gap-3">
            <div className="border-4 border-[#0091ff] flex-center h-20 w-20 rounded-full">
              <FaPhone size={50}></FaPhone>
            </div>
            <div className="flex  flex-col gap-y-3">
              <h1 className="text-3xl font-extrabold">Phone Number</h1>
              <p className="font-semibold">01619167602</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="border-4 border-[#0091ff] flex-center h-20 w-20 rounded-full">
              <BiLogoGmail size={50}></BiLogoGmail>
            </div>
            <div className="flex  flex-col gap-y-3">
              <h1 className="text-3xl font-extrabold">Email</h1>
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
        <div className="lg:col-span-2 rounded-2xl glass order-1 sm:order-3">
          <input
            className="w-full outline-[#0091ff] rounded-xl h-14 border-2 border-[#0091ff] px-4 mt-3"
            placeholder="Email"
            type="email"
          />
          <input
            className="w-full outline-[#0091ff] rounded-xl h-14 border-2 border-[#0091ff] px-4 mt-3"
            placeholder="Subject"
            type="email"
          />
          <textarea
            className="w-full outline-[#0091ff] p-4 rounded-xl h-32 border-2 border-[#0091ff] px-4 mt-3"
            placeholder="Message"
            type=""
          />
          <input
            type="submit"
            value="Submit"
            className="mt-5 px-6 py-3 cursor-pointer bg-[#01439C] hover:bg-[#0091ff] transition-all  font-semibold text-white rounded-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
