import { mask1, phone6, phoneTopGradient } from "../../assets/image";
import SocialCards from "../../components/Cards/Socials";

const Social = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-[50px] w-full h-max xl:h-[548px] items-center">
      <div className="w-full md:w-[468px] aspect-square md:aspect-auto md:h-[585px] xl:w-[438px] xl:h-full relative">
        <div className="flex flex-col relative items-center w-full h-full rounded-[24px] overflow-y-hidden border border-solid border-[#28282c]">
          <img
            className="absolute bottom-0 w-full object-contain"
            src={phoneTopGradient}
            alt="phone gradient"
          />
          <img
            className="w-[200px] h-full pt-[40px] md:pt-0 md:w-[225px] md:h-[468px] absolute bottom-0 z-2"
            src={phone6}
            alt="phone4"
          />
        </div>
        <img
          className="w-full h-[254px] absolute bottom-0 z-4"
          src={mask1}
          alt="phone4"
        />
      </div>
      <div className="flex flex-1 flex-col gap-[50px]">
        <h1 className="text-[24px] md:text-[48px] font-bold text-center xl:text-start">
          Appit Social’s Advanced Capabilities
        </h1>
        <SocialCards />
      </div>
    </div>
  );
};

export default Social;
