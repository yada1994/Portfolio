import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lanternImage from "/image/lantern.png";
import { Droplet, Moon } from "lucide-react";

const Header = ({
  scrollToSection,
  contactSectionRef,
  ProjectSectionRef,
  IntroductionSectionRef,
  setActiveLink,
  activeLink,
  blackColor,
  setWhiteColor,
  setBlackColor,
  experienceSectionRef,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navLinks = [
    { name: "introduction", to: IntroductionSectionRef, label: "Home" },
    { name: "projects", to: ProjectSectionRef, label: "Projects" },
    { name: "experience", to: experienceSectionRef, label: "Experience" },
    { name: "contact", to: contactSectionRef, label: "Contact" },
  ];
  const mobileBottomNavVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.08,
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };
  const linkItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };
  const mainLineVariants = {
    closed: {
      scaleX: 1,
      backgroundColor: "rgb(255, 255, 255)",
      transition: { duration: 0.2 },
    },
    open: {
      scaleX: 0.8,
      backgroundColor: "rgb(168, 85, 247)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="relative">
      {/* Fixed Header (Logo + Mobile Menu Icon + Desktop Lantern) */}
      <header className="h-[100px] text-white flex justify-between items-center">
        <a
          className="flex items-center"
          href="introduction"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(homeRef);
          }}
        >
          <span className="text-2xl font-bold tracking-wide">
            {/* Yared A. */}
            Yared A.
          </span>
        </a>

        <div className="flex items-center">
          {/* Lantern in Header (Desktop-Only) - Backgroundless */}
          <motion.div
            className="hidden md:block relative" // Add 'relative' for absolute positioning of dropdown
            initial="off"
            animate="defaultShine" // Always shining gently
            whileHover="on" // Brighter shine on hover
            // variants={lanternShineVariants}
          >
            <motion.img
              src={lanternImage}
              alt="Lantern Icon"
              className="w-19 h-19 object-contain cursor-pointer"
              onClick={() => {
                // Toggle dropdown visibility
                setIsDropdownOpen(!isDropdownOpen);
                // Original lantern click functionality (if any)
                blackColor === "000000"
                  ? setWhiteColor("F8F8F8")
                  : setWhiteColor("000000");
              }}
            />
            {isDropdownOpen && ( // Conditionally render the dropdown
              <div className="absolute top-full right-0 mt-2 z-50 flex flex-col space-y-2 p-2 rounded-md shadow-lg">
                <button
                  onClick={() => {
                    setBlackColor("000000"); // Black background
                    setIsDropdownOpen(false); // Close dropdown after selection
                  }}
                  className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <Moon />
                </button>
                <button
                  onClick={() => {
                    setBlackColor("0d47a1"); // Original dark blue
                    setIsDropdownOpen(false); // Close dropdown after selection
                  }}
                  className="px-4 py-2 bg-blue-800 text-white rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <Droplet />
                </button>
              </div>
            )}
          </motion.div>

          {/* Main Menu Button (Hamburger) - Visible ONLY on mobile */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col justify-center items-end w-12 h-12 md:hidden rounded-full focus:outline-none z-50 p-2 hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle main navigation"
            initial={false}
            animate={isMobileMenuOpen ? "open" : "closed"}
          >
            <motion.span
              variants={mainLineVariants}
              className="block w-8 h-1 bg-white rounded-full my-1 origin-right"
            ></motion.span>
            <motion.span
              variants={mainLineVariants}
              className="block w-6 h-1 bg-white rounded-full my-1 origin-right"
            ></motion.span>
            <motion.span
              variants={mainLineVariants}
              className="block w-4 h-1 bg-white rounded-full my-1 origin-right"
            ></motion.span>
          </motion.button>
        </div>
      </header>

      {/* Desktop Navigation - Always visible at the bottom (transparent background) */}
      <nav className="hidden md:block fixed bottom-0 left-0 w-full z-40">
        <div className="flex h-[100px] items-center justify-around">
          <motion.div
            className="cursor-pointer lg:ml-[18%]"
            onClick={() => scrollToSection(ProjectSectionRef)} // Scroll to projectSectionRef
            initial={{ y: -50, opacity: 0 }} // Start slightly above and invisible
            animate={{
              y: [-50, 0, -10, 0], // Bounce animation
              opacity: [0, 1, 1, 1], // Fade in
            }}
            transition={{
              duration: 1.5, // Total duration of the initial animation
              ease: "easeOut",
              repeat: Infinity, // Repeat the bounce animation indefinitely
              repeatType: "loop",
              repeatDelay: 2, // Delay before repeating the bounce
              delay: 0.5, // Delay before the initial animation starts
            }}
            whileHover={{ scale: 1.1 }} // Slight scale on hover
            whileTap={{ scale: 0.9 }} // Slight scale on tap
          >
            {/* SVG for a simple down arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.name}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.to);
                    setActiveLink(link.name);
                    console.log(link.to);
                  }}
                  className={`
                                    block py-3 px-6 text-xl lg:text-2xl font-semibold text-center rounded-lg
                                    transition-all duration-300 ease-in-out
                                    ${
                                      activeLink === link.name
                                        ? "bg-purple-600 text-white shadow-lg shadow-purple-600/50"
                                        : "text-gray-200 hover:bg-gray-700/50 hover:text-white"
                                    }
                                `}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Hidden on Desktop, Appears with Animation (transparent background) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileBottomNavVariants}
            className="
                            fixed bottom-0 left-0 w-full bg-transparent z-40 p-4
                            md:hidden
                        "
          >
            <ul className="flex flex-col space-y-4 text-center backdrop-blur-sm bg-transparent rounded-lg p-3 shadow-xl">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  variants={linkItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${link.name}`}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                                            block w-full py-3 px-6 text-lg md:text-xl lg:text-2xl font-semibold text-center rounded-lg
                                            transition-all duration-300 ease-in-out
                                            ${
                                              activeLink === link.name
                                                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/50"
                                                : "text-gray-200 hover:bg-gray-700/50 hover:text-white"
                                            }
                                        `}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
