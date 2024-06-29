"use client";
import { motion } from "framer-motion";

function ProjectTitle({ name, close }) {
  return (
    <motion.div layout className="flex flex-row-reverse">
      <motion.div layout className="text-right text-slate-800">
        <motion.div layout className="heading-l">
          {name}
        </motion.div>
        <motion.div layout className="text-sm font-normal">
          Lorem ipsum dolor sit amet
        </motion.div>
      </motion.div>
      {/* <motion.button layout onClick={close}>
        {" "}
        <motion.svg
          width="63"
          height="63"
          viewBox="0 0 63 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Link">
            <path
              d="M61.5 31.4974C61.5 48.066 48.0685 61.4974 31.5 61.4974C14.9315 61.4974 1.5 48.066 1.5 31.4974C1.5 14.9289 14.9315 1.49744 31.5 1.49744C48.0685 1.49744 61.5 14.9289 61.5 31.4974Z"
              fill="white"
            />
            <path d="M26.825 26.8224H35.575V35.5724" fill="white" />
            <path
              d="M26.825 35.5724L35.575 26.8224M35.575 26.8224H26.825M35.575 26.8224V35.5724M61.5 31.4974C61.5 48.066 48.0685 61.4974 31.5 61.4974C14.9315 61.4974 1.5 48.066 1.5 31.4974C1.5 14.9289 14.9315 1.49744 31.5 1.49744C48.0685 1.49744 61.5 14.9289 61.5 31.4974Z"
              stroke="black"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </motion.svg>
      </motion.button> */}
    </motion.div>
  );
}

export default ProjectTitle;
