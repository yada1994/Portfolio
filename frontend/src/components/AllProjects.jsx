import React, { useEffect, useRef } from "react";

const AllProjectsModal = ({ isOpen, onClose, projects }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    // Overlay (backdrop)
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Close when clicking outside the modal content
      aria-modal="true"
      role="dialog"
      aria-labelledby="all-projects-modal-title"
    >
      {/* Modal Content */}
      <div
        ref={modalRef}
        className="bg-gray-800 text-white p-8 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-purple-500"
        onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
        tabIndex="-1"
      >
        <h2
          id="all-projects-modal-title"
          className="text-3xl font-bold mb-6 text-purple-300 text-center"
        >
          All My Projects
        </h2>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold focus:outline-none"
          aria-label="Close projects modal"
        >
          &times;
        </button>

        {/* Projects List - Now a simple list of clickable names */}
        <div className="space-y-4">
          {" "}
          {/* Adjusted spacing for a list */}
          {projects.length > 0 ? (
            <ul className="list-none p-0 m-0">
              {" "}
              {/* Remove default list styling */}
              {projects.map((project) => (
                <li key={project.id} className="mb-2">
                  <a
                    href={project.liveLink || project.githubLink} // Link to live demo, fallback to GitHub
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200 block p-2 rounded-md hover:bg-gray-700" // Styled as a block link
                    aria-label={`View ${project.title} project`}
                  >
                    {project.title}
                  </a>
                  {project.description && (
                    <p className="text-gray-400 text-sm mt-1 ml-2">
                      {project.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-center">
              No projects to display yet. Check back soon!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProjectsModal;
