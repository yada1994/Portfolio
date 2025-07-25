import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import AllProjectsModal from "./AllProjects";
import { useRef, useState } from "react";
import { projects } from "../projects";

const ProjectsSection = ({ sectionVariants, ProjectSectionRef }) => {
  const [showAllProjectsModal, setShowAllProjectsModal] = useState(false);

  const handleOpenAllProjectsModal = () => {
    setShowAllProjectsModal(true);
    console.log(open);
  };

  const handleCloseAllProjectsModal = () => {
    setShowAllProjectsModal(false);
    console.log(close);
  };
  return (
    <motion.section
      ref={ProjectSectionRef}
      id="projects"
      className="p-4 md:px-8 lg:px-20 min-h-screen flex flex-col"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-10">
        Some Of My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="p-4 z-100">
        <button
          onClick={handleOpenAllProjectsModal}
          className="bg-purple-600 hover:bg-purple-700 rounded transition duration-300 ease-in-out self-start py-2 px-4"
        >
          More Projects
        </button>
      </div>
      {showAllProjectsModal && (
        <AllProjectsModal
          projects={projects}
          isOpen={handleOpenAllProjectsModal}
          onClose={handleCloseAllProjectsModal}
        />
      )}
    </motion.section>
  );
};

export default ProjectsSection;
