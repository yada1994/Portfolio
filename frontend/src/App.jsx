import Header from "./components/Header";
import "./index.css";
import SocialMediaIcons from "./components/SocialMediaIcons";
import EmailContact from "./components/EmailContact";
import AnimeMusic from "./components/AnimeMusic";
import { useEffect, useRef, useState, useCallback } from "react"; // Added useCallback
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Introduction from "./components/Introduction";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";

function App() {
  const leftScrollPanelRef = useRef(null);
  const IntroductionSectionRef = useRef(null);
  const ProjectSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);

  const sectionRefs = {
    introduction: IntroductionSectionRef, // Changed key to match activeLink
    projects: ProjectSectionRef, // Changed key to match activeLink
    contact: contactSectionRef, // Changed key to match activeLink
    experience: experienceSectionRef,
  };

  const [activeLink, setActiveLink] = useState("introduction");
  const [blackColor, setBlackColor] = useState("000000"); // Renamed setWhiteColor to setBlackColor for clarity
  const [textColor, setTextColor] = useState("text-white"); // Initial text color class

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const heroTextContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const boxVariants = {
    hidden: { y: 70, opacity: 0, scale: 0.7, rotate: -15 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const heroTextItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.8,
      },
    },
  };

  // Function to scroll to sections (unchanged)
  const scrollToSection = (targetRef) => {
    if (leftScrollPanelRef.current && targetRef.current) {
      leftScrollPanelRef.current.scrollTo({
        top: targetRef.current.offsetTop - 0,
        behavior: "smooth",
      });
    }
  };

  // Particles initialization (unchanged)
  const particlesInit = useCallback(async (main) => {
    await loadSlim(main);
  }, []);
  useEffect(() => {
    const hexToRgb = (hex) => {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return { r, g, b };
    };

    const { r, g, b } = hexToRgb(blackColor);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    if (luminance > 0.5) {
      setTextColor("text-gray-900");
    } else {
      setTextColor("text-white");
    }
  }, [blackColor]);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0% -50% 0%",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    for (const sectionId in sectionRefs) {
      const section = sectionRefs[sectionId].current;
      if (section) {
        observer.observe(section);
      }
    }

    return () => {
      for (const sectionId in sectionRefs) {
        const section = sectionRefs[sectionId].current;
        if (section) {
          observer.unobserve(section);
        }
      }
    };
  }, [sectionRefs]);

  return (
    <main className={`w-full z-0 h-screen overflow-hidden ${textColor}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-[-1]"
        options={{
          background: {
            color: {
              value: `#${blackColor}`,
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#8a2be2",
            },
            links: {
              color: "#6a0dad",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="w-full lg:px-[10%] md:px-[5%] sm:px-[2.5%] pointer-events-auto z-1">
        <Header
          scrollToSection={scrollToSection}
          IntroductionSectionRef={IntroductionSectionRef}
          ProjectSectionRef={ProjectSectionRef}
          contactSectionRef={contactSectionRef}
          experienceSectionRef={experienceSectionRef}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          blackColor={blackColor}
          setBlackColor={setBlackColor}
          textColor={textColor}
        />
        <div className="flex lg:flex-row">
          <motion.div
            className="lg:w-3/5 w-full h-fit flex flex-col gap-1 overflow-y-auto relative px-15 pb-30"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            ref={leftScrollPanelRef}
            id="left-scroll-panel"
          >
            <Introduction
              IntroductionSectionRef={IntroductionSectionRef}
              ProjectSectionRef={ProjectSectionRef}
              contactSectionRef={contactSectionRef}
              scrollToSection={scrollToSection}
              sectionVariants={sectionVariants}
              particlesInit={particlesInit}
              heroTextItemVariants={heroTextItemVariants}
              boxVariants={boxVariants}
              heroTextContainerVariants={heroTextContainerVariants}
              textColor={textColor}
            />
            <ProjectSection
              textColor={textColor}
              ProjectSectionRef={ProjectSectionRef}
              sectionVariants={sectionVariants}
              particlesInit={particlesInit}
            />
            <ExperienceSection
              experienceSectionRef={experienceSectionRef}
              sectionVariants={sectionVariants}
            />
            <ContactSection
              textColor={textColor}
              contactSectionRef={contactSectionRef}
              sectionVariants={sectionVariants}
              particlesInit={particlesInit}
            />
          </motion.div>
          <div
            className="hidden lg:block w-2/5 min-h-[50vh] lg:min-h-screen bg-contain bg-no-repeat bg-center relative"
            style={{
              backgroundImage: 'url("/image/heroImage.png")',
            }}
          ></div>
        </div>
        <AnimeMusic />
        <SocialMediaIcons />
        <EmailContact />
      </div>
    </main>
  );
}

export default App;

//         <div className="flex lg:flex-row min-h-screen">

//           </motion.div>

//         </div>
