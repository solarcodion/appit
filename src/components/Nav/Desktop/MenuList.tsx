import { MENU_LINKS } from "../../../constants/Links";
import { MENU_LINK } from "../../../types";
import MenuItem from "./MenuItem";

const MenuList = () => {
  return (
    <>
      {MENU_LINKS.map((item: MENU_LINK, index: number) => (
        <MenuItem key={index} item={item} />
      ))}
    </>
  );
};

export default MenuList;
