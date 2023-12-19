import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
}
export default function PageNameAnimation({ text }: Props): React.ReactNode {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      onAnimationComplete={() => {
        setAnimationCompleted(true);
      }}
      className={`w-full h-screen fixed inset-0 bg-dark z-50 ${
        animationCompleted ? "hidden" : "flex"
      }`}
    >
      {/* text animation */}
      <div className="container h-full flex justify-center items-center">
        <motion.h3
          initial={{ letterSpacing: "", scale: 1 }}
          animate={{ letterSpacing: "100px", scale: 3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" text-6xl -rotate-90 lg:rotate-0"
        >
          {text}
        </motion.h3>
      </div>
    </motion.div>
  );
}
