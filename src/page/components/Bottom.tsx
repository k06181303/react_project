// 底部導航
export function Bottom() {
  return (
    <div className="flex items-center justify-between mt-8">
      <img
        className="h-80px w-163px"
        src="https://front.cdn.xdclass.net/images/logo.webp"
      />
      <div className="flex items-center justify-center flex-col font-normal text-16px text-#4f555d">
        <div className="flex items-center justify-center w-full px-15 mb-10px gap-4">
          <a target="_blank">Website Map</a>
          <a target="_blank">
          Daily benefits</a>
          <a target="_blank" href="https://m.xdclass.net/apk/app_android.png">
            Android Download
          </a>
          <a target="_blank" href="https://m.xdclass.net/apk/app_apple.png">
            Ios Download
          </a>
        </div>
        <div className="items-center flex justify-center">
          友情連結：
          <a target="_blank" href="https://xiaodijy.tmall.com/">
            小滴天猫旗舰店&nbsp;&nbsp;
          </a>
          |&nbsp;&nbsp;
          <a target="_blank" href="https://open1024.com/">
            Open1024技術導航站&nbsp;&nbsp;
          </a>
          |&nbsp;&nbsp;
          <a
            target="_blank"
            href="https://www.aliyun.com/minisite/goods?taskPkg=amb618all&amp;pkgSid=356821&amp;recordId=3651796&amp;userCode=r5saexap"
          >
            阿里雲&nbsp;&nbsp;
          </a>
          |&nbsp;&nbsp;
          <a target="_blank" href="https://xdclass.ke.qq.com/">
            騰訊課堂
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <img
          className="w-80px h-80px"
          src="https://front.cdn.xdclass.net/images/xdclass_gzh.webp"
        />
        <div className="flex justify-center flex-col text-18px px font-light text-#4f555d">
          <p>Qrcode</p>
          <p>WeChat</p>
        </div>
      </div>
    </div>
  );
}

// 登入浮窗
export function BottomAdv() {
  const [visible, setVisible] = useState(true);
  const { isLogin } = useUser();
  const { switchLoginVisible } = useModal();

  return (
    <>
      {visible && !isLogin && (
        <div className="w-full sticky w-full h-75px bg-#333333e6 bottom-0 flex items-center justify-center z-100">
          <div className="w-1200px h-full flex items-center justify-between relative">
            <div className="absolute right-0 top-10px cursor-pointer">
              <img
                className="w-22px h-22px"
                src="https://front.cdn.xdclass.net/images/bottom_close_icon.webp"
                onClick={() => setVisible(!visible)}
              />
            </div>

            <img
              className="w-155px h-70px"
              src="https://front.cdn.xdclass.net/images/logo_white.webp"
            />

            <span className="c-#f59a23 font-500 text-26px leading-26px">
              IT路上的持續充電平台，讓學習變的so Easy !
            </span>

            <div
              className="flex items-center w-200px cursor-pointer"
              onClick={switchLoginVisible}
            >
              <span className="text-white font-600 mr-10px">Login</span>
              <img
                src="https://front.cdn.xdclass.net/images/wechat_icon.webp"
                className="w-35px h-35px mr-6"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
