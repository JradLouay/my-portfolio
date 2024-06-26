"use client";
import { memo, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import ProjectTitle from "./ProjectTitle";
import { openSpring, closeSpring } from "./animations";
import Overlay from "./Overlay";

function Project({ project }) {
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
    <div className="">
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
          className="bg-violet-400 pointer-events-auto hover:cursor-pointer p-8 h-[500px] rounded-md border-2 border-black flex flex-col max-w-[700px] mx-auto my-0"
        >
          <ProjectTitle close={() => setOpen(false)} />
        </motion.div>
      </div>
    </div>
  );
}

export default memo(Project);
