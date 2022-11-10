import Head from 'next/head'
import { NavBar } from './NavBar';
import { About } from './About';
import { Intro } from './Intro';
import { Projects } from './Projects';
import { Skills } from './Skills';
//import { Footer } from './Footer';
import Contact from './Contact';


export default function Home() {
  return (
    <>
      <NavBar/>
      <Intro/>
      <About/>
      <Skills/> 
      <Projects/>
      <Contact/>
    </>

  )
}
