import {
  appStore,
  googleAppStore,
  phone2,
  phone7,
  phone9,
} from "../../assets/image";
import { NormalButton } from "../../components/common/Button";

const Download = () => {
  return (
    <div className="w-full max-w-[4180px] md:max-w-[750px] xl:max-w-[886px] flex flex-col gap-[88px] items-center">
      <div className="flex flex-col w-full gap-[40px]">
        <div className="flex-flex-col gap-[20px] px-0 md:px-[133px]">
          <h1 className="text-[38px] md:text-[58px] font-bold text-center">
            Download Our Wallet
          </h1>
          <p className="text-[18px] text-[#94969d] text-center">
            Get started with SafeSend today. Download our secure wallet app and
            take control of your digital assets with confidence. Available for
            both iOS and Android devices.
          </p>
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
      <div className="w-full flex justify-center md:justify-between items-end overflow-y-hidden">
        <div className="hidden md:flex w-[190px] xl:w-[252px] h-[274px] xl:h-[363px] relative items-center flex-col">
          <img className="absolute w-full top-0" src={phone2} alt="phone2" />
          <img
            className="absolute w-[170px] xl:w-[232px] top-[10px] rounded-[24px]"
            src={phone7}
            alt="phone7"
          />
          <div
            className="absolute bottom-0 h-[254px] z-10 w-full"
            style={{
              background:
                "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
            }}
          />
        </div>
        <div className="w-[243px] xl:w-[322px] h-[350px] xl:h-[462px] relative items-center flex flex-col">
          <img className="absolute w-full top-0" src={phone2} alt="phone2" />
          <div
            className="absolute bottom-0 h-[254px] z-10 w-full"
            style={{
              background:
                "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
            }}
          />
        </div>
        <div className="hidden md:flex w-[190px] xl:w-[252px] h-[274px] xl:h-[363px] relative items-center flex-col">
          <img className="absolute w-full top-0" src={phone2} alt="phone2" />
          <img
            className="absolute w-[170px] xl:w-[232px] top-[10px] rounded-[24px]"
            src={phone9}
            alt="phone2"
          />
          <div
            className="absolute bottom-0 h-[254px] z-10 w-full"
            style={{
              background:
                "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
