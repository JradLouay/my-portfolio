import { motion } from "framer-motion";
function Overlay({ isOpen, close }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
      className="fixed z-[1] will-change-[opacity] top-0 bottom-0 left-1/2 -translate-x-1/2 w-full bg-black bg-opacity-80"
      onClick={close}
    ></motion.div>
  );
}

export default Overlay;
