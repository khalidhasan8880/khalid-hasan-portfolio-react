// import { useEffect, useState } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// const CustomLink = ({ href, title }) => {
//     const location = useLocation()
//   const [activeSection,setActiveSection] = useState('')
    
//     useEffect(() => {
//       const handleScroll = () => {
//         const scrollPosition = window.scrollY;
    
//         // Check the scroll position against the section offsets
//         const bannerSection = document.getElementById('banner').offsetTop;
//         const aboutSection = document.getElementById('about').offsetTop;
//         const projectsSection = document.getElementById('projects').offsetTop;
//         const contactSection = document.getElementById('contact').offsetTop;
    
//         if (scrollPosition >= bannerSection && scrollPosition < bannerSection) {
//           setActiveSection('#banner')
//         }
//         else if (
//           scrollPosition >= projectsSection &&
//           scrollPosition < aboutSection
//         ) {
//           setActiveSection('#about');
//         } else if (
//           scrollPosition >= aboutSection &&
//           scrollPosition < contactSection
//         ) {
//           setActiveSection('#projects');
//         } else if (scrollPosition >= contactSection) {
//           setActiveSection('#contact');
//         }
//       };
    
//       // Attach the scroll event listener
//       window.addEventListener('scroll', handleScroll);
    
//       // Clean up the listener on component unmount
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);
    
//   return (
//     <Link 
//     spy={true}
//     smooth={true}
//     offset={-70}
//     duration={500}
//     to={href} className="relative group mr-2 md:mr-4 ">
//       {title}
//       <span
//         className={` absolute -bottom-[2px] left-0 bg-[#0091ff] h-[2px] inline-block group-hover:w-full transition-[width] ease-out duration-200 ${location?.hash === href || activeSection === href? "w-full" : "w-0"}`}></span>
//     </Link>
//   );
// };
// export default CustomLink;
