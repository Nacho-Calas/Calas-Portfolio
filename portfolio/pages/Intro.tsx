import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Intro(){
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.25,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw"})
    }
  },[inView, animation]);

  return (
    <div ref={ref} id="home" className="w-full h-screen bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          {/*  <div> */}
        <motion.div animate={animation}>
          <p className="text-[#77809a] md: text-lg lg:text-xl">My name is,</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 font-medium text-[#64fcda]">
            Ignacio Calás
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl py-2 text-[#77809a] ">
            {" "}
            Full Stack Developer from{" "}
            {
              <a className="text-[#fdfbbd]" href="https://www.soyhenry.com/" target="_blank" rel="noreferrer noopener">
                Henry.
              </a>
            }
          </p>
          <p className=" text-xl sm:text-2xl leading-8 py-3 text-[#ccd6f6]">
            I am passionate about learning new technologies and I am always
            looking for new challenges. I am currently looking for a job as a
            Jr. Full Stack Developer. I&apos;m ready to work with you!
          </p>

          {/* </div> */}
          {/*  <div>
            <Image
            className="related rounded-full object-cover h-96 w-96"
            src={Nacho}
            alt={"ProfilePicture"}
            />
          </div> */}

          <p className="text-center text-xl sm:text-2xl p-3 leading-5 text-gray-300 mt-4">
            More about me:
          </p>
          <div className="flex direction-row text-gray-600 gap-3 justify-center mt-5">
            <a href="https://www.linkedin.com/in/ignaciocalas/" target="_blank" rel="noreferrer noopener">
              <AiFillLinkedin className="text-4xl sm:text-6xl mx-2 hover:text-white hover:-rotate-90 duration-300" />
            </a>
            <a href="https://github.com/Nacho-Calas" target="_blank" rel="noreferrer noopener">
              <AiFillGithub className="text-4xl sm:text-6xl mx-2 hover:text-white hover:-rotate-90 duration-300" />
            </a>
            <a href="https://www.instagram.com/nachocalas1/" target="_blank" rel="noreferrer noopener">
              <AiFillInstagram className="text-4xl mx-2 sm:text-6xl hover:text-white hover:-rotate-90 duration-300" />
            </a>
          </div>
    </motion.div>
        </div>
      </div>
  );
}
