import { motion } from "framer-motion";
import me from "../assets/me.jpeg";
import Button from "./Button";
import { styles } from "../styles";

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
            className="md:hidden w-[200px] h-[200px] object-cover rounded-full grayscale hover:grayscale-0 transition-all ease duration-300 sm:w-[300px] sm:h-[300px]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          />

          <div className="text-center md:text-left">
            <motion.h3
              className={`${styles.heroHeadText} text-white text-lg md:text-xl mb-[25px] md:mb-1`}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              Hi, I'm <span className="text-[#915EFF]">Ferdi</span>
            </motion.h3>
            <motion.h1
              className={`${styles.heroHeadText2} text-white text-xl md:text-2xl mt-[-30px] mb-[7px] md:mb-[-20px]`}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              Junior Programmer
            </motion.h1>
            <motion.h1
              className={`${styles.heroHeadText2} text-white text-xl md:text-2xl mt-[-10px] mb-[-10px] md:mb-[-20px]`}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              & Student
            </motion.h1>
            <motion.p
              className={`${styles.heroSubText} text-xs md:text-sm mt-4`}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              A Junior Programmer Developer who currently focused on Web Development. Other than that, I also interested in UX/UI Design. I love to learn new things and always open to new opportunities.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row mt-10 gap-4 md:gap-7"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Button variation="primary">
                <a href="/docs/Ferdiansyah_Mauludin.pdf" download>Download CV</a>
              </Button>
              <Button variation="secondary">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </div>

          <motion.img
            src={me}
            alt="Profile"
            className="hidden md:block w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-cover rounded-full ml-0 md:ml-5 lg:px-12 grayscale hover:grayscale-0 transition-all ease duration-300 sm:w-[300px] sm:h-[300px]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          />
        </div>
      </div>

      {/* Menampilkan elemen hanya pada desktop */}
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
