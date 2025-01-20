import { motion } from "framer-motion";

type SliderProps = {
  dir: "right" | "left";
  time?: number;
  pos?: string;
  children: React.ReactNode;
};

export const Slider: React.FC<SliderProps> = ({
  dir,
  time = 10,
  pos = "-71%",
  children,
}) => {
  return (
    <motion.div
      className="flex space-x-4"
      initial={{ x: dir === "right" ? pos : 0 }}
      animate={{ x: dir === "right" ? 0 : pos }}
      transition={{
        ease: "linear",
        duration: time,
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};
