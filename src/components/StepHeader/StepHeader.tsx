import { Typography } from "antd";
import { QrcodeOutlined } from "@ant-design/icons";
import styles from "./StepHeader.module.scss";

const { Title, Text } = Typography;

const StepHeader = ({ title }: { title: string }) => {
    return (
        <div className={styles.header}>
            <div className={styles.icon}>
                <QrcodeOutlined />
            </div>
            <div>
                <Title level={4} className={styles.title}>
                    {title}
                </Title>
                <Text type="secondary">
                    MFC Workshop - Quản lý Check-in / Check-out sản xuất
                </Text>
            </div>
        </div>
    );
};

export default StepHeader;
