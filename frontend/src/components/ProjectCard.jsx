import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal'; 

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
        variants={cardVariants}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-semibold mb-2 text-purple-400">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out self-start"
          >
            More Details
          </button>
        </div>
      </motion.div>

      {isModalOpen && (
        <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default ProjectCard;