import { Modal, Form, Input, Button, message } from "antd";

export function Register() {
  // 帳號
  const [account, setAccount] = useState("");
  // 密碼
  const [password, setPassword] = useState("");
  // confirm密碼
  const [rePassword, setRePassword] = useState("");
  // 全局公共個人狀態
  const { register, users } = useUser();
  // 全局公共註冊彈窗狀態
  const { regVisible, switchRegVisible, switchLoginVisible } = useModal();

  // 註冊提交按钮
  function handleFinish() {
    // 密碼驗證;
    if (password !== rePassword) {
      message.warning("Two Times The Password Is Not Correct");
      return;
    } else {
      // 帳號驗證
      if (users.some((user) => user.account === account)) {
        message.warning("The Account Is Already Exit");
      } else {
        // 註冊
        register(account, password);
        // 關閉註冊彈窗
        switchRegVisible();
        message.success("註冊成功");
      }
    }
  }

  return (
    <Modal
      width="400px"
      open={regVisible}
      footer={null}
      className="relative"
      onCancel={switchRegVisible}
    >
      <h1 className="text-center c-#404040 text-22px font-normal my-8">
        帳號註冊
      </h1>
      <div className="pb-44px flex items-center justify-center w-full">
        <Form
          name="register"
          style={{ width: "300px" }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleFinish}
        >
          {/* 帳號 */}
          <Form.Item name="account">
            <Input
              placeholder="Please Enter The UserName"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
          </Form.Item>
          {/* 密碼 */}
          <Form.Item name="password">
            <Input.Password
              placeholder="Please Enter The Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          {/* confirm密碼 */}
          <Form.Item name="re-password">
            <Input.Password
              placeholder="Please Enter The Password Again"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </Form.Item>
          {/* 註冊 */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="flex w-full items-center justify-center bg-#444b52 text-white rounded-full"
            >
              <span>Sign Up Right Now</span>
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* 跳转登录 */}
      <div className="absolute w-full h-44px bottom-0 left-0 bg-[rgba(77,85,93,0.1)] flex items-center justify-center">
        <span>Have Account ??</span>
        <span
          className="text-blue-400 cursor-pointer"
          onClick={() => {
            switchRegVisible();
            switchLoginVisible();
          }}
        >
          Sign in
        </span>
      </div>
    </Modal>
  );
}
