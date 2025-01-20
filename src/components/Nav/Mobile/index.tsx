import { useEffect, useRef, useState } from "react";
import { DropdownMenuButton } from "../../common/Button";
import FavIcon from "../../Image/FavIcon";
import MenuList from "./MenuList";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full px-[30px] py-[24px] absolute top-0 lg:hidden border-b border-solid border-[#1d1d20] flex justify-between">
      <FavIcon />
      <div onClick={toggleMenu}>
        <DropdownMenuButton />
      </div>
      <div
        className={`absolute right-[30px] top-[95px] p-[20px] border border-solid border-[#1d1d20] rounded-2xl bg-black flex flex-col gap-4 ${
          isOpen ? "block" : "hidden"
        }`}
        ref={ref}
      >
        <MenuList />
      </div>
    </div>
  );
};

export default Mobile;
