import { create } from "zustand";
import { message } from "antd";

// 接口定義
interface UserState {
  isLogin: boolean; // 是否login
  currentUser: string; // 當前login用戶名稱
  // 註冊的用戶信息
  users: {
    account: string;
    password: string;
  }[];
  // login
  login: (account: string, password: string) => void;
  // 退出login
  logout: () => void;
  // 註冊
  register: (account: string, password: string) => void;
}

export const useUser = create<UserState>((set) => ({
  currentUser: localStorage.getItem("xdclass_user_current_user") || "",
  isLogin: localStorage.getItem("xdclass_user_is_login") ? true : false,
  // 用戶信息狀態
  users: localStorage.getItem("xdclass_react_users")
    ? JSON.parse(localStorage.getItem("xdclass_react_users") || "[]")
    : [],
  // login
  login: (account, password) =>
    set((state) => {
      let foundUser = state.users.find(
        (item) => item.account === account && item.password === password
      );
      if (foundUser) {
        localStorage.setItem("xdclass_user_is_login", "true");
        localStorage.setItem("xdclass_user_current_user", foundUser.account);
        message.success("login");
        return {
          isLogin: true,
          currentUser: foundUser.account,
        };
      } else {
        message.warning("UserName or Password Error !");
      }
      return {};
    }),
  // 退出login
  logout: () =>
    set(() => {
      localStorage.removeItem("xdclass_user_is_login");
      localStorage.removeItem("xdclass_user_current_user");
      return {
        isLogin: false,
        currentUser: "",
      };
    }),
  // 註冊更新用戶信息
  register: (account, password) =>
    set((state) => {
      // 複製原數據
      const users = [...state.users];
      users.push({
        account,
        password,
      });
      // 數據缓存
      localStorage.setItem("xdclass_react_users", JSON.stringify(users));
      localStorage.setItem("xdclass_user_is_login", "true");
      return {
        users,
      };
    }),
}));
