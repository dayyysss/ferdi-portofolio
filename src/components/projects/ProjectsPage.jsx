import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import Hr from '../Hr';
import { Tilt } from "react-tilt";
import projectall from "../../assets/projectall.png";
import Button from '../Button';
import MainLayout from "../../layouts/MainLayout";
import SectionWrapper from "../../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../../utils/motion";
import { projects } from "../../constants";
import { github } from "../../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const ProjectsContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollDown = () => {
    document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="projects" className="relative w-full h-screen mx-auto overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 px-5 overflow-hidden mt-10">
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
              <Button variation="primary" onClick={handleScrollDown}>
                <span>Scroll Down</span> <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
              </Button>
            </motion.div>
          </div>
          <div className="order-1 md:order-2 overflow-hidden">
            <motion.div
              className="h-[300px] md:h-[550px] w-[300px] md:w-[400px]"
              initial={{ x: 300, opacity: 0, z: -100 }}
              whileInView={{ x: 0, opacity: 1, z: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
            >
              <img
                src={projectall}
                className="object-cover w-full h-full rounded-3xl grayscale hover:grayscale-0 transition-all duration-300"
                alt="Ferdi"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <Hr />
      <section id="projects-section" className="relative w-full h-screen mx-auto overflow-hidden">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};

const WrappedProjectsContent = SectionWrapper(ProjectsContent, "projects");

const ProjectsPage = () => (
  <MainLayout>
    <WrappedProjectsContent />
  </MainLayout>
);

export default ProjectsPage;
