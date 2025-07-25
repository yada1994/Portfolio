import { motion } from "framer-motion";

const Introduction = ({
  heroTextItemVariants,
  heroTextContainerVariants,
  contactSectionRef,
  IntroductionSectionRef,
  scrollToSection,
  textColor,
}) => {
  return (
    <section
      className="min-h-screen"
      id="introduction"
      ref={IntroductionSectionRef}
    >
      <div
        className={`h-auto flex items-center justify-center p-8 relative overflow-hidden ${textColor}`}
      >
        <motion.div
          className="text-start max-w-3xl mx-auto z-10 relative"
          initial="hidden"
          animate="visible"
          variants={heroTextContainerVariants}
        >
          <motion.h4
            className="dark:text-purple-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg"
            variants={heroTextItemVariants}
          >
            Fullstack Developer
          </motion.h4>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg"
            variants={heroTextItemVariants}
          >
            You Want Your <span className="dark:text-purple-400">Ideas</span>,
            <br className="block mt-2 sm:mt-4" /> alive in a web
          </motion.h1>
          <motion.h4
            className="dark:text-purple-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg"
            variants={heroTextItemVariants}
          >
            Yared Addisu
          </motion.h4>
          <div className="flex items-center justify-center">
            <motion.div
              className="mx-[10%]  my-[5%] w-[1px] h-[100px] dark:bg-purple-400"
              variants={heroTextItemVariants}
            ></motion.div>
            <motion.p
              className="h-fit text-lg sm:text-xl md:text-2xl drop-shadow-md"
              variants={heroTextItemVariants}
            >
              I build robust and intuitive web applications from concept to
              deployment, blending elegant frontend design with powerful backend
              solutions. Let's create something impactful together.
            </motion.p>
          </div>
          <div className="flex">
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(contactSectionRef);
              }}
              className="inline-block dark:bg-purple-600 hover:dark:bg-purple-700 font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 shadow-xl text-lg"
              variants={heroTextItemVariants}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/resume/resume.pdf"
              variants={heroTextItemVariants}
              download="Resume.pdf"
              aria-label="Download My Resume"
              className="ml-4 flex items-center justify-center max-w-fit dark:bg-purple-600 hover:dark:bg-purple-700 font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 shadow-xl text-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H5a2 2 0 01-2-2v-5a2 2 0 012-2h5l2-2h2l2 2h5a2 2 0 012 2v5a2 2 0 01-2 2z"
                ></path>
              </svg>
              <span className="inline-block">Download Resume</span>
            </motion.a>
          </div>
          <motion.div className="ml-5 inline-block pt-4"></motion.div>
        </motion.div>
      </div>
      <div className="h-auto flex items-center justify-center p-8 relative overflow-hidden">
        <motion.div
          className="text-start max-w-3xl mx-auto z-10 relative h-auto"
          initial="hidden"
          animate="visible"
          variants={heroTextContainerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg"
            variants={heroTextItemVariants}
          >
            About Me:{" "}
            <span className="dark:text-purple-400">
              Crafting Digital Realities
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-6 drop-shadow-md"
            variants={heroTextItemVariants}
          >
            As a dedicated{" "}
            <span className="dark:text-purple-300">Fullstack Developer</span>, I
            thrive on transforming abstract concepts into tangible,
            high-performing web applications. My journey is fueled by a passion
            for bridging the gap between innovative ideas and their digital
            manifestation.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-6 drop-shadow-md"
            variants={heroTextItemVariants}
          >
            With a comprehensive skill set spanning both{" "}
            <span className="dark:text-purple-300">
              elegant frontend design
            </span>{" "}
            and{" "}
            <span className="dark:text-purple-300">
              powerful backend solutions
            </span>
            , I ensure that the applications I build are not only visually
            captivating but also structurally sound, scalable, and intuitive for
            users.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl drop-shadow-md"
            variants={heroTextItemVariants}
          >
            From initial concept to seamless deployment, I am committed to
            delivering impactful web experiences that resonate with users and
            achieve strategic goals. Let's collaborate to bring your next big
            idea to life on the web.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
