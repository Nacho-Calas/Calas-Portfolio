import Image from "next/image";
import kalu from "../public/Kalu2.png";
import PIDOGS from "../public/pidogs.jpg";
import weather from "../public/Weather.jpg";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
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
        x: "-100vw",
      });
    }
  }, [inView, animation]);
  return (
    <div ref={ref} id="project" className="w-full h-screen bg-[#ccd6f6] text-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div  animate={animation}>
          <div className="pb-8">
            <h1 className="text-4xl font-bold text-[#087e8b] inline border-b-4 border-[#0a192f]">
              My Projects
            </h1>
            <p className="mt-5">
              Since I started learning to code, I have been working on different
              projects. In every one of them I have learned something new and I
              have improved my skills. Some of them are not deployed yet, some
              previews will be added. Here you can find some of them:
            </p>
          </div>

          {/* Grid  */}
          <div className="grid sm:grid-cols-2 md-cols-3 gap-4">
            {/* Project 1 */}
            <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#77809a] rounded-md group hover:bg-gradient-to-r from-[#1266bb7c] to-[#51ceb570]">
              <Image
                className="opacity-100 group-hover:opacity-30 rounded-xl"
                src={kalu}
                alt="kalu"
              />
              <div className="hidden group-hover:block absolute top-[%50] left-[%50]">
                <a onClick={() => alert("Demo not deployed yet, i'm sorry")}>
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mr-5">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/PECF/PECF_FRONTEND" target="_blank" rel="noreferrer noopener">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#77809a] rounded-md group hover:bg-gradient-to-r from-[#1266bb7c] to-[#51ceb570]">
              <Image
                className="opacity-100 group-hover:opacity-30 rounded-xl"
                src={PIDOGS}
                alt="pidogs"
              />
              <div className="hidden group-hover:block absolute top-[%50] left-[%50]">
                <a href="https://www.youtube.com/watch?v=w8KzH-U6lwU" target="_blank" rel="noreferrer noopener">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mr-5">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Nacho-Calas/PI-Dogs-main/tree/master/PI-Dogs-main" target="_blank" rel="noreferrer noopener">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#77809a] rounded-md group hover:bg-gradient-to-r from-[#1266bb7c] to-[#51ceb570]">
              <Image
                className="opacity-100 group-hover:opacity-30 rounded-xl"
                src={weather}
                alt="weather"
              />
              <div className="hidden group-hover:block absolute top-[%50] left-[%50]">
                <a href="https://www.youtube.com/watch?v=3OIigkRwyjk" target="_blank" rel="noreferrer noopener">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mr-5">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Nacho-Calas/Weather" target="_blank" rel="noreferrer noopener">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
