import Header from "./components/Header";
import Classify from "./components/Classify";
import Swiper from "./components/Swiper";
import UserProfileOrUnlogin from "./components/UserOrUnlogin";
import EmploymentNav from "./components/EmploymentNav";
import CourseList from "./components/CourseList";
import { Bottom, BottomAdv } from "./components/Bottom";
import { Divider } from "antd";

export default function Index() {
  return (
    <>
      <div className="w-full of-hidden">
        {/* 海報 */}
        <img
          src="https://file.xdclass.net/video/2023/banner/618/QD.gif"
          className="w-100% h-full"
        />
        {/* 頭部導航 */}
        <div className="shadow mb-10px">
          <div className="w-1200px mx-auto">
            <Header />
          </div>
        </div>
        {/* 主要内容部分 */}
        <div className="w-1200px mx-auto my">
          <div className="flex items-center justify-between">
            {/* 分類導航 */}
            <Classify />
            {/* 輪播圖 */}
            <Swiper />
            {/* 新人福利 */}
            <UserProfileOrUnlogin />
          </div>
          {/* 高單價導航 */}
          <EmploymentNav />
          {/* 課程分類列表 */}
          <CourseList />
        </div>
        {/* 底部的内容導航 */}
        <div className="w-full">
          <div className="w-1200px mx-auto">
            <Bottom />
          </div>
          <Divider />
          <span className="flex justify-center items-center text-12px pb-10 c-#7F7F7F">
            Copyright © 2018 Company,lnc. 粤ICP备15092968号 Terms
          </span>
        </div>
      </div>
      {/* 提醒登入浮層組件 */}
      <BottomAdv />
    </>
  );
}
