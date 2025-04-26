import React from "react";
import { motion } from "framer-motion";

function Contacts() {
  return (
    <motion.section id="contacts" className="p-8" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <section id="contacts" className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-fuchsia-400">Contacts</h2>
        <p>
          I'm available to <span className="text-fuchsia-400">Work</span>. However, if you have another request or question, don't hesitate to contact me.
        </p>
        <div className="mt-4 row justify-content-between align-items-center">
          <div>
            <ul>
              <li className="flex items-center mb-4 gap-2">
                <img src="src/assets/icons/email.svg" alt="email-icons" className="size-7" />
                <a href="mailto:hioov1@gmail.com" className="my-2" target="_blank">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-6">also following me on social media : </p>
            <ul>
              <li className="flex items-center mb-4 gap-2">
                <img src="src/assets/icons/github.svg" alt="instagram-icons" className="size-7" />
                <a href="https://github.com/hioov1" className="my-2" target="_blank">
                  Github
                </a>
              </li>
              <li className="flex items-center mb-4 gap-2">
                <img src="src/assets/icons/instagram.svg" alt="instagram-icons" className="size-7" />
                <a href="https://www.instagram.com/hioov.1" className="my-2" target="_blank">
                  Instagram
                </a>
              </li>
              <li className="flex items-center mb-4 gap-2">
                <img src="src/assets/icons/facebook.svg" alt="facebook-icons" className="size-7" />
                <a href="https://www.facebook.com/Whydn06" className="my-2" target="_blank">
                  Facebook
                </a>
              </li>
              <li className="flex items-center mb-4 gap-2">
                <img src="src/assets/icons/tiktok.svg" alt="tiktok-icons" className="size-7" />
                <a href="https://tiktok.com/@hioov.1" className="my-2" target="_blank">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default Contacts;
