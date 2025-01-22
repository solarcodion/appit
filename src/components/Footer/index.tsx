import {
  android,
  chrome,
  email,
  favIcon,
  firefox,
  ios,
  linkedin,
  lion,
  mac,
  telegram,
  whatsapp,
} from "../../assets/image";
import { MENU_LINKS } from "../../constants/Links";
import { MENU_LINK } from "../../types";

const Footer = () => {
  return (
    <div
      className="px-[60px] pt-[80px] w-full relative flex flex-col gap-[60px]"
      style={{
        background:
          "radial-gradient(27.2745% 35.9016% at 50% -2.77556e-14%, rgb(19, 19, 21) 0%, rgb(0, 0, 0) 100%)",
      }}
    >
      <div
        className="absolute h-[1px] top-0 left-0 right-0 w-full"
        style={{
          background:
            "radial-gradient(40% 50% at 50% 50%, rgb(40, 40, 44) 0%, rgb(0, 0, 0) 100%)",
        }}
      />
      <div className="py-20 border-t border-b border-solid border-[#1d1d20] flex flex-col justify-center w-full gap-[24px]">
        <p className="text-[48px] font-bold text-center">Let's Talk</p>
        <div className="flex gap-[10px] justify-center">
          <div className="p-[10px] bg-[#181820] rounded-[12px]">
            <img className="w-[24px] h-[24px]" src={whatsapp} alt="whatsapp" />
          </div>
          <div className="p-[10px] bg-[#181820] rounded-[12px]">
            <img className="w-[24px] h-[24px]" src={telegram} alt="telegram" />
          </div>
          <div className="p-[10px] bg-[#181820] rounded-[12px]">
            <img className="w-[24px] h-[24px]" src={linkedin} alt="linkedin" />
          </div>
          <div className="p-[10px] bg-[#181820] rounded-[12px]">
            <img className="w-[24px] h-[24px]" src={email} alt="email" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-[30px] items-center">
        <div className="w-full max-w-[640px] flex flex-col gap-[24px] items-center">
          <img className="w-[150px] h-[50px]" src={favIcon} alt="favicon" />
          <p className="text-[20px] text-center">
            Copyright 2024 Trust Vault Holdings. All rights reserved.
          </p>
          <p className="text-[16px] text-center text-[#94969d]">
            The information provided on this website is for informational
            purposes only and should not be considered as financial or
            investment advice. Cryptocurrency transactions carry inherent risks,
            including the potential loss of funds. While we employ advanced
            security measures, such as our SafeSend feature, to protect your
            assets, we cannot guarantee the absolute security of your funds.
            Always ensure that you are using the correct wallet addresses and
            follow best practices for securing your private keys. By using our
            services, you agree to our terms and conditions and acknowledge that
            you are responsible for any transactions made through our platform.
          </p>
        </div>
        <div className="px-[20px] py-[16px] flex gap-[6px] items-center bg-[#18181a] rounded-[12px] border border-solid border-[#28282b]">
          <img
            className="w-[24px] h-[24px] text-[17px]"
            src={email}
            alt="email"
          />
          <p>info@trustvault.app</p>
        </div>
      </div>
      <div className="hidden md:flex gap-[20px] justify-center w-full">
        {MENU_LINKS.map((item: MENU_LINK, index: number) => (
          <div key={index} className="flex gap-[20px] items-center">
            <p className="text-[18px] text-[#94969d]">{item.title}</p>
            <div className="w-[4px] h-[4px] bg-[#28282c] rounded-full" />
          </div>
        ))}
        <p className="text-[18px] text-[#94969d]">Waitlist</p>
      </div>
      <div className="flex flex-col md:hidden gap-[20px] justify-center w-full">
        <div className="flex gap-[20px] justify-center w-full">
          {MENU_LINKS.map((item: MENU_LINK, index: number) => (
            <div
              key={index}
              className={`${
                index < 3 ? "flex" : "hidden"
              } gap-[20px] items-center`}
            >
              {index % 3 !== 0 && (
                <div className="w-[4px] h-[4px] bg-[#28282c] rounded-full" />
              )}
              <p className="text-[18px] text-[#94969d]">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-[20px] justify-center w-full items-center">
          {MENU_LINKS.map((item: MENU_LINK, index: number) => (
            <div
              key={index}
              className={`${
                index > 2 ? "flex" : "hidden"
              } gap-[20px] items-center`}
            >
              {index % 3 !== 0 && (
                <div className="w-[4px] h-[4px] bg-[#28282c] rounded-full" />
              )}
              <p className="text-[18px] text-[#94969d]">{item.title}</p>
            </div>
          ))}
          <div className="w-[4px] h-[4px] bg-[#28282c] rounded-full" />
          <p className="text-[18px] text-[#94969d]">Waitlist</p>
        </div>
      </div>
      <div className="py-20 border-t border-solid border-[#1d1d20] flex flex-col xl:flex-row justify-center w-full items-center gap-[50px]">
        <div>
          <p className="text-[48px] font-bold text-center">Platform Support</p>
          <p className="text-[18px] text-center text-[#94969d]">
            Our wallet is available on iOS, Android, and Desktop, and supports
            all major coins and tokens.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-[24px] md:gap-[10px] h-max">
          <div className="p-[10px] bg-[#181820] rounded-[12px]">
            <img className="w-[48px] h-[48px]" src={ios} alt="ios" />
          </div>
          <div className="p-[10px] bg-[#181820] rounded-[12px]">
            <img className="w-[48px] h-[48px]" src={android} alt="android" />
          </div>
          <div className="p-[10px] bg-[#181820] rounded-[12px]">
            <img className="w-[48px] h-[48px]" src={mac} alt="mac" />
          </div>
          <div className="p-[10px] bg-[#181820] rounded-[12px]">
            <img className="w-[48px] h-[48px]" src={chrome} alt="chrome" />
          </div>
          <div className="p-[10px] bg-[#181820] rounded-[12px]">
            <img className="w-[48px] h-[48px]" src={lion} alt="lion" />
          </div>
          <div className="p-[10px] bg-[#181820] rounded-[12px]">
            <img className="w-[48px] h-[48px]" src={firefox} alt="firefox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
