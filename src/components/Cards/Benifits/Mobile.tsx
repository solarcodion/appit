import {
  connection,
  global,
  phone2,
  phone5,
  phoneBottomGradient,
  star,
  support,
} from "../../../assets/image";
import Card from "./Card";

const Mobile = () => {
  return (
    <div className="w-full flex flex-col xl:hidden gap-[20px]">
      <div className="w-full h-[498px] relative overflow-y-hidden flex justify-center">
        <img
          className="absolute bottom-0 w-full object-contain"
          src={phoneBottomGradient}
          alt="phone gradient"
        />
        <img
          className="w-[309px] absolute top-0 z-2"
          src={phone2}
          alt="phone4"
        />
        <img
          className="w-[281px] absolute top-[10px] rounded-[28px] z-2"
          src={phone5}
          alt="phone4"
        />
      </div>
      <div className="hidden md:flex gap-[20px]">
        <div className="flex flex-col flex-1 gap-[20px]">
          <Card
            icon={connection}
            title="Authentic Connections"
            desc="Build genuine relationships with like-minded individuals."
          />
          <Card
            icon={global}
            title="Global Reach"
            desc="Connect with people across 50+ countries effortlessly."
          />
        </div>
        <div className="flex flex-col flex-1 gap-[20px]">
          <Card
            icon={star}
            title="Personalized Experience"
            desc="Tailored content and recommendations just for you."
          />
          <Card
            icon={support}
            title="Community Support"
            desc="Join thriving communities aroundyour interests."
          />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] md:hidden">
        <Card
          icon={connection}
          title="Authentic Connections"
          desc="Build genuine relationships with like-minded individuals."
        />
        <Card
          icon={global}
          title="Global Reach"
          desc="Connect with people across 50+ countries effortlessly."
        />
        <Card
          icon={star}
          title="Personalized Experience"
          desc="Tailored content and recommendations just for you."
        />
        <Card
          icon={support}
          title="Community Support"
          desc="Join thriving communities aroundyour interests."
        />
      </div>
    </div>
  );
};

export default Mobile;
