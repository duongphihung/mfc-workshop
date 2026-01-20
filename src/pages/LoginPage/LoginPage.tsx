import { Button, Form, Input } from "antd";
import styles from "./LoginPage.module.scss";
import { power_plant } from "@/assets/images";
import { useLogin } from "@/utils/hooks/tanstack-query/auth-query";
import { Account } from "@/utils/models/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [form] = Form.useForm();
    // const navigate = useNavigate();
    const { mutate: handleLogin, isPending } = useLogin();
    const loginUser = (values: Account) => {
        if (isPending) return
        handleLogin({ body: values })
    }

    // const login = () => {
    //     navigate("/home");
    // };

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginBox}>
                <h2 className={styles.title}>MindFC Workshop</h2>

                <div className={styles.icon}>
                    <img src={power_plant} alt="factory" />
                </div>

                <Form
                    form={form}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={(values) => loginUser(values)}
                    layout="vertical"
                    className={styles.form}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, message: "Vui lòng nhập email" },
                            { type: "email", message: "Email không hợp lệ" },
                        ]}
                    >
                        <Input
                            placeholder="Nhập Email"
                            size="large"
                            className={styles.input}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, message: "Vui lòng nhập mật khẩu" },
                        ]}
                    >
                        <Input.Password
                            type="password"
                            size="large"
                            placeholder="Password"
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    form.submit();
                                }
                            }}
                            className={styles.input}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            size="large"
                            className={styles.loginBtn}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                {/* <Button
                    type="primary"
                    htmlType="submit"
                    block
                    size="large"
                    className={styles.loginBtn}
                    onClick={login}
                >
                    Login
                </Button> */}
            </div>
        </div>
    );
};

export default LoginPage;
