import { ANALYZE_DATA } from "../../types";
import { Increasement } from "../Animation";

const Item = ({ item }: { item: ANALYZE_DATA }) => {
  return (
    <div className="flex flex-1 flex-col gap-[12px]">
      <div className="flex justify-center">
        <Increasement from={item.from} to={item.to} />
        <p className="text-[50px] font-bold text-center">{item.title}</p>
      </div>
      <p className="text-center text-[18px] text-[#797b7b]">{item.desc}</p>
    </div>
  );
};

export default Item;
