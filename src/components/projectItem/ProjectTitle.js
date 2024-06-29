"use client";
import { motion } from "framer-motion";

function ProjectTitle({ name }) {
  return (
    <motion.div layout className="flex flex-row-reverse">
      <motion.div layout className="text-right text-slate-800">
        <motion.div layout className="heading-l">
          {name}
        </motion.div>
        <motion.div layout className="text-sm font-medium">
          Lorem ipsum dolor sit amet
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectTitle;
