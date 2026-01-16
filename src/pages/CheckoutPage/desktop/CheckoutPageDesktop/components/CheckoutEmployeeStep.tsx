import { Button, Checkbox, Typography, message } from "antd";
import styles from "../CheckoutPageDesktop.module.scss";
import ScanInput from "@/components/ScanInput/ScanInput";
import { useCheckoutStore } from "@/utils/store/checkoutStore";
import { useState } from "react";

const { Text } = Typography;

const MOCK_EMPLOYEES: Record<string, any> = {
    "123": {
        id: "NV001",
        name: "Nguyễn Văn A",
        position: "Công nhân",
    },
    "456": {
        id: "NV002",
        name: "Dương Văn Bi",
        position: "Công nhân",
    },
};

const CheckoutEmployeeStep = () => {
    const { employees, addEmployee } = useCheckoutStore();
    const [openScan, setOpenScan] = useState(false);

    const handleScanEmployee = (barcode: string) => {
        const employee = MOCK_EMPLOYEES[barcode];

        if (!employee) {
            message.error("Không tìm thấy nhân viên");
            return;
        }

        const isSuccess = addEmployee(employee);

        if (!isSuccess) {
            message.warning("Nhân viên đã được quét");
            return;
        }

        message.success(`Đã thêm ${employee.name}`);
    };

    return (
        <div className={styles.stepContent}>
            {
                openScan && (
                    <ScanInput
                        placeholder="Quét barcode nhân viên..."
                        onScan={handleScanEmployee}
                    />
                )
            }
            <div className={styles.section}>
                <div className={styles.titleHeader}>
                    <div className={styles.titleCommon}>THÔNG TIN NHÂN VIÊN</div>
                    <div className={styles.titleAction}>
                        <Button
                            type="primary"
                            size="middle"
                            style={{
                                background: "#FE9029"
                            }}
                        >
                            Đã chọn: {employees.length}
                        </Button>
                        <Button
                            type="primary"
                            size="middle"
                            style={{
                                background: "#6870E3"
                            }}
                            onClick={() => setOpenScan((prev) => !prev)}
                        >
                            {openScan ? "Đóng" : "Thêm nhân viên"}
                        </Button>
                    </div>
                </div>
                <div className={styles.listCommon}>
                    <div className={styles.listContent}>
                        {employees.map((e) => (
                            <div className={styles.listItem}>
                                <Checkbox
                                    key={e.id} checked
                                    style={{ width: "100%" }}
                                >
                                    <div className={styles.machineCard}>
                                        <div>
                                            <Text strong>{e.name}</Text>
                                            <br />
                                            <Text type="secondary">{e.position}</Text>
                                        </div>
                                    </div>
                                </Checkbox>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutEmployeeStep;

