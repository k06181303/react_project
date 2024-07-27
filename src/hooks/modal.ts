import { create } from "zustand";
// 彈窗狀態接口定義
interface ModalState {
  regVisible: boolean;
  loginVisible: boolean;
  switchLoginVisible: () => void;
  switchRegVisible: () => void;
}

export const useModal = create<ModalState>((set) => ({
  //註冊彈窗狀態
  regVisible: false,
  // 登入彈窗狀態
  loginVisible: false,
  // 修改注册彈窗狀態
  switchRegVisible: () => set((state) => ({ regVisible: !state.regVisible })),
  // 修改登入彈窗狀態
  switchLoginVisible: () =>
    set((state) => ({ loginVisible: !state.loginVisible })),
}));
