import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Hr from './Hr';
import MeAbout from "../assets/me2.jpeg";
import Button from './Button';

const Projects = () => {
  return (
    <section id="projects" className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 px-5 overflow-hidden">
        <div className="order-2 md:order-1 flex flex-col justify-center items-start text-start">
        <motion.p
            className={`${styles.sectionSubText}`}
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.1, type: "spring" }} 
          >
            MY WORKS
          </motion.p>
          <motion.h1
            className={`${styles.sectionHeadText}`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            My Projects.
          </motion.h1>
          <Hr />
          <motion.p
         className="text-xl mt-4 tracking-wider text-secondary leading-[1.7rem] mb-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            These are some of the projects I have worked on.
          </motion.p>
          <motion.div
            className="text-white-100"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <Button variation="primary">
              <Link to="/projects">Learn More</Link>
            </Button>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 overflow-hidden">
          <motion.div
            className="h-[300px] md:h-[550px] w-[300px] md:w-[400px] ml-0"
            initial={{ x: 300, opacity: 0, z: -100 }}
            whileInView={{ x: 0, opacity: 1, z: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
          >
            <img
              src={MeAbout}
              className="object-cover w-full h-full rounded-3xl grayscale hover:grayscale-0 transition-all duration-300"
              alt="Ferdi"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
