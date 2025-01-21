import { PRICE_DATA } from "../../../types";
import Card from "./Card";

type PriceProps = {
  data: PRICE_DATA[];
  monthly: boolean;
};

const Prices: React.FC<PriceProps> = ({ data, monthly }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-[20px] w-full items-center">
      {data.map((item: PRICE_DATA, index: number) => (
        <Card key={index} item={item} monthly={monthly} />
      ))}
    </div>
  );
};

export default Prices;
