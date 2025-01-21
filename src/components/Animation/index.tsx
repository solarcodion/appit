import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

type SliderProps = {
  dir: "right" | "left";
  time?: number;
  pos?: string;
  children: React.ReactNode;
};

type IncreasementProps = {
  from: number;
  to: number;
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

export const Increasement: React.FC<IncreasementProps> = ({ from, to }) => {
  const [value, setValue] = useState<number>(from);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue >= to) {
          clearInterval(interval);
          return prevValue;
        }
        return prevValue + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [to]);

  return (
    <motion.p className="text-[50px] font-bold text-center">{value}</motion.p>
  );
};
