import { Avatar, Popover, Button, Popconfirm } from "antd";
import styles from "./NavigationBar.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { power_plant } from "@/assets/images";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/utils/context/AuthContext";
import { MdLogout } from "react-icons/md";
import { useLogOut } from "@/utils/hooks/tanstack-query/auth-query";

const NavigationBar = () => {
    const auth = useAuth();
    const { mutate: logout } = useLogOut();
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    const popoverContent = (
        <div className={styles.popoverContent}>
            <Popconfirm
                title="Xác nhận đăng xuất ?"
                description="Bạn có muốn đăng xuất khỏi ứng dụng"
                onConfirm={() => {
                    logout();
                }}
                icon={
                    <MdLogout
                        style={{
                            color: 'red',
                        }}
                    />
                }
            >
                <Button>
                    <MdLogout size={16} />
                    <span>Đăng xuất</span>
                </Button>
            </Popconfirm>
        </div>
    );

    return (
        <header className={styles.header}>
            {/* Left */}
            <div className={styles.left}>
                <div className={styles.logoBox} onClick={() => navigate("/home")}>
                    <img src={power_plant} alt="logo" className={styles.logo} />
                    <div className={styles.title}>MFC Workshop</div>
                </div>
            </div>

            {/* Right */}
            <div className={styles.right}>
                <Popover
                    content={popoverContent}
                    trigger="click"
                    placement="bottomRight"
                >
                    <div className={styles.userBox}>
                        <Avatar
                            size={24}
                            icon={<FaUserCircle size={20} />}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>
                            {auth?.first_name}
                        </span>
                    </div>
                </Popover>
            </div>
        </header>
    );
};

export default NavigationBar;
