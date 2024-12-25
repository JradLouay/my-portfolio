"use client";
import { motion, useMotionValue } from "framer-motion";
import LinkHoverEffect from "../link-hover-effect";

function ProjectTitle({ name, subTitle, isVisible, preview, github }) {
  const opacity = useMotionValue(1);
  return (
    <motion.div layout className="flex flex-row-reverse justify-between">
      <motion.div layout className="text-right text-slate-800">
        <motion.div layout className="heading-l">
          {name}
        </motion.div>
        <motion.div className="text-sm font-medium">{subTitle}</motion.div>
      </motion.div>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="show"
          layout
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          className="flex flex-col"
        >
          <LinkHoverEffect href={preview} target="_blank">
            Preview
          </LinkHoverEffect>
          <LinkHoverEffect href={github} target="_blank">
            Code
          </LinkHoverEffect>
        </motion.div>
      )}
    </motion.div>
  );
}

export default ProjectTitle;
