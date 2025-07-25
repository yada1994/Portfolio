import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const AnimeMusic = () => {
  const rightBarVariants = {
    hidden: {
      x: "100%", // Start completely off-screen at the right
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    },
    visible: {
      x: "0%", // Move to 0% (full bar width) into view
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const verticalIconItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };
  const loopPulseVariants = {
    pulse: {
      boxShadow: [
        "0 0 0px 0px rgba(168, 85, 247, 0.5)",
        "0 0 15px 5px rgba(168, 85, 247, 0.8)",
        "0 0 0px 0px rgba(168, 85, 247, 0.5)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };
  const circularTextContainerVariants = {
    animate: {
      rotate: 360, // Full rotation
      transition: {
        repeat: Infinity,
        duration: 15, // Adjust speed as needed
        ease: "linear",
      },
    },
  };
  const circularLetterVariants = {
    animate: {
      rotate: -360, // Counter-rotate to keep the letter upright as the container spins
      transition: {
        repeat: Infinity,
        duration: 15, // Same duration as container
        ease: "linear",
      },
    },
  };
  const textToAnimate = "PLAY & CHILL ";
  const radius = 40; // Radius for the circular text arrangement

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={rightBarVariants}
        // Adjusted 'right' property to push it slightly to the left
        className="fixed inset-y-10 right-[25vw] top-[40vw] h-[6vw] w-[20vw] min-w-[120px] max-w-[200px] z-39 flex flex-col justify-center items-center p-4 space-y-16 md:flex" /* Increased space-y */
      >
        {/* Play Icon with Circular Letter Animation */}
        <motion.div
          variants={verticalIconItemVariants}
          className="relative flex items-center justify-center cursor-pointer group"
          style={{ width: "120px", height: "120px" }} // Fixed size for consistent circular text
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Central Play Button (Reduced Size) */}
          <motion.button
            className="text-purple-500 text-4xl p-2 rounded-full focus:outline-none z-10 relative"
            animate="pulse"
            variants={loopPulseVariants}
            aria-label="Play Video"
          >
            <Play/>
            {/* Font Awesome Play Icon */}
          </motion.button>

          {/* Circular "Play & Chill" letters */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={circularTextContainerVariants}
            animate="animate"
          >
            {textToAnimate.split("").map((char, i) => {
              const angle = (i / textToAnimate.length) * 360; // Distribute letters evenly
              const x = radius * Math.sin(angle * (Math.PI / 180));
              const y = -radius * Math.cos(angle * (Math.PI / 180)); // Negative cos for top start

              return (
                <motion.span
                  key={i}
                  className="absolute text-gray-200 text-xs font-medium"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  }}
                  variants={circularLetterVariants} // Apply counter-rotation to letters
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimeMusic;
