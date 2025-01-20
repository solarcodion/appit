import {
  appStore,
  googleAppStore,
  info,
  phone1,
  phone2,
  phone3,
} from "../../assets/image";
import { Slider } from "../../components/Animation";
import { PhoneBgGradient } from "../../components/common/Background";
import { NormalButton } from "../../components/common/Button";
import { NormalText } from "../../components/common/Text";
import UserGroup from "../../components/UserGroup";
import { COMPANIES } from "../../constants/Array";

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="w-full flex flex-col gap-[40px]">
          <div className="w-full flex flex-col gap-[16px] items-center">
            <UserGroup />
            <div className="md:px-[40px] xl:px-[150px]">
              <h1 className="text-[34px] md:text-[60px] xl:text-[64px] text-center font-bold">
                Connect, Share, and Grow with Appit Social
              </h1>
              <p className="md:[120px] xl:px-[200px] text-[18px] xl:text-[20px] text-center text-[#94969d]">
                Join Appit to build authentic connections and share your
                passions effortlessly.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[30px] items-center">
            <NormalButton className="w-max font-semibold">
              Get this Template
            </NormalButton>
            <div className="flex gap-[10px]">
              <div className="flex items-center gap-1">
                <img
                  className="w-[20px] h-[20px]"
                  src={info}
                  alt="informaion"
                />
                <NormalText>App Available For</NormalText>
              </div>
              <div className="flex gap-[10px] bg-[#0e0e10] border border-solid border-[#1d1d20] rounded-full px-3 py-2">
                <img
                  className="w-[28px] h-[28px]"
                  src={googleAppStore}
                  alt="google app store"
                />
                <div className="border-r border-solid border-[#1d1d20]" />
                <img
                  className="w-[28px] h-[28px]"
                  src={appStore}
                  alt="app store"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[611px]">
          <div className="hidden md:block md:w-[230px] xl:w-[300px] md:h-[365px] xl:h-[365px] absolute md:top-[-100px] xl:top-[-210px] md:left-[-45px] xl:left-0">
            <img
              className="w-full h-full object-contain"
              src={phone1}
              alt="phone1"
            />
            <PhoneBgGradient />
          </div>
          <div className="md:w-[200px] xl:w-[260px] md:h-[400px] xl:h-[400px] absolute top-[50px] left-1/2 -translate-x-1/2">
            <img
              className="w-full h-full object-contain"
              src={phone2}
              alt="phone2"
            />
            <PhoneBgGradient />
          </div>
          <div className="hidden md:block md:w-[230px] xl:w-[300px] md:h-[365px] xl:h-[365px] absolute md:top-[-100px] xl:top-[-210px] md:right-[-45px] xl:right-0">
            <img
              className="w-full h-full object-contain"
              src={phone3}
              alt="phone3"
            />
            <PhoneBgGradient />
          </div>
        </div>
      </div>
      <div
        className="w-full flex flex-col gap-[30px] pt-[60px] pb-[50px] justify-items-center"
        style={{
          background:
            "radial-gradient(29.057439845448346% 100% at 49.99999653608324% -6.661338147750939e-14%,#131315 0%,rgba(0,0,0,1) 100%)",
        }}
      >
        <div
          className="absolute top-0 left-0 h-1"
          style={{
            background:
              "radial-gradient(40% 50% at 50% 50%,#28282c 0%,rgb(0,0,0) 100%)",
          }}
        />
        <p className="text-[18px] text-center">
          Trusted by 1000+ businesses across the world
        </p>
        <div className="flex gap-[14px] overflow-x-hidden">
          <Slider dir="left" time={10}>
            {COMPANIES.map((company: any, index: number) => (
              <img key={index} src={company} alt={`company-${index}`} />
            ))}
            {COMPANIES.map((company: any, index: number) => (
              <img key={index} src={company} alt={`company-${index}`} />
            ))}
            {COMPANIES.map((company: any, index: number) => (
              <img key={index} src={company} alt={`company-${index}`} />
            ))}
            {COMPANIES.map((company: any, index: number) => (
              <img key={index} src={company} alt={`company-${index}`} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Header;
