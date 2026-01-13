import { Card, Checkbox, Typography, message } from "antd";
import styles from "../CheckoutPageDesktop.module.scss";
import ScanInput from "@/components/ScanInput/ScanInput";
import { useCheckoutStore } from "@/utils/store/checkoutStore";

const { Text } = Typography;

const MOCK_EMPLOYEES: Record<string, any> = {
    8936017363505: {
        id: "NV001",
        name: "Nguyễn Văn A",
        position: "Công nhân",
    },
};

const CheckoutEmployeeStep = () => {
    const { employees, addEmployee } = useCheckoutStore();

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
            <ScanInput
                placeholder="Quét barcode nhân viên..."
                onScan={handleScanEmployee}
            />

            <div className={styles.section}>
                <div className={styles.titleCommon}>THÔNG TIN NHÂN VIÊN</div>

                <div className={styles.listCommon}>
                    {employees.map((e) => (
                        <Checkbox key={e.id} checked>
                            <Card className={styles.machineCard}>
                                <div>
                                    <Text strong>{e.name}</Text>
                                    <br />
                                    <Text type="secondary">{e.position}</Text>
                                </div>
                            </Card>
                        </Checkbox>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CheckoutEmployeeStep;

