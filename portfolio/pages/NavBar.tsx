import React, {useState} from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavBar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <section>
      <nav className="flex py-5 justify-between border-b-1 bg-[#0a192f] text-gray-300">
          <a href="#home" className="text-3xl text- py-5 px-10 ">welcome.</a>

        
          <ul className="hidden md:flex items-center mr-5">
           {/*  <li>
              <a className="px-5 cursor-pointer text-xl">
                <BsFillMoonStarsFill />
              </a>
            </li> */}
            <li>
              <a href="#about" className="px-5 ">
                About
              </a>
            </li>
            <li>
              <a href="#project" className="px-5">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="px-5">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1uWC40YvBdySsnPM5umXS2bHfJKInLgYA/view?usp=share_link"
                className="px-5 py-2 bg-cyan-500 text-white rounded-md"
              >
                Resume
              </a>
            </li>
          </ul>
        

        <div onClick={handleClick} className="md:hidden py-6 z-20">
          {!click ? <FaBars className="text-2xl mx-5 cursor-pointer"/> : <FaTimes className="text-2xl mx-5 cursor-pointer "/>}
        </div>

        
        <ul className={!click ? "hidden" : "absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-10"}>
           {/*  <li>
              <a className="px-5 cursor-pointer text-xl">
                <BsFillMoonStarsFill />
              </a>
            </li> */}
            <li onClick={handleClick} className="py-7">
              <a href="#about" className="px-5 py-5 text-4xl ">
                About Me
              </a>
            </li>
            <li onClick={handleClick} className="py-7">
              <a href="#project" className="px-5 py-5 text-4xl">
                Projects
              </a>
            </li>
            <li onClick={handleClick} className="py-7">
              <a href="#contact" className="px-5 py-6 text-4xl">
                Contact
              </a>
            </li>
            <li onClick={handleClick} className="py-9">
              <a
                href="https://drive.google.com/file/d/1uWC40YvBdySsnPM5umXS2bHfJKInLgYA/view?usp=share_link"
                className="px-5 bg-cyan-500 text-white rounded-md py-5 text-4xl"
              >
                Resume
              </a>
            </li>
          </ul>







      </nav>
    </section>
  );
};
