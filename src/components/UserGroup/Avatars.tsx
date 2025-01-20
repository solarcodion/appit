import { avatar1, avatar2, avatar3 } from "../../assets/image";

const Avatars = () => {
  return (
    <div className="w-[68px] h-[28px] flex relative">
      <img
        className="w-[28px] h-full absolute left-0"
        src={avatar1}
        alt="avatar1"
      />
      <img
        className="w-[28px] h-full absolute left-1/2 -translate-x-1/2"
        src={avatar2}
        alt="avatar1"
      />
      <img
        className="w-[28px] h-full absolute right-0"
        src={avatar3}
        alt="avatar1"
      />
    </div>
  );
};

export default Avatars;
