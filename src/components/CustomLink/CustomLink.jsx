import { useLocation } from "react-router-dom";
const CustomLink = ({ href, title }) => {
    const location = useLocation()
 console.log(location);
  return (
    <a href={href} className="relative group mr-4 ">
      {title}
      <span
        className={` absolute -bottom-[2px] left-0 bg-[#0091ff] h-[2px] inline-block group-hover:w-full transition-[width] ease-out duration-200 ${location?.hash === href ? "w-full" : "w-0"}`}></span>
    </a>
  );
};
export default CustomLink;
