type CardProps = {
  icon: any;
  title: string;
  desc: string;
};

const Card: React.FC<CardProps> = ({ icon, title, desc }) => {
  return (
    <div className="p-[24px] border border-solid border-[#1d1d20] rounded-[20px] flex flex-col gap-[16px]">
      <div className="flex gap-[8px] items-center">
        <img className="w-[26px] h-[26px]" src={icon} alt="icon" />
        <p className="text-[20px] font-semibold">{title}</p>
      </div>
      <p className="text-[#94969d] text-[18px]">{desc}</p>
    </div>
  );
};

export default Card;
