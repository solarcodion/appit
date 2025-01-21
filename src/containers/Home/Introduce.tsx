import { introduce, round } from "../../assets/image";
import Analysis from "../../components/Analysis";

const Introduce = () => {
  return (
    <div className="flex flex-col gap-[80px] xl:max-w-[1040px] items-center">
      <div className="flex flex-col gap-[8px] items-center">
        <div className="w-[108px] h-[108px] relative">
          <img
            className="w-full h-full absolute insert-0 top-0 left-0"
            src={round}
            alt="round"
          />
          <img
            className="w-[60px] h-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={introduce}
            alt="introduce"
          />
        </div>
        <div>
          <h1 className="text-[24px] md:text-5xl text-center font-bold">
            Empowering authentic connections for a vibrant social experience.
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[32px] max-w-[257px] md:max-w-full">
        <Analysis />
      </div>
    </div>
  );
};

export default Introduce;
