import { useEffect, React } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { styles } from "../../styles";
import Hr from '../Hr';
import MeAbout from "../../assets/me2.jpeg";
import MeAbout2 from "../../assets/me3.jpg";
import Button from '../Button';
import MainLayout from "../../layouts/MainLayout";
import SectionWrapper from "../../hoc/SectionWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { fadeIn, textVariant } from "../../utils/motion";
import { BallCanvas } from "../canvas";
import { technologies, certificate } from "../../constants";

const AboutContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleScrollDown = () => {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      {/* Start About */}
      <section id="about" className="relative w-full h-screen mx-auto overflow-hidden mt-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 px-5 overflow-hidden">
          <div className="order-2 md:order-1 flex flex-col justify-center items-start text-start">
            <motion.p
              className={`${styles.sectionSubText}`}
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
            >
              INTRODUCTION
            </motion.p>
            <motion.h1
              className={`${styles.sectionHeadText}`}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
            >
              About Me.
            </motion.h1>
            <Hr />
            <motion.p
              className="text-xl mt-4 tracking-wider text-secondary leading-[1.7rem] mb-5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              A brief introduction about me, interests and achievements.
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
              className="h-[300px] md:h-[550px] w-[300px] md:w-[400px] mr-5"
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
      {/* End About */}

      {/* Start Who */}
      <section className="relative w-full h-[150px] mx-auto overflow-hidden mt-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 px-5 overflow-hidden">
          <motion.div variants={textVariant()}>
            <Hr />
            <h2 className={`${styles.sectionHeadText}`}>Who am I?</h2>
          </motion.div>
        </div>
      </section>
      {/* End Who */}

      {/* Start Introduce */}
      <section id="about-section" className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-5 mb-10 md:mb-20">
        <div className="order-1 overflow-hidden">
          <motion.div
            className="h-[300px] md:h-[450px] w-[300px] md:w-[400px] flex justify-center items-center"
            initial={{ x: -300, opacity: 0, z: -100 }}
            whileInView={{ x: 0, opacity: 1, z: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
          >
            <img
              src={MeAbout2}
              className="object-cover w-full h-full rounded-3xl grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
              alt="Ferdi"
            />
          </motion.div>
        </div>
        <div className="order-2 flex flex-col justify-center items-start text-start max-w-lg md:ml-10">
          <motion.h1
            className="text-3xl font-bold"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            Ferdiansyah Mauludin
          </motion.h1>
          <motion.p
            className="text-lg mt-4 tracking-wider text-secondary leading-[1.7rem] md:leading-[2rem]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Hello, I'm Ferdiansyah Mauludin, a technology enthusiast and aspiring Web Developer. Originally from Bogor, West Java, Indonesia, I am currently starting an extraordinary journey at Smkn 01 Ciomas, where I learn about programming. Outside of the world of coding, I delve into the fields of design and editing. I believe that in today's fast-paced digital era, being a lifelong learner is not just a choice, but a necessity. Let's connect and explore this ever-evolving world of technology together!
          </motion.p>
        </div>
      </section>
      {/* End Introduce */}

      {/* Start Skills */}
      <section id="skills-section" className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col items-center gap-10 md:gap-20 px-5">
        <div className="container mx-auto">
          <motion.p
            className={`${styles.sectionSubText} text-center`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            My Skills
          </motion.p>
          <motion.h2
            className={`${styles.sectionHeadText} text-center`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Tech Stack & Tools.
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-10 mt-8">
            {technologies.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Skills */}

      {/* Start Certificates */}
      <section className="relative w-full h-auto mx-auto overflow-hidden mt-10">
        <div className="bg-black-100 rounded-[20px] p-12 container mx-auto">
          <motion.div className="mb-10">
            <p className={`${styles.sectionSubText} text-gray-500`}>ACHIEVEMENT</p>
            <h2 className={`${styles.sectionHeadText} text-white`}>Certificate.</h2>
            <p className={`${styles.heroSubText} text-xs sm:text-sm md:text-base mt-4`}>
            These are several certificates that I have received from various online and offline courses.</p>
          </motion.div>
          <div className="mt-10">
            <Slider {...settings}>
              {certificate.map((cert, index) => (
                <div key={index} className="px-5">
                  <img src={cert.image} alt={`certificate-${index}`} className="w-full h-auto rounded-[20px] shadow-lg" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {/* End Certificates */}
    </>
  );
};

const WrappedAboutContent = SectionWrapper(AboutContent, "about");

const AboutPage = () => {
  return (
    <MainLayout>
      <WrappedAboutContent />
    </MainLayout>
  );
};

export default AboutPage;
