import { check_in, check_out, com_import } from "@/assets/images";
import styles from './HomeDesktop.module.scss'
import { useNavigate } from "react-router-dom";
type MenuItem = {
    key: string;
    label: string;
    icon: string;
    link?: string;
};

const menuItems: MenuItem[] = [
    {
        key: "checkin",
        label: "Check-in",
        icon: check_in,
        link: "/check_in",
    },
    {
        key: "checkout",
        label: "Check-out",
        icon: check_out,
        link: "/check_out",
    },
    {
        key: "receive",
        label: "Nhận vật liệu",
        icon: com_import,
        link: "/receive_material",
    },
];

const HomeDesktop = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.wrapper}>
            <div className={styles.menuGrid}>
                {menuItems.map((item) => (
                    <div
                        key={item.key}
                        className={styles.menuItem}
                        onClick={() => navigate(item.link)}
                    >
                        <div className={styles.iconBox}>
                            <img src={item.icon} alt={item.label} />
                        </div>
                        <span className={styles.label}>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeDesktop
