import { ANALYSIS } from "../../constants/Array";
import { ANALYZE_DATA } from "../../types";
import Item from "./Item";

const Analysis = () => {
  return (
    <>
      {ANALYSIS.map((item: ANALYZE_DATA, index: number) => (
        <>
          {index !== 0 && (
            <div className="border-b md:border-b-0 md:border-r border-solid border-[#1d1d20]" />
          )}
          <Item key={index} item={item} />
        </>
      ))}
    </>
  );
};

export default Analysis;
