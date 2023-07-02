import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import "./modal.css";
import { BiCodeAlt, BiServer, BiXCircle } from "react-icons/bi";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Modal = ({ handleClose, project }) => {
  useEffect(()=>{
    if (project) {
      document.body.classList.add("opened-modal")
    }
    else{
      document.body.classList.remove("opened-modal")
    }
  },[project])
  return (
    <Backdrop onclick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal z-[54] rounded-2xl relative overflow-y-scroll	dark:text-white dark:bg-black bg-white p-5">
        <img
          className="w-full border-2 shadow-xl rounded-xl border-black"
          src={project?.thumbnail}
          alt=""
        />
        <div className="mt-10">
          <div className="flex-between flex-wrap w-full">
            <h1 className="text-4xl font-bold">{project?.name}</h1>
            <div className="flex flex-wrap gap-5">
              <Link
                target="_blank"
                to={project?.clientCode}
                className="flex items-center gap-x-1 text-xl font-semibold text-[#0091ff]">
                <BiCodeAlt></BiCodeAlt> Client Code{" "}
              </Link>
              <Link
                target="_blank"
                to={project?.serverCode}
                className="flex items-center gap-x-1 text-xl font-semibold text-[#0091ff]">
                {" "}
                <BiServer></BiServer> Server Code{" "}
              </Link>

              <Link
                target="_blank"
                to={project?.liveLink}
                className="flex items-center gap-x-1 text-xl font-semibold text-[#0091ff]">
                <FaEye></FaEye> Live Website{" "}
              </Link>
            </div>
          </div>
          <h1 className="mb-3 font-semibold">{project?.title}</h1>
          <h1 className=" text-3xl">Used Technologies:</h1>
          <p className="font-semibold">{project?.usedTechnology}</p>
          <h2 className=" text-3xl mt-5">Features:</h2>
          {project?.features?.map((feature, id) => (
            <p key={id}>
              {" "}
              {id + 1}. {feature}
            </p>
          ))}
        </div>
        <button
          className="absolute right-0 top-0 text-red-500"
          onClick={handleClose}>
          <BiXCircle size={40}></BiXCircle>
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
