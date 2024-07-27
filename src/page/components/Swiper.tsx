import { Carousel } from "antd";
import { useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface SwiperItemProps {
  imgSrc: string;
}

// 圖片組件
function SwiperItem(props: SwiperItemProps) {
  return (
    <a>
      <img className="rounded" src={props.imgSrc} />
    </a>
  );
}

// 輪流撥放圖片
export default function Swiper() {
  const carouselRef = useRef<any>(null);

  // 上一張
  const prev = () => {
    carouselRef.current.prev();
  };

  // 下一張
  const next = () => {
    carouselRef.current.next();
  };

  return (
    <div className="relative">
      {/* 左邊的按紐*/}
      <LeftOutlined
        className="absolute z-2 top-50% left-5px cursor-pointer"
        onClick={prev}
      />
      <Carousel className="h-400px w-840px" ref={carouselRef} autoplay>
        <SwiperItem imgSrc="https://file.xdclass.net/video/2023/banner/618/HD.png" />
        <SwiperItem imgSrc="https://file.xdclass.net/video/2023/banner/618/JD.png" />
        <SwiperItem imgSrc="https://file.xdclass.net/video/2022/22-11.11/aly.jpeg" />
      </Carousel>
      {/* 右邊的按紐 */}
      <RightOutlined
        className="absolute z-2 top-50% right-5px cursor-pointer"
        onClick={next}
      />
    </div>
  );
}
