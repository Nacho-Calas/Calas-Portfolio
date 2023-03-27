import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import css from "../public/css.png";
import html5 from "../public/html5.png";
import mongodb from "../public/Mongodb.png";
import node from "../public/nodejs.png";
import react from "../public/react.png";
import typescript from "../public/typescript.png";

export default function Skills(){
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2.7,
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
    <div
      ref={ref}
      id="skills"
      className="w-full h-screen bg-[#0a192f] text-[#ccd6f6]"
    >
      <div className="max-w-[1000px] flex flex-col justify-center items-center w-full h-full mx-auto p-4">
        <motion.div animate={animation}>
          <div>
            <p className="text-4xl font-bold inline text-[#64fcda] border-b-4 border-[#64fcda]">
              Skills
            </p>
            <p className="text-xl mt-4 py-4">
              This are some of the technologies I have been working with:
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-4 py-8">
            <div className="shadow-md shadow-black hover:scale-110 duration-500 rounded-xl">
              <Image className="w-20 h-20 mx-auto" src={html5} alt="html" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-black hover:scale-110 duration-500 rounded-xl">
              <Image className="w-20 h-20 mx-auto" src={css} alt="css" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-black hover:scale-110 duration-500 rounded-xl">
              <Image
                className="w-20 h-20 mx-auto"
                src={typescript}
                alt="typescript"
              />
              <p className="my-4">TypeScript</p>
            </div>
            <div className="shadow-md shadow-black hover:scale-110 duration-500 rounded-xl">
              <Image className="w-20 h-20 mx-auto" src={react} alt="react" />
              <p className="my-4">React</p>
            </div>
            <div className="shadow-md shadow-black hover:scale-110 duration-500 rounded-xl">
              <Image className="w-20 h-20 mx-auto" src={node} alt="nodejs" />
              <p className="my-4">NodeJs</p>
            </div>
            <div className="shadow-md shadow-black hover:scale-110 duration-500 rounded-xl">
              <Image
                className="w-20 h-20 mx-auto"
                src={mongodb}
                alt="mongodb"
              />
              <p className="my-4">MongoDB</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
