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
    <div className={`min-h-[500px] ${odd ? "col-span-5" : "col-span-7"}`}>
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
          className="bg-violet-600 pointer-events-auto hover:cursor-pointer p-8 h-[500px] rounded-[64px] border-2 border-black flex flex-col max-w-[700px] mx-auto my-0"
        >
          <ProjectTitle name={project.name} />
        </motion.div>
      </div>
    </div>
  );
}

export default memo(Project);
