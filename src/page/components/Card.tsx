import { UserOutlined } from "@ant-design/icons";

// 卡片組件測試
interface CardContainerProps {
  title: string;
  summay: string;
  productList: any[];
}

// 等級映射
const convertLevel = function (level: string) {
  switch (level) {
    case "JUNIOR":
      return "初級";
    case "MIDDLE":
      return "中級";
    case "SENIOR":
      return "高級";
    default:
      return "未知";
  }
};

// 課程卡片組件
export function Card({ card }: any) {
  return (
    <div className="cursor-pointer w-280px rounded-xl shadow-[5px_5px_10px_0_#d5d5d5]">
      <div className="relative">
        <img
          className="h-190px w-full rounded-lt-xl rounded-rt-xl"
          src={card.coverImg}
        />
      </div>

      <div className="text-14px p-10px">
        <div className="h-32px">
          <span className="w-260px text-ellipsis of-hidden break-all line-clamp-2">
            {card.title}
          </span>
        </div>

        <div className="flex items-center my-10px">
          <span className="text-#7f7f7f mr">
            級别：{convertLevel(card.courseLevel)}
          </span>
          <span className="flex items-center">
            <img
              className="mr-4px w-14px h-14px"
              src="https://front.cdn.xdclass.net/images/fire.webp"
            />
            <img
              className="mr-4px w-14px h-14px"
              src="https://front.cdn.xdclass.net/images/fire.webp"
            />
            <img
              className="mr-4px w-14px h-14px"
              src="https://front.cdn.xdclass.net/images/fire.webp"
            />
            <img
              className="mr-4px w-14px h-14px"
              src="https://front.cdn.xdclass.net/images/fire.webp"
            />
            <img
              className="mr-4px w-14px h-14px"
              src="https://front.cdn.xdclass.net/images/fire.webp"
            />
          </span>
        </div>

        <div className="flex items-center justify-between mt-5px">
          <span className="peoples text-16px c-#7f7f7f">
            <UserOutlined />
            {card.uv}
          </span>
          <div className="flex items-center justify-center">
            <div className="c-#aaa">
              ¥<span className="mr-5px line-through">{card.oldAmount}</span>
            </div>
            <div className="c-#e51b11">
              ¥<span className="mt--5px text-16px">{card.amount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 課程列表項
export function CardContainer(props: CardContainerProps) {
  return (
    <div>
      {/* 標題+描述 */}
      <div className={`flex items-center`}>
        <img
          className="w-29px h-29px"
          src="https://front.cdn.xdclass.net/images/icon_hot.webp"
        />
        <span className="text-16px ml-1">{props.title}</span>

        <div className="ml-48px flex items-center justify-center text-14px  mr-40px pt-3px">
          {props.summay}
        </div>
      </div>

      {/* 課程產品列表 */}
      <div className="flex items-center">
        <div className="mt-12px flex flex-wrap gap-24px">
          {props.productList.map((item, index) => (
            <Card key={index} card={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
