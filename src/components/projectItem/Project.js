"use client";
import Image from "next/image";
import { memo, useRef, useState } from "react";
import { color, motion, useMotionValue } from "framer-motion";
import ProjectTitle from "./ProjectTitle";
import { openSpring, closeSpring } from "./animations";
import Overlay from "./Overlay";

function Project({ project, index }) {
  const [open, setOpen] = useState(false);
  const y = useMotionValue(0);
  // const zIndex = useMotionValue(open ? 10 : 0);
  const cardRef = useRef(null);

  const colors = [
    "bg-color-mint",
    "bg-color-red-rusty",
    "bg-color-pinky",
    "bg-color-pinky",
    "bg-color-dark-violet",
  ];

  function checkZIndex(latest) {
    console.log(latest);
    if (open) {
      zIndex.set(2);
    } else if (!open && latest.scaleX < 1.01) {
      zIndex.set(0);
    }
  }
  return (
    <div className={`h-[400px]`}>
      {open && <Overlay isOpen={open} close={() => setOpen(false)} />}
      <motion.div
        onClick={() => setOpen(true)}
        className={`card-content-container ${open && "open"} `}
      >
        <motion.div
          layout
          ref={cardRef}
          style={{ y }}
          whileHover={{ y: open ? 0 : -8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          layoutTransition={open ? openSpring : closeSpring}
          // onUpdate={checkZIndex}
          className={`${colors[index]} rusty pointer-events-auto relative mx-auto my-0 flex h-full max-w-[700px] flex-col gap-12 overflow-hidden rounded-[24px] p-6 hover:cursor-pointer xl:rounded-[64px] xl:px-20 xl:py-10`}
        >
          <ProjectTitle name={project.name} subTitle={project.subTitle} />
          <motion.div layout>
            <Image src={project.image} alt="quiz" className="rounded-lg" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(Project);
