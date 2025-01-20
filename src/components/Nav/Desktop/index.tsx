import { NormalButton } from "../../common/Button";
import FavIcon from "../../Image/FavIcon";
import MenuList from "./MenuList";

const Desktop = () => {
  return (
    <div className="w-full h-[100px] px-[60px] hidden lg:block">
      <div className="max-w-[1320px] h-full relative flex items-center justify-center">
        <FavIcon className="absolute left-0" />
        <div className="flex">
          <MenuList />
        </div>
        <NormalButton className="absolute right-0">Join Waitlist</NormalButton>
      </div>
    </div>
  );
};

export default Desktop;
