import { CardContainer } from "./Card";
import { CardType } from "../../types/requestType";

export default function Main() {
  const { data } = useApi<CardType>("/card/v1/list");
  return (
    <>
      {data && (
        <div className="flex flex-col gap-8">
          {data.data.map((item, index) => (
            <CardContainer
              key={index}
              title={item.name}
              summay={item.summay}
              productList={item.productList.slice(0, 4)}
            />
          ))}
        </div>
      )}
    </>
  );
}
