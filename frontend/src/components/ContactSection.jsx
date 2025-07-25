import { motion } from "framer-motion";
import ContactForm from "./ContactForm"; // Import the ContactForm component

const ContactSection = ({ contactSectionRef, sectionVariants }) => {
  return (
    <motion.section
      ref={contactSectionRef}
      id="contact"
      className="mt-28 p-8 min-h-screen flex flex-col justify-center items-center relative" // Added relative z-10 for layering
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-start text-purple-400">
        Get In Touch
      </h2>

      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12 border border-purple-700">
        <p className="text-gray-300 text-lg mb-8 text-center">
          Have a question or want to work together? Fill out the form below, and
          I'll get back to you as soon as possible.
        </p>
        <ContactForm />
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm">
          You can also reach me directly at:{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            yaredadisu5@gmail.com
          </a>
        </p>
      </div>
    </motion.section>
  );
};

export default ContactSection;
