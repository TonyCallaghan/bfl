import { BackgroundBeams } from "../pieces/BackgroundBeams";
import ShinyButton from "../pieces/ShinyButton";

const Footer = () => {
  return (
    <div
      className="text-white flex flex-col justify-center antialiased relative border border-dark-300 rounded-xl mb-5"
      id="contact"
    >
      <div>
        <div className="space-y-8 p-10">
          <h1 className="text-5xl font-bold max-w-2xl leading-[110%] relative z-10">
            This is the footer Section but we can add more content here.
          </h1>

          <ShinyButton>
            <a>The button</a>
          </ShinyButton>
        </div>

        <div className="mt-16 p-10 border-t border-dark-200 dark:border-white/10 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          <div className="space-y-2.5">
            <h3 className="text-xl font-bold relative z-10">
              Tony Callaghan
            </h3>
            <p className="text-dark-200/70 relative z-10">
              &copy; 2025 | All rights reserved.
            </p>
          </div>

          <div className="flex justify-between gap-0 sm:gap-16">
            <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li className="text-base sm:text-lg font-semibold">Navigate</li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a href="/">Home</a>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a href="#work">Work</a>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a href="#about">About</a>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li className="text-lg font-semibold">Projects</li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a
                  href="https://github.com/andrijaweb/ecommerce-app"
                  target="_blank"
                >
                  Shoptidy
                </a>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a
                  href="https://github.com/andrijaweb/socialmedia-reactapp"
                  target="_blank"
                >
                  SocialSphere
                </a>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a
                  href="https://github.com/andrijaweb/nextCut-app"
                  target="_blank"
                >
                  NextCut
                </a>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a href="/">NextFood</a>
              </li>
            </ul>

            <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li className="text-lg font-semibold">Socials</li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a
                  href="https://www.linkedin.com/in/andrija-djordjevic-a7b794282/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a href="https://github.com/andrijaweb" target="_blank">
                  Github
                </a>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a href="/">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <BackgroundBeams className="hidden sm:flex" />
    </div>
  );
};

export default Footer;