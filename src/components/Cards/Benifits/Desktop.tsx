import {
  key,
  lock,
  phone11,
  phoneBottomGradient,
  security,
} from "../../../assets/image";
import Card from "./Card";

const Desktop = () => {
  return (
    <div className="hidden xl:flex h-[630px] gap-[20px]">
      <div className="flex flex-1 flex-col gap-[20px] h-full">
        <Card
          icon={security}
          title="Enhanced Security"
          sub="Protect your assets with multisig protection"
          desc="Mitigate the risk of unauthorized transactions and ensure secure storage."
        />
        <Card
          icon={security}
          title="Enhanced Security"
          sub="Protect your assets with multisig protection"
          desc="Mitigate the risk of unauthorized transactions and ensure secure storage."
          isShow={true}
        />
      </div>
      <div className="flex flex-1 flex-col gap-[20px] h-full">
        <div className="flex flex-1 flex-col relative items-center rounded-[14px] overflow-y-hidden">
          <img
            className="absolute bottom-0 w-full object-contain"
            src={phoneBottomGradient}
            alt="phone gradient"
          />
          <img
            className="w-[309px] absolute top-0 z-2"
            src={phone11}
            alt="phone4"
          />
        </div>
        <Card
          icon={lock}
          title="Collaborative Management"
          sub="Manage crypto with others, securely"
          desc="Multisig enables shared management of crypto assets, with built-in security."
          isShow={true}
        />
      </div>
      <div className="flex flex-1 flex-col gap-[20px] h-full">
        <Card
          icon={key}
          title="Flexibility"
          sub="Customize your multisig settings"
          desc="Choose the number of signatures required and assign roles for tailored security"
        />
        <Card
          icon={key}
          title="Flexibility"
          sub="Customize your multisig settings"
          desc="Choose the number of signatures required and assign roles for tailored security"
          isShow={true}
        />
      </div>
    </div>
  );
};

export default Desktop;
