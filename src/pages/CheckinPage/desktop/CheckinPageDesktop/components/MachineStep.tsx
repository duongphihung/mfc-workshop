import { Card, Typography, Image, message } from "antd";
import { useState } from "react";
import styles from "../CheckinPageDesktop.module.scss";
import ScanInput from "@/components/ScanInput/ScanInput";

const { Text } = Typography;

type MachineInfo = {
    id: string;
    name: string;
    department: string;
    image: string;
};

const MOCK_MACHINES: Record<string, MachineInfo> = {
    "8938525350190": {
        id: "8938525350190",
        name: "Máy Ép Nhựa A01",
        department: "Xưởng Nhựa",
        image: "https://via.placeholder.com/120x80",
    },
};

const MachineStep = () => {
    const [machines, setMachines] = useState<MachineInfo[]>([]);

    const handleScanMachine = (barcode: string) => {
        const machine = MOCK_MACHINES[barcode];

        if (!machine) {
            message.error("Không tìm thấy máy");
            return;
        }

        const isExist = machines.some((m) => m.id === barcode);
        if (isExist) {
            message.warning("Máy đã được quét");
            return;
        }

        setMachines((prev) => [...prev, machine]);
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

export default MachineStep;
