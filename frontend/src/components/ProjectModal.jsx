import { motion, AnimatePresence } from "framer-motion";

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalContentVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.1, duration: 0.3 },
  },
  exit: { y: "100vh", opacity: 0 },
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        variants={modalBackdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose} // Close when clicking outside modal content
      >
        <motion.div
          className="bg-gray-900 rounded-lg shadow-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
          variants={modalContentVariants}
          onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-7xl font-bold"
          >
            &times;
          </button>

          <h3 className="text-3xl font-bold mb-4 text-purple-400">
            {project.title}
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            {project.longDescription}
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2 text-purple-300">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-700 text-blue-100 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center"
              >
                <img
                  src="/icons/github.svg"
                  alt="GitHub"
                  className="w-5 h-5 mr-2"
                />{" "}
                View on GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center"
              >
                <img
                  src="/icons/globe.svg"
                  alt="Live Demo"
                  className="w-5 h-5 mr-2"
                />{" "}
                Live Demo
              </a>
            )}
            {/* Add more links if needed, e.g., Figma link, video demo */}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
