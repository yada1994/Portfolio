import { Github, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const SocialMediaIcons = () => {
  return (
    <div className="fixed bottom-0 left-4 md:py-[5%] md:pl-[10%] flex flex-col items-center z-50">
      <div className="flex flex-col space-y-6 mb-6">
        <a
          href="https://github.com/yada1994"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors duration-300"
          aria-label="GitHub Profile"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/yared-adisu-9ba736374/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={24} />
        </a>
      </div>
      <div className="w-px h-24 bg-white hidden md:block"></div>
    </div>
  );
};

export default SocialMediaIcons;
