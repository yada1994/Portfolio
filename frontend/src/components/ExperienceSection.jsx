const ExperienceSection = ({ experienceSectionRef }) => {
  return (
    <section
      className="relative p-8 min-h-fit"
      id="experience"
      ref={experienceSectionRef}
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-300">
        Education & Projects
      </h2>
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-white"></div>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="relative flex items-center justify-between md:justify-center">
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 md:bg-transparent sm:hidden lg:bg-white rounded-full z-10 border-2 border-white"></div>
          <div className="w-full md:w-1/2 md:pr-8 text-right">
            <h3 className="text-xl font-semibold text-white">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-white">
              Bahir Dar University | Sep 2022 - Present
            </p>
            <ul className="list-disc list-inside text-white mt-2">
              <li>
                Gained foundational knowledge in Data Structures, Algorithms,
                and Software Engineering principles.
              </li>
              <li>
                Completed major coursework in Web Development, Database Systems,
                and Object-Oriented Programming.
              </li>
              <li>
                Developed a comprehensive final year project focusing on
                [mention specific area, e.g., web application security,
                real-time data processing].
              </li>
            </ul>
          </div>
          <div className="hidden md:block w-1/2"></div>{" "}
        </div>

        <div className="relative flex items-center justify-between md:justify-center">
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full z-10 border-2 border-white"></div>
          <div className="hidden md:block w-1/2"></div>{" "}
          <div className="w-full md:w-1/2 md:pl-8 text-left">
            <h3 className="text-xl font-semibold text-white">
              Frontend Developer: College & University Initiatives
            </h3>
            <p className="text-white">
              Various College Projects | Jul 2023 - Jan 2023
            </p>
            <ul className="list-disc list-inside text-white mt-2">
              <li>
                Designed and implemented responsive user interfaces for{" "}
                <a
                  className="text-purple-400"
                  href="https://www.fasilcollege.edu.et"
                >
                  fasilcollege
                </a>
              </li>
              <li>
                Utilized, HTML, CSS, and JavaScript to create dynamic and
                accessible web applications.
              </li>
              <li>
                Collaborated with stakeholders to translate design mockups and
                requirements into functional frontend experiences.
              </li>
              <li>
                Focused on optimizing user experience and ensuring cross-browser
                compatibility for college-specific platforms.
              </li>
            </ul>
            <br />
            <ul className="list-disc list-inside text-white mt-2">
              <li>
                Designed and implemented responsive user interfaces for{" "}
                <a
                  className="text-purple-400"
                  href="https://www.bezawitcollege.edu.et/"
                >
                  bezawitcollege college
                </a>
              </li>
              <li>
                Utilized, HTML, CSS, and JavaScript to create dynamic and
                accessible web applications.
              </li>
              <li>
                Collaborated with stakeholders to translate design mockups and
                requirements into functional frontend experiences.
              </li>
              <li>
                Focused on optimizing user experience and ensuring cross-browser
                compatibility for college-specific platforms.
              </li>
            </ul>
          </div>
        </div>
        <div className="relative flex items-center justify-between md:justify-center">
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full z-10 border-2 border-white"></div>
          <div className="w-full md:w-1/2 md:pr-8 text-right">
            <h3 className="text-xl font-semibold text-white">
              Independent Web Development Projects
            </h3>
            <p className="text-white">
              Self-Driven Learning | Jan 2020 - Present
            </p>
            <ul className="list-disc list-inside text-white mt-2">
              <li>
                Developed a range of personal web applications to explore new
                technologies and consolidate core skills.
              </li>
              <li>
                Gained hands-on experience with backend integration using
                Express.js for contact forms and API services.
              </li>
              <li>
                Focused on responsive design, modern UI/UX principles, and
                interactive animations using Framer Motion.
              </li>
              <li>
                Continuously expanded knowledge in areas like [mention specific
                areas, e.g., API consumption, state management patterns,
                deployment workflows].
              </li>
            </ul>
          </div>
          <div className="hidden md:block w-1/2"></div>{" "}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
