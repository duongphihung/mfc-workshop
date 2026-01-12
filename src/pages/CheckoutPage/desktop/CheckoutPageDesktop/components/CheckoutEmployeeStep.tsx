import { Card, Checkbox, Image, Typography, message } from "antd";
import { useState } from "react";
import styles from "../CheckoutPageDesktop.module.scss";
import ScanInput from "@/components/ScanInput/ScanInput";

const { Text } = Typography;

const MOCK_EMPLOYEES: Record<string, any> = {
    NV001: {
        id: "NV001",
        name: "Nguyễn Văn A",
        position: "Công nhân",
    },
};

const CheckoutEmployeeStep = () => {
    const [employees, setEmployees] = useState<any[]>([]);

    const handleScanEmployee = (barcode: string) => {
        const employee = MOCK_EMPLOYEES[barcode];

        if (!employee) {
            message.error("Không tìm thấy nhân viên");
            return;
        }

        const isExist = employees.some((e) => e.id === barcode);
        if (isExist) {
            message.warning("Nhân viên đã được quét");
            return;
        }

        setEmployees((prev) => [...prev, employee]);
        message.success(`Đã thêm ${employee.name}`);
    };

    return (
        <div className={styles.stepContent}>
            <ScanInput
                placeholder="Quét barcode nhân viên..."
                onScan={handleScanEmployee}
            />

            <div className={styles.section}>
                <div className={styles.titleCommon}>THÔNG TIN NHÂN VIÊN</div>
                <div className={styles.listCommon}>
                    {employees.map((m) => (
                        <Checkbox>
                            <Card key={m.id} className={styles.machineCard}>
                                <Image src={m.image} width={120} preview={false} />
                                <div>
                                    <Text strong>{m.name}</Text>
                                    <br />
                                    <Text type="secondary">{m.department}</Text>
                                </div>
                            </Card>
                        </Checkbox>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CheckoutEmployeeStep
