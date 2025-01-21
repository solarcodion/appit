import { mask5, price } from "../../assets/image";
import { Slider } from "../../components/Animation";
import { REVIEWS } from "../../constants/Reviews";
import { REVIEW_DATA } from "../../types";

const Testimonials = () => {
  return (
    <div
      className="pt-[80px] flex flex-col gap-[60px] w-full relative"
      style={{
        background:
          "radial-gradient(27.274516120515756% 35.90163801120711% at 50% -2.7755575615628914e-14%,#131315 0%,rgba(0,0,0,1) 100%)",
      }}
    >
      <div
        className="h-[1px] absolute top-0 left-0 right-0"
        style={{
          background:
            "radial-gradient(40% 50% at 50% 50%,#28282c 0%,rgb(0,0,0) 100%)",
        }}
      />
      <div className="flex flex-col gap-[14px] w-full items-center">
        <div className="flex w-max bg-[#131315] border border-solid border-[#1d1d20] gap-[3px] px-[12px] py-[10px] rounded-full items-center">
          <img className="w-[20px] h-[20px]" src={price} alt="star" />
          <p className="text-[16px] text-white">Our Pricing</p>
        </div>
        <div className="flex flex-col gap-[20px] w-full items-center  max-w-[1200px]">
          <h1 className="text-[38px] md:text-[58px] font-bold text-center">
            Our Testimonials
          </h1>
          <p className="xl:px-[320px] text-[18px] text-center text-[#797b85]">
            See how Appit has transformed users social experiences through their
            own words.
          </p>
        </div>
      </div>
      <div className="w-full overflow-x-hidden">
        <Slider dir="left" pos="-200%" time={40}>
          <div className="w-max flex gap-[24px]">
            {REVIEWS.map((item: REVIEW_DATA, index: number) => (
              <div
                key={index}
                className="w-[387px] h-[295px] relative flex flex-col gap-[24px] p-[30px]"
              >
                <img
                  className="absolute top-0 left-0 right-0 z-[-1]"
                  src={mask5}
                  alt="mask5"
                />
                <p className="text-[18px] text-[#aeb0b6]">{item.comment}</p>
                <div className="border-t border-solid border-[#1d1d20] w-full pt-[20px] flex gap-[12px] items-center">
                  <img
                    className="w-[50px] h-[50px]"
                    src={item.person.avatar}
                    alt="avatar"
                  />
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[20px] font-semibold">
                      {item.person.name}
                    </p>
                    <p className="text-[16px] text-[#62646b]">
                      {item.person.job}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {REVIEWS.map((item: REVIEW_DATA, index: number) => (
              <div
                key={index}
                className="w-[387px] h-[295px] relative flex flex-col gap-[24px] p-[30px]"
              >
                <img
                  className="absolute top-0 left-0 right-0 z-[-1]"
                  src={mask5}
                  alt="mask5"
                />
                <p className="text-[18px] text-[#aeb0b6]">{item.comment}</p>
                <div className="border-t border-solid border-[#1d1d20] w-full pt-[20px] flex gap-[12px] items-center">
                  <img
                    className="w-[50px] h-[50px]"
                    src={item.person.avatar}
                    alt="avatar"
                  />
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[20px] font-semibold">
                      {item.person.name}
                    </p>
                    <p className="text-[16px] text-[#62646b]">
                      {item.person.job}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
