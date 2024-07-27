import { useApi } from "../../hooks/api";
import { PageItemType } from "../../types/requestType";
interface EmploymentNavItemProps {
  item: {
    title: string;
    imgUrl: string;
    summary: string;
  };
}

// 每個導航類組件
function EmploymentNavItem(props: EmploymentNavItemProps) {
  return (
    <a>
      <div className="flex items-center justify-center cursor-pointer children:select-none">
        <img src={props.item.imgUrl} className="w-50px h-50px mr-7px" />
        <div>
          <h3 className="h-20px color-#404040 text-14px font-400">
            {props.item.title}
          </h3>
          <p className="text-12px color-#555555">{props.item.summary}</p>
        </div>
      </div>
    </a>
  );
}

// 高單價導航組件
export default function EmploymentNav() {
  // post請求
  // const formData = new FormData();
  // formData.append("username", "abc123");
  // formData.append("avatar", "11");

  // const { data } = useApi("/page_item/v1/list?type=HOME_CATEGORY_BOTTOM", {
  //   method: "post",
  //   body: formData,
  // });

  const { data } = useApi<PageItemType>(
    "/page_item/v1/list?type=HOME_CATEGORY_BOTTOM"
  );

  return (
    <div className="shadow-[0_2px_5px_0_#e5e5e5] h-70px grid grid-cols-5 my-20px rounded items-center">
      {data &&
        data.data.map((item: any) => (
          <EmploymentNavItem item={item} key={item.id} />
        ))}
    </div>
  );
}
