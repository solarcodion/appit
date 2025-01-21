import { PRICE_DATA } from "../../../types";
import Card from "./Card";

type PriceProps = {
  data: PRICE_DATA[];
  monthly: boolean;
};

const Prices: React.FC<PriceProps> = ({ data, monthly }) => {
  return (
    <div className="flex gap-[20px] w-full">
      {data.map((item: PRICE_DATA, index: number) => (
        <Card key={index} item={item} monthly={monthly} />
      ))}
    </div>
  );
};

export default Prices;
