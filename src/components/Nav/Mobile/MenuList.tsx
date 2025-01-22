import { MENU_LINKS } from "../../../constants/Links";
import { MENU_LINK } from "../../../types";
import { NormalButton } from "../../common/Button";
import MenuItem from "./MenuItem";

const MenuList = () => {
  return (
    <>
      {MENU_LINKS.map((item: MENU_LINK, index: number) => (
        <MenuItem key={index} item={item} />
      ))}
      <NormalButton className="w-[180px]">Sign Up Now</NormalButton>
    </>
  );
};

export default MenuList;
