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

const Desktop = () => {
  return (
    <div className="hidden xl:flex h-[510px] gap-[20px]">
      <div className="flex flex-1 flex-col gap-[20px] h-full">
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
      <div className="flex flex-1 flex-col relative items-center h-full rounded-[14px] overflow-y-hidden">
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
      <div className="flex flex-1 flex-col gap-[20px] h-full">
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

export default Desktop;
