import { motion } from "framer-motion";
import me from "../assets/me.jpeg";
import Button from "./Button";
import { styles } from "../styles";
import resume from '../assets/docs/Ferdiansyah_Mauludin.pdf'

const Home = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start gap-5 sm:gap-10`}
      >
        <motion.div
          className="flex flex-col justify-center items-center hidden md:flex"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring" }}
        >
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-5">
          <motion.img
            src={me}
            alt="Profile"
            className="md:hidden w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover rounded-full grayscale hover:grayscale-0 transition-all ease duration-300"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          />

          <div className="text-center md:text-left">
            <motion.h3
              className={`${styles.heroHeadText} text-white text-base sm:text-lg md:text-xl mb-4 md:mb-2`}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              Hi, I'm <span className="text-[#915EFF]">Ferdi</span>
            </motion.h3>
            <motion.h1
              className={`${styles.heroHeadText2} text-white text-lg sm:text-xl md:text-2xl mt-[-20px] mb-2 md:mb-0`}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              Junior Programmer
            </motion.h1>
            <motion.h1
              className={`${styles.heroHeadText2} text-white text-lg sm:text-xl md:text-2xl mt-[-10px] mb-2 md:mb-0`}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              & Student
            </motion.h1>
            <motion.p
              className={`${styles.heroSubText} text-xs sm:text-sm md:text-base mt-4`}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              A Junior Programmer Developer who currently focused on Web Development. Other than that, I also interested in UX/UI Design. I love to learn new things and always open to new opportunities.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row mt-8 sm:mt-10 gap-4 md:gap-7"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Button variation="primary">
                <a href={resume} download="ferdiansyah-cv">Download CV</a>
              </Button>
              <Button variation="secondary">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </div>

          <motion.img
            src={me}
            alt="Profile"
            className="hidden md:block w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full grayscale hover:grayscale-0 transition-all ease duration-300"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          />
        </div>
      </div>

      <div className="absolute hidden md:flex bottom-10 w-full justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
