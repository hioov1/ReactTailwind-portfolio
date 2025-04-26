import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section id="about" className="p-8" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <section id="about" className="p-8 flex flex-col md:flex-row items-center justify-between mt-5">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">About Me</h2>
          <p className="mb-4">
            I am a front-end web developer based in Serang, Banten, Indonesia. I have a strong enthusiasm for continuously learning the latest developments in the world of programming, especially in the realm of front-end development.
          </p>
          <p className="mb-4">
            where I enjoy the journey of transforming my creativity and understanding into interactive and user-friendly digital spaces, always eager to expand my programming horizons. I always strive to learn about the newest technologies
            and frameworks.
          </p>
        </div>
        <div className="mt-8 md:pr-55 md:pb-8 flex justify-center items-center">
          <img src="/src/assets/images/about.jpg" alt="About" className="w-60 rounded-full" />
        </div>
      </section>
    </motion.section>
  );
}

export default About;
