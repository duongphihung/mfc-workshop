import { Card, Typography, Image, message } from "antd";
import styles from "../CheckoutPageDesktop.module.scss";
import ScanInput from "@/components/ScanInput/ScanInput";
import { useCheckoutStore } from "@/utils/store/checkoutStore";

const { Text } = Typography;

const MOCK_MACHINES = {
    "8936017363505": {
        id: "8936017363505",
        name: "Máy Ép Nhựa A01",
        department: "Xưởng Nhựa",
        image: "https://via.placeholder.com/120x80",
    },
};

const CheckoutMachineStep = () => {
    const { machines, addMachine } = useCheckoutStore();

    const handleScanMachine = (barcode: string) => {
        const machine = MOCK_MACHINES[barcode];

        if (!machine) {
            message.error("Không tìm thấy máy");
            return;
        }

        const isSuccess = addMachine(machine);

        if (!isSuccess) {
            message.warning("Máy đã được quét");
            return;
        }

        message.success(`Đã thêm ${machine.name}`);
    };

    return (
        <div className={styles.stepContent}>
            <ScanInput
                placeholder="Quét barcode máy..."
                onScan={handleScanMachine}
            />

            <div className={styles.section}>
                <div className={styles.titleCommon}>THÔNG TIN MÁY</div>

                <div className={styles.listCommon}>
                    {machines.map((m) => (
                        <Card key={m.id} className={styles.machineCard}>
                            <Image src={m.image} width={120} preview={false} />
                            <div>
                                <Text strong>{m.name}</Text>
                                <br />
                                <Text type="secondary">{m.department}</Text>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CheckoutMachineStep;
