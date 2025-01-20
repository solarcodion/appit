import Avatars from "./Avatars";

const UserGroup = () => {
  return (
    <div className="py-2 pl-2 pr-3.5 justify-items-center bg-[#18181a] border border-solid border-[#28282c] rounded-full flex gap-4">
      <Avatars />
      <p className="text-base content-center">Trusted by 3+ million users</p>
    </div>
  );
};

export default UserGroup;
