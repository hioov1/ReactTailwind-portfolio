import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <motion.section id="home" className="flex flex-col md:flex-row items-center justify-between p-10" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <section id="home" className="flex flex-col md:flex-row items-center justify-between p-8 mt-5">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hi👋, I'm <span className="text-fuchsia-400">Hioo</span>
          </h1>
          <h2 className="text-xl md:text-3xl text-fuchsia-400">
            <Typewriter
              words={["Front-End", "Web Developer", "Tech Enthusiast"]}
              loop={0} // 0 = infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-sm md:text-base mt-4 text-gray-400 max-w-lg">My passion lies in building the bridge between design and users through code. I'm Hioo, a front-end web developer enthusiastic about the digital world.</p>

          <button className="mt-6 px-6 py-2 bg-fuchsia-500 text-white rounded-full hover:bg-fuchsia-700 transition">
            <a href="mailto:hioov1@gmail.com">Contact Me</a>
          </button>
        </div>
      </section>
      <motion.section id="quote" className="p-8" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>
        <section className="p-8 text-center justify-between">
          <blockquote className="text-xl italic">"Building the web with code and creativity"</blockquote>
          <p className="mt-2 text-gray-400">-Mr. Who</p>
        </section>
      </motion.section>
    </motion.section>
  );
}

export default Hero;
