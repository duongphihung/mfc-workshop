import { Card, Typography, message } from "antd";
import styles from "../CheckinPageDesktop.module.scss";
import ScanInput from "@/components/ScanInput/ScanInput";
import { useCheckinStore } from "@/utils/store/checkinStore";

const { Text } = Typography;

const MOCK_EMPLOYEES: Record<string, any> = {
    "123": {
        id: "NV001",
        name: "Thanh Nhàn",
        position: "Công nhân",
    },
    "456": {
        id: "NV001",
        name: "Dương Văn Bi",
        position: "Công nhân",
    },
};

const EmployeeStep = () => {
    const { employees, addEmployee } = useCheckinStore();

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
                <div className={styles.titleHeader}>
                    <div className={styles.titleCommon}>THÔNG TIN NHÂN VIÊN</div>
                </div>
                <div className={styles.listCommon}>
                    <div className={styles.listContent}>
                        {employees.map((m) => (
                            <Card key={m.id} className={styles.machineCard}>
                                <div>
                                    <Text strong>{m.name}</Text>
                                    <br />
                                    <Text type="secondary">{m.position}</Text>
                                </div>
                            </Card>
                        ))}
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default EmployeeStep;
