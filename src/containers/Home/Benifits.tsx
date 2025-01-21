import { star } from "../../assets/image";
import BenifitCards from "../../components/BenifitCards";
import { NormalText } from "../../components/common/Text";

const Benefits = () => {
  return (
    <div className="flex flex-col gap-[50px] xl:gap-[60px] 2xl:gap-[80px] w-full justify-center">
      <div className="flex flex-col gap-[14px] items-center">
        <div className="flex w-max bg-[#131315] border border-solid border-[#1d1d20] gap-[3px] px-[12px] py-[10px] rounded-full items-center">
          <img className="w-[20px] h-[20px]" src={star} alt="star" />
          <p className="text-[16px] text-white">Our Benefits</p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-[38px] md:text-[58px] text-center font-bold">
            Discover Appit’s Benefits
          </h2>
          <NormalText className="md:px-[120px] xl:px-[320px] text-center !text-[18px]">
            Unlock a world of meaningful connections, tailored experiences, and
            seamless social interaction.
          </NormalText>
        </div>
      </div>
      <BenifitCards />
    </div>
  );
};

export default Benefits;
