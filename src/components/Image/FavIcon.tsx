import { favIcon } from "../../assets/image";

type FavIconProps = {
  className?: string;
};

const FavIcon: React.FC<FavIconProps> = ({ className }) => {
  return <img className={className} src={favIcon} alt="fav-icon" />;
};

export default FavIcon;
