"use client";
import { memo, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import ProjectTitle from "./ProjectTitle";
import { openSpring, closeSpring } from "./animations";
import Overlay from "./Overlay";

function Project({ project, odd }) {
  const [open, setOpen] = useState(false);
  const y = useMotionValue(0);
  const zIndex = useMotionValue(open ? 10 : 0);
  const cardRef = useRef(null);

  function checkZIndex(latest) {
    console.log(latest);
    if (open) {
      zIndex.set(2);
    } else if (!open && latest.scaleX < 1.01) {
      zIndex.set(0);
    }
  }
  return (
    <div className={`min-h-[500px]`}>
      <Overlay isOpen={open} close={() => setOpen(false)} />
      <div
        onClick={() => setOpen(true)}
        className={`card-content-container ${open && "open"} `}
      >
        <motion.div
          layout
          ref={cardRef}
          style={{ zIndex, y }}
          layoutTransition={open ? openSpring : closeSpring}
          onUpdate={checkZIndex}
          className="bg-color-mint pointer-events-auto mx-auto my-0 flex h-[500px] max-w-[700px] flex-col rounded-[64px] border-2 border-gray-700 p-8 hover:cursor-pointer"
        >
          <ProjectTitle name={project.name} />
        </motion.div>
      </div>
    </div>
  );
}

export default memo(Project);
