import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { FAQ_DATA } from "../../types";
import { minus, plus } from "../../assets/image";

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

type FAQProps = {
  item: FAQ_DATA;
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
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue >= to) {
          clearInterval(interval);
          return prevValue;
        }
        return prevValue + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible, to]);

  return (
    <div ref={elementRef}>
      <motion.p className="text-[50px] font-bold text-center">{value}</motion.p>
    </div>
  );
};

export const FAQAnimation: React.FC<FAQProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="px-[30px] py-[16px] border border-solid border-[#18181a] rounded-[14px] bg-[#09090a] flex flex-col overflow-y-hidden">
      <div className="flex justify-between">
        <p className="text-[20px] font-semibold">{item.qu}</p>
        <div
          className="w-[40px] h-[40px] border border-solid border-[#1d1d20] rounded-[10px] flex items-center justify-center"
          onClick={toggle}
        >
          <img className="" src={isOpen ? minus : plus} alt="plus" />
        </div>
      </div>
      <motion.div
        className="border-t flex border-solid border-[#1d1d20]"
        animate={
          isOpen
            ? {
                height: "auto",
                opacity: 1,
                marginTop: "24px",
                paddingTop: "24px",
              }
            : { height: 0, opacity: 0, marginTop: 0, paddingTop: 0 }
        }
      >
        <p className="text-[17px] text-[#94969d]">{item.an}</p>
      </motion.div>
    </div>
  );
};
