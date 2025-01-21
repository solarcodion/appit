import { ANALYSIS } from "../../constants/Array";
import { ANALYZE_DATA } from "../../types";
import Item from "./Item";

const Analysis = () => {
  return (
    <>
      {ANALYSIS.map((item: ANALYZE_DATA, index: number) => (
        <div key={index} className="flex gap-[20px] md:gap-[32px]">
          {index !== 0 && (
            <div className="border-b md:border-b-0 md:border-r border-solid border-[#1d1d20]" />
          )}
          <Item item={item} />
        </div>
      ))}
    </>
  );
};

export default Analysis;
