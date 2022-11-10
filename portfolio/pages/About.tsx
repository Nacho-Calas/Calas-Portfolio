import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


export const About = () => {
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
    <div ref={ref} id="about" className="w-full h-screen bg-[#ccd6f6] text-[#0a192f]">
      <div className="flex flex-col justify-center items-center w-full h-full">

        <motion.div animate={animation}>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold text-[#087e8b] inline border-b-4 border-[#0a192f] mb-4 ">
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-5">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                I&apos;m Nacho, nice to meet you! I&apos;m a software developer
                from Argentina.
              </p>
            </div>
            <div>
                <p className="font-medium">
                    Before I decided to become a full-time developer, I worked as a Professional Rugby Player for 10 years. I was a member of the Argentina National Team and played in the PROD2 French League. I also played in the Super Rugby League in Australia. My love for computers and tech has always been there, it is time to put them to work.
                </p>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
  );
};
