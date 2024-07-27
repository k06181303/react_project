import { useUser } from "../../hooks/user";

// 登入樣式
function UserProfile() {
  const { currentUser, logout } = useUser();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      Welcome <span className="text-orange font-bold">{currentUser}</span>
      <button
        className="text-center text-white bg-#ff602a cursor-pointer rounded-71px w-130px h-24px text-12px p2 leading-10px"
        onClick={logout}
      >
        LogOut
      </button>
    </div>
  );
}

// 未登入樣式組件
function Unlogin() {
  const { switchLoginVisible } = useModal();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img
        className="cursor-pointer mb-1 mt--10 w-140px h-176px"
        src="https://front.cdn.xdclass.net/images/new.webp"
      />
      <button
        onClick={switchLoginVisible}
        className="text-center text-white bg-#ff602a cursor-pointer rounded-71px w-130px h-24px text-12px p2 leading-10px"
      >
        Sign in / Sign up
      </button>
    </div>
  );
}

// welcome組件
export default function UserProfileOrUnlogin() {
  const { isLogin } = useUser();
  return (
    <div className="w-180px h-400px rounded shadow-[0_0_10px_0_#d7d7d7]">
      {isLogin ? <UserProfile /> : <Unlogin />}
    </div>
  );
}
