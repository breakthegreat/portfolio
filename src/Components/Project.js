import React, { useState } from "react";
import "../css/project.css";
import { motion } from "framer-motion";

const Project = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleCard = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };
  const projects = [
    {
      title: "Some stuff ",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    { title: "test2", description: "test2" },
  ];

  return (
    <>
      <div>
        <h1 className="title-projects-section"> My Current Projects</h1>
        <div className="grid-project">
          {projects.map(({ description, title }, index) => (
            <motion.div
              key={index}
              transition={{ layout: { duration: 1, type: "spring" } }}
              layout
              onClick={() => {
                toggleCard(index);
              }}
              className="grid-box-project"
              style={{ borderRadius: "12px" }}
            >
              <motion.h2 layout="position">{title}</motion.h2>
              {isOpen === index && (
                <motion.div
                  layout="position"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <p>{description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
