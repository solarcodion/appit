import {
  appStore,
  check,
  googleAppStore,
  mask1,
  mask2,
  phone2,
  phone4,
} from "../../assets/image";
import { NormalButton } from "../../components/common/Button";
import { NormalText } from "../../components/common/Text";

const Appits = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-[50px] w-full h-max xl:h-[548px] items-center">
      <div className="flex flex-1 flex-col gap-[40px]">
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[24px] md:text-[58px] font-bold text-center xl:text-start">
            Appit's Advanced Capabilities
          </h1>
          <p className="text-[18px] text-[#94969d] text-center xl:text-start">
            Explore advanced capabilities designed to elevate your social
            experience and interactions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px]">
          <div className="flex gap-[8px] items-center">
            <img className="w-[22px] h-[22px]" src={check} alt="check" />
            <NormalText className="text-[#94969d]">Story Sharing</NormalText>
          </div>
          <div className="flex gap-[8px] items-center">
            <img className="w-[22px] h-[22px]" src={check} alt="check" />
            <NormalText className="text-[#94969d]">Custom Profiles</NormalText>
          </div>
          <div className="flex gap-[8px] items-center">
            <img className="w-[22px] h-[22px]" src={check} alt="check" />
            <NormalText className="text-[#94969d]">Community Groups</NormalText>
          </div>
          <div className="flex gap-[8px] items-center">
            <img className="w-[22px] h-[22px]" src={check} alt="check" />
            <NormalText className="text-[#94969d]">Event Creation</NormalText>
          </div>
          <div className="flex gap-[8px] items-center">
            <img className="w-[22px] h-[22px]" src={check} alt="check" />
            <NormalText className="text-[#94969d]">
              Smart Notifications
            </NormalText>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[20px] justify-center">
          <NormalButton className="px-[18px] py-[14px]">
            <div className="flex gap-[10px] items-center justify-center">
              <img
                className="w-[40px] h-[40px]"
                src={googleAppStore}
                alt="google app store"
              />
              <div className="flex flex-col gap-[10px]">
                <p className="text-[13px] leading-[10.4px]">Get It On</p>
                <p className="text-[17px] font-semibold leading-[13.6px]">
                  Google Play
                </p>
              </div>
            </div>
          </NormalButton>
          <NormalButton className="px-[18px] py-[14px]">
            <div className="flex gap-[10px] items-center justify-center">
              <img
                className="w-[40px] h-[40px]"
                src={appStore}
                alt="app store"
              />
              <div className="flex flex-col gap-[10px]">
                <p className="text-[13px] leading-[10.4px]">Download on the</p>
                <p className="text-[17px] font-semibold leading-[13.6px]">
                  App Store
                </p>
              </div>
            </div>
          </NormalButton>
        </div>
      </div>
      <div className="w-full md:w-[520px] aspect-square md:aspect-auto md:h-[585px] xl:w-[542px] xl:h-full relative">
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full h-[300px] aspect-square"
          style={{
            background:
              "radial-gradient(50% 49.99999999999999% at 50% 49.99999999999999%,#ffffff 0%,rgba(255,255,255,0) 100%)",
            filter: "blur(100px)",
          }}
        />
        <div className="flex flex-col relative items-center w-full h-full rounded-[24px] overflow-y-hidden border border-solid border-[#28282c]">
          <img
            className="absolute top-0 w-full object-contain"
            src={mask2}
            alt="phone gradient"
          />
          <img
            className="w-[310px] absolute top-[62px] z-2"
            src={phone2}
            alt="phone4"
          />
          <img
            className="w-[282px] absolute top-[72px] z-2 rounded-[32px]"
            src={phone4}
            alt="phone4"
          />
        </div>
        <img
          className="w-full h-[184px] md:h-[254px] absolute bottom-0 z-4"
          src={mask1}
          alt="phone4"
        />
      </div>
    </div>
  );
};

export default Appits;
