import { feature } from "../../assets/image";
import FeatureGrid from "../../components/Grid/Feature/FeatureGrid";

const Feature = () => {
  return (
    <div
      className="pt-[80px] flex flex-col gap-[80px] relative w-full"
      style={{
        background:
          "radial-gradient(27.274516120515756% 35.90163801120711% at 50% -2.7755575615628914e-14%,#131315 0%,rgba(0,0,0,1) 100%)",
      }}
    >
      <div
        className="w-full h-[1px] absolute top-0 left-0 right-0 overflow-visable z-1"
        style={{
          background:
            "radial-gradient(40% 50% at 50% 50%,#28282c 0%,rgb(0,0,0) 100%)",
        }}
      />
      <div className="flex flex-col gap-[14px] items-center">
        <div className="flex w-max bg-[#131315] border border-solid border-[#1d1d20] gap-[3px] px-[12px] py-[10px] rounded-full items-center">
          <img className="w-[20px] h-[20px]" src={feature} alt="star" />
          <p className="text-[16px] text-white">Features</p>
        </div>
        <div className="flex flex-col gap-[8px] w-full">
          <div className="flex flex-col">
            <h1 className="text-[38px] md:text-[58px] font-bold text-center">
              Supported Blockchains and Currencies
            </h1>
            <p className="xl:px-[120px] text-[20px] text-center text-[#797b85]">
              Comprehensive Support for All Your Digital Assets
            </p>
          </div>
          <p className="xl:px-[320px] text-[18px] text-center text-[#797b85]">
            Our platform supports a wide range of blockchains, cryptocurrencies,
            and NFTs across various protocols. Easily manage your digital assets
            and collectibles, all in one secure and versatile app.
          </p>
        </div>
      </div>
      <FeatureGrid />
    </div>
  );
};

export default Feature;
