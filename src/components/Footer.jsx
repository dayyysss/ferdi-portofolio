import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section className="relative w-full h-52 flex flex-col justify-center items-center">
      <div className="container mx-auto flex flex-col items-center gap-10 md:gap-20 px-5">
        <div className="order-2 md:order-1 flex flex-col justify-center items-center text-center z-10 w-full md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2">
          <hr className="border-t border-gray-300 w-full md:w-auto mb-2" />
          <motion.p
            className="title text-sm md:text-base tracking-wider text-gray-500 leading-[1.5rem] mb-3"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          >
          </motion.p>
          <div className="flex justify-center items-center space-x-2 mb-3">
            <motion.a
              href="mailto:ferdiansyah123344@gmail.com?subject=Hello&body=Hello Ferdiansyah,"
              className="flex justify-center items-center bg-tertiary w-10 h-10 rounded-2xl text-white hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                y: { delay: 0.1 },
                opacity: { delay: 0.2 },
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            </motion.a>
            <motion.a
              href="https://github.com/dayyysss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-tertiary w-10 h-10 rounded-2xl text-white hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                y: { delay: 0.2 },
                opacity: { delay: 0.3 },
              }}
            >
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/dayys7_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-tertiary w-10 h-10 rounded-2xl text-white hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                y: { delay: 0.3 },
                opacity: { delay: 0.4 },
              }}
            >
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ferdiansyah-mauludin-91b29a2b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-tertiary w-10 h-10 rounded-2xl text-white hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                y: { delay: 0.4 },
                opacity: { delay: 0.5 },
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@ferdiansyahm69"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-tertiary w-10 h-10 rounded-2xl text-white hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                y: { delay: 0.4 },
                opacity: { delay: 0.5 },
              }}
            >
              <FontAwesomeIcon icon={faYoutube} className="text-xl" />
            </motion.a>
          </div>
          <motion.p
            className="text-gray-500 text-xs mt-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              type: "spring",
            }}
          >
            © 2024 Created by Ferdiansyah. All rights reserved.
          </motion.p>
          <motion.a
            href="https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-xs mt-2 underline"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              type: "spring",
            }}
          >
            3D Model Credit: Stylized Planet by Sketchfab
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
