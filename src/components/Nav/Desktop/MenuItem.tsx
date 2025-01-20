import { MENU_LINK } from "../../../types";
import { MenuText } from "../../common/Text";

type MenuItemProps = {
  item: MENU_LINK;
};

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <a href={item.link}>
      <MenuText>{item.title}</MenuText>
    </a>
  );
};

export default MenuItem;
