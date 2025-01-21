import { question } from "../../assets/image";

const FAQs = () => {
  return (
    <div className="flex flex-col gap-[60px] w-full max-w-[795px]">
      <div className="flex flex-col gap-[14px] w-full items-center">
        <div className="flex w-max bg-[#131315] border border-solid border-[#1d1d20] gap-[3px] px-[12px] py-[10px] rounded-full items-center">
          <img className="w-[20px] h-[20px]" src={question} alt="star" />
          <p className="text-[16px] text-white">FAQs</p>
        </div>
        <div className="flex flex-col gap-[20px] w-full items-center  max-w-[1200px]">
          <h1 className="text-[38px] md:text-[58px] font-bold text-center">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default FAQs;
