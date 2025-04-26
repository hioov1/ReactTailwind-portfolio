import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "First Portfolio",
      desc: "Basic portfolio with HTML CSS and JavaScript",
      tech: "HTML CSS bootstrap JavaScript",
      link: "https://github.com/hioov1/hio-port",
    },
    {
      title: "Second Portfolio",
      desc: "Basic Portfolio With AOS Animation",
      tech: "HTML CSS bootstrap JavaScript AOS",
      link: "https://github.com/hioov1/hio-port-aos",
    },
    {
      title: "Third Portfolio",
      desc: "Basic Portfolio With React Tailwind CSS",
      tech: "Vite React Tailwind CSS Framer-motion",
      link: "#",
    },
  ];

  return (
    <motion.section id="works" className="p-8" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <section id="projects" className="p-8 mb-5">
        <h2 className="text-2xl font-bold mb-6 text-fuchsia-400">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 hover:shadow-lg transition">
              <div className="text-gray-400 text-xs mb-2">{project.tech}</div>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mb-4">{project.desc}</p>
              <a href={project.link} className="border px-2 py-1 text-sm" target="_blank" rel="noopener noreferrer">
                See More ↗
              </a>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
}

export default Projects;
