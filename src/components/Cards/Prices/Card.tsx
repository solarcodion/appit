import { check, mask4, uncheck } from "../../../assets/image";
import { PRICE_DATA } from "../../../types";
import { NormalButton } from "../../common/Button";

type CardProps = {
  item: PRICE_DATA;
  monthly: boolean;
};

const Card: React.FC<CardProps> = ({ item, monthly }) => {
  return (
    <div className="flex flex-col p-[10px] relative w-[445px] xl:w-full">
      <div className="flex flex-col gap-[24px] p-[20px] w-full z-10">
        <div className="flex flex-col gap-[18px]">
          <p className="text-white text-[22px]">{item.title}</p>
          <div className="flex flex-col gap-[16px]">
            <p className="flex gap-[6px] items-end">
              <span className="text-[58px] font-bold leading-[58px]">
                ${item.value}
              </span>
              <span className="text-[18px] text-[#797b85]">
                {monthly ? "/per month" : "/per year"}
              </span>
            </p>
            <p className="text-[18px] text-[#94969d]">{item.sub}</p>
          </div>
        </div>
        <NormalButton>
          <p className="text-[18px] font-semibold">Get Started</p>
        </NormalButton>
      </div>
      <div className="p-[24px] border border-solid border-[#1d1d20] bg-[#09090a] rounded-[20px] z-10 flex flex-col gap-[16px]">
        <p className="text-[20px] font-semibold">What's Included</p>
        <div className="flex flex-col gap-[12px]">
          {item.information.map(
            (item: { desc: string; status: boolean }, index: number) => (
              <div key={index} className="flex gap-[8px] items-center">
                <img
                  className="w-[22px] h-[22px]"
                  src={item.status ? check : uncheck}
                  alt="check"
                />
                <p
                  className={`text-base ${
                    item.status
                      ? "text-[#62646c]"
                      : "text-[#94969d] line-through"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            )
          )}
        </div>
      </div>
      {item.badge && (
        <p className="absolute top-[10px] right-[10px] px-[12px] py-[5px] bg-[#18181a] rounded-full z-10 text-[#c9cace]">
          {item.badge}
        </p>
      )}
      <img
        className="absolute top-0 left-0 w-full z-1"
        src={mask4}
        alt="mask4"
      />
    </div>
  );
};

export default Card;
