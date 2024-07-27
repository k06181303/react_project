import { DownOutlined } from "@ant-design/icons";
import { Input, Dropdown, message } from "antd";
import { Register } from "./Register";
import { Login } from "./Login";

// tab每一項的接口定義
interface HeaderItemProps {
  href: string;
  title?: string;
  children?: React.ReactNode;
}

// 高階組件（組件為参数，返回組件）
function HeaderItem(props: HeaderItemProps) {
  return (
    <a href={props.href} className="c-#4f555d hover:c-#F38E48">
      {props.children ?? props.title}
    </a>
  );
}

// 頭部導航組件
export default function Header() {
  const { switchRegVisible, switchLoginVisible } = useModal();
  const { logout, currentUser, isLogin } = useUser();
  // tab項的數據
  const list = [
    {
      title: "首頁",
      href: "#",
    },
    {
      title: "課程中心",
      href: "#",
    },
    {
      href: "#",
      children: (
        <div className="flex items-center justify-center">
          <img
            src="https://front.cdn.xdclass.net/images/vip_icon.webp"
            className="w-22px h20px"
          />
          <span>SVIP</span>
        </div>
      ),
    },
    {
      title: "工具",
      href: "#",
    },
    {
      title: "自學路線",
      href: "#",
      children: (
        <>
          <span>自學路線</span>
          <DownOutlined />
        </>
      ),
    },
    {
      title: "一對一輔導",
      href: "#",
      children: (
        <>
          <span>一對一輔導</span>
          <DownOutlined />
        </>
      ),
    },
    {
      href: "#",
      children: (
        <Input.Search placeholder="Please Search" className="w-220px" />
      ),
    },
    {
      title: "redeem code",
      href: "#",
    },
    {
      title: "Cloud Server",
      href: "#",
    },
  ];

  const items = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            message.success("LogOut");
            logout();
          }}
        >
          LogOut?
        </div>
      ),
    },
  ];
  return (
    <div className="flex items-center gap-2">
      {/* 官網的圖標 */}
      <img
        src="https://front.cdn.xdclass.net/images/logo.webp"
        className="w-138px h-64px"
      />
      {/* t頭部導航項 */}
      <div className="flex items-center justify-between flex-[1]">
        {list.map((item, index) => (
          <HeaderItem key={index} href={item.href} title={item.title}>
            {item?.children}
          </HeaderItem>
        ))}
      </div>
      {/* 註冊登入 */}
      {isLogin ? (
        <Dropdown menu={{ items }} placement="bottomLeft">
          <div>Welcome，{currentUser}</div>
        </Dropdown>
      ) : (
        <div className="flex items-center justify-center gap-4 children:cursor-pointer">
          <span onClick={switchLoginVisible}>Login</span>
          <span
            onClick={switchRegVisible}
            className="bg-#4d555d c-#fff h-30px leading-26px w-60px p-2px text-center"
          >
            Register
          </span>
        </div>
      )}
      <Login />
      <Register />
    </div>
  );
}
