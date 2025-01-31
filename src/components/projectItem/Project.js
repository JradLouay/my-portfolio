"use client";
import Image from "next/image";
import { memo, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import ProjectTitle from "./ProjectTitle";
import { openSpring, closeSpring } from "./animations";
import Overlay from "./Overlay";

function Project({ project, index }) {
  const [open, setOpen] = useState(false);
  const y = useMotionValue(0);
  // const zIndex = useMotionValue(open ? 10 : 0);
  const cardRef = useRef(null);

  const colors = {
    1: "bg-color-mint",
    2: "bg-color-red-rusty",
    3: "bg-color-light-papaya",
    4: "bg-color-dark-violet",
    5: "bg-color-light-blue",
    6: "bg-color-lilac",
  };

  const color = colors[index + 1];

  function toggle() {
    if (!project.workInProgress) {
      setOpen((prev) => !prev);
    }
  }

  return (
    <div className={`h-[400px]`}>
      {open && <Overlay isOpen={open} close={toggle} />}
      <motion.div
        onClick={toggle}
        className={`card-content-container ${open && "open"} `}
      >
        <motion.div
          layout
          ref={cardRef}
          style={{ y }}
          whileHover={{ y: open ? 0 : -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          layoutTransition={open ? openSpring : closeSpring}
          className={`${color} pointer-events-auto relative mx-auto my-0 flex max-w-[700px] flex-col gap-12 overflow-hidden rounded-[24px] p-6 ${project.workInProgress ? "hover:cursor-not-allowed" : "hover:cursor-pointer"} xl:rounded-[64px] xl:px-20 xl:py-10 h-full`}
        >
          <ProjectTitle
            name={project.name}
            subTitle={project.subTitle}
            preview={project.preview}
            github={project.github}
            isVisible={open}
          />
          <motion.div layout>
            <Image src={project.image} alt="quiz" className="rounded-lg" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(Project);
