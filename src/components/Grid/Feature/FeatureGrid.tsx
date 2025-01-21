import { FEATURES } from "../../../constants/Array";
import { FEATURE_DATA } from "../../../types";
import GridItem from "./GridItem";

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] w-full">
      {FEATURES.map((item: FEATURE_DATA, index) => (
        <GridItem key={index} item={item} />
      ))}
    </div>
  );
};

export default FeatureGrid;
