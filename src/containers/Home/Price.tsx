import { useState } from "react";
import { price } from "../../assets/image";
import Prices from "../../components/Cards/Prices";
import { MONTHLY_PRICES, YEARLY_PRICE } from "../../constants/Array";

const Price = () => {
  const [monthly, setMonthly] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-[60px] w-full max-w-[795px]">
      <div className="flex flex-col gap-[14px] w-full items-center">
        <div className="flex w-max bg-[#131315] border border-solid border-[#1d1d20] gap-[3px] px-[12px] py-[10px] rounded-full items-center">
          <img className="w-[20px] h-[20px]" src={price} alt="star" />
          <p className="text-[16px] text-white">Our Pricing</p>
        </div>
        <div className="flex flex-col gap-[20px] w-full">
          <h1 className="text-[38px] md:text-[58px] font-bold text-center">
            Flexible Pricing Plans
          </h1>
          <p className="xl:px-[120px] text-[18px] text-center text-[#797b85]">
            Choose a plan that fits your needs, with flexible options and
            transparent pricing.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-[40px] items-center">
        <div className="flex p-[8px] border border-solid border-[#18181a] w-max rounded-full">
          <div
            className={`px-[20px] py-[12px] text-[18px] ${
              monthly
                ? "border border-solid border-[#1d1d20] bg-[#0e0e10] rounded-full"
                : "border-none text-[#797b85]"
            }`}
            onClick={() => setMonthly(true)}
          >
            Monthly
          </div>
          <div
            className={`px-[20px] py-[12px] text-[18px] ${
              !monthly
                ? "border border-solid border-[#1d1d20] bg-[#0e0e10] rounded-full"
                : "border-none text-[#797b85]"
            }`}
            onClick={() => setMonthly(false)}
          >
            Yearly
          </div>
        </div>
        <Prices
          data={monthly ? MONTHLY_PRICES : YEARLY_PRICE}
          monthly={monthly}
        />
      </div>
    </div>
  );
};

export default Price;
