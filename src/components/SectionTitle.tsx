import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = "" }: SectionTitleProps) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient mb-4 ${className}`}
  >
    {children}
  </motion.h2>
);

export default SectionTitle;
