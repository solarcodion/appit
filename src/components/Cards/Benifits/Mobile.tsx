import {
  key,
  lock,
  phone11,
  phoneBottomGradient,
  security,
} from "../../../assets/image";
import Card from "./Card";

const Mobile = () => {
  return (
    <div className="w-full flex flex-col xl:hidden gap-[20px]">
      <div className="w-full h-[267px] relative overflow-y-hidden flex justify-center">
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
      <div className="hidden md:flex md:flex-col gap-[20px]">
        <div className="flex flex-col flex-1 gap-[20px]">
          <Card
            icon={security}
            title="Authentic Connections"
            sub="Protect your assets with multisig protection"
            desc="Build genuine relationships with like-minded individuals."
            isShow={true}
          />
        </div>
        <div className="flex flex-col flex-1 gap-[20px]">
          <Card
            icon={lock}
            title="Collaborative Management"
            sub="Manage crypto with others, securely"
            desc="Multisig enables shared management of crypto assets, with built-in security."
            isShow={true}
          />
        </div>
        <div className="flex flex-col flex-1 gap-[20px]">
          <Card
            icon={key}
            title="Flexibility"
            sub="Customize your multisig settings"
            desc="Choose the number of signatures required and assign roles for tailored security"
            isShow={true}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] md:hidden">
        <Card
          icon={security}
          title="Authentic Connections"
          sub="Protect your assets with multisig protection"
          desc="Build genuine relationships with like-minded individuals."
          isShow={true}
        />
        <Card
          icon={lock}
          title="Collaborative Management"
          sub="Manage crypto with others, securely"
          desc="Multisig enables shared management of crypto assets, with built-in security."
          isShow={true}
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

export default Mobile;
