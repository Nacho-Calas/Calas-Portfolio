import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
    const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      console.log("inview");
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
      console.log("not inview");
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView, animation]);
  return (
    <div ref={ref} id='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <motion.div animate={animation}>
        <form method='POST' action='https://getform.io/f/30011dd6-ab21-4f88-a3d3-7cba3d62d447' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline text-[#64fcda] border-b-4 border-[#64fcda]'>
                    Contact
                </p>
                <p className='text-xl mt-4 py-4 text-gray-300'>
                    If you want to contact me, you can do it through this form:
                </p>
            </div>
            <input className='bg-[#0a192f] text-[#ccd6f6] border-b-2 border-[#64fcda] outline-none focus:border-[#64fcda] py-2' type='text' placeholder='Name' name='name'/>
            <input className='bg-[#0a192f] text-[#ccd6f6] border-b-2 border-[#64fcda] outline-none focus:border-[#64fcda] py-2' type='email' placeholder='Email' name='email'/>
            <textarea className='bg-[#0a192f] text-[#ccd6f6] border-b-2 border-[#64fcda] outline-none focus:border-[#64fcda] py-2' cols={30} rows={10} placeholder='Message' name='message'></textarea>
            <button className='bg-[#64fcda] text-[#0a192f] font-bold py-2 mt-4 rounded-lg hover:bg-[#0a192f] hover:text-[#64fcda] duration-500'>
                Send
            </button>

        </form>
        </motion.div>
    </div>
  )
}

export default Contact