import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section id="skills" className="p-8" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-fuchsia-400">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">Technical Skills</h3>
            <p>I possess a strong command of HTML for structuring content, CSS (leveraging Bootstrap and TailwindCSS for efficient styling), and JavaScript, particularly in building dynamic user interfaces with React.js.</p>
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default Skills;
