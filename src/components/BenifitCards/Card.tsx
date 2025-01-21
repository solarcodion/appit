type CardProps = {
  icon: any;
  title: string;
  desc: string;
};

const Card: React.FC<CardProps> = ({ icon, title, desc }) => {
  return (
    <div className="w-full border border-solid border-[#1d1d20] p-[30px] bg-[#09090a] rounded-[14px] flex flex-col gap-[30px]">
      <div className="border border-solid border-[#28282c] bg-[#18181a] p-[14px] rounded-[14px] w-max">
        <img className="w-[30] h-[30]" src={icon} alt={title} />
      </div>
      <div className="flex flex-col gap-[6px]">
        <h1 className="text-[22px] font-semibold">{title}</h1>
        <p className="text-[18px] text-[#94969d]">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
