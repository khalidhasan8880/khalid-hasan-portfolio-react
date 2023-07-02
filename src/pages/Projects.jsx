import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Modal from "../components/Backdrop&Modal/Modal";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(()=>{
    fetch('/projects.json')
    .then(res=>res.json())
    .then(data=> {
      setProjects(data) 
      setLoading(false)
    })
  },[])
  // console.log(projects);
  if (loading) {
    return <h1 className="text-3xl text-center absolute-center">Loading...</h1>;
  }
  console.log(selectedProject);
  return (
    <section id="projects" className="">
      <SectionTitle title="Here are some of my projects"></SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-2">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            className="w-full min-h-[400px] relative rounded-2xl project_img group cursor-pointer "
            layoutId={project._id}
            onClick={() => setSelectedProject(project)}>
            <button className={` absolute-center text-2xl hidden group-hover:block text-white z-40 ${selectedProject ? 'hidden' : ''}`}>
              View Details
            </button>
            <div className="img_over_layer h-[25%] group-hover:h-[100%] hover:rounded-t-2xl transition-[height] duration-500">
              <h2 className="font-extrabold text-1xl sm:text-2xl">
                {project?.name}
              </h2>
              <p className="font-semibold">{project?.title}</p>
            </div>
            <img
              className="w-full min-h-[400px] rounded-2xl hover:transform"
              src={project?.thumbnail}
              alt=""
            />
          </motion.div>
        ))}
      </div>
      {selectedProject && (
        <Modal
          handleClose={() => setSelectedProject(null)}
          project={selectedProject}></Modal>
      )}
    </section>
  );
};

export default Projects;
