import React from "react";
import { motion } from "framer-motion";
interface Props {
  className: string;
  children: React.ReactNode;
}
export default function FadeIn({
  className,
  children,
}: Props): React.ReactNode {
  return (
    <motion.article
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      {children}
    </motion.article>
  );
}
