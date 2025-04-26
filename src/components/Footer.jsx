import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="text-center text-xs p-4 mt-8 border-t border-gray-700">
      <p>
        © Copyright 2025, Created by{" "}
        <a href="https://github.com/hioov1" className="text-blue-500 hover:underline">
          <span>hioov1</span>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
