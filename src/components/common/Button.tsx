import { dropdownMenuIcon } from "../../assets/image";

type NormalButtonProps = {
  className?: string;
  children: React.ReactNode;
};

type DropdownMenuButtonProps = {
  className?: string;
};

const NormalButton: React.FC<NormalButtonProps> = ({ className, children }) => {
  return (
    <button
      className={`px-5 py-4 bg-white text-black text-[17px] rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};

const DropdownMenuButton: React.FC<DropdownMenuButtonProps> = ({
  className,
}) => {
  return (
    <NormalButton className={className}>
      <img src={dropdownMenuIcon} alt="dropdown" />
    </NormalButton>
  );
};

export { NormalButton, DropdownMenuButton };
