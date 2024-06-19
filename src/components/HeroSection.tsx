import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <section className="w-full bg-[#f3f3f3]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto px-4 sm:px-0">
          <div className="flex justify-center items-center flex-wrap min-h-screen">
            <div className="content text-center">
              <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-semibold">
                Hey! I am Suheer
              </h2>
              <p className="text-lg lg:text-xl max-w-lg lg:max-w-xl font-medium text-[#8a8a8a]">
                A freelance{" "}
                <span className="text-black">MERN stack developer</span> based
                in pakistan, Turning your{" "}
                <span className="text-black">ideas</span> into{" "}
                <span className="text-black">reality.</span>
              </p>

              {/* SOCIAL LINKS */}
              <div className="mt-10 social_links flex justify-center items-center gap-x-6">
                <a title="social_links" href="#">
                  <FaTwitter size={22} />
                </a>
                <a title="social_links" href="#">
                  <FaGithub size={24} />
                </a>
                <a title="social_links" href="#">
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
