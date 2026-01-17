import { Card, Typography, Image, message } from "antd";
import { useState } from "react";
import styles from "../CheckinPageDesktop.module.scss";
import ScanInput from "@/components/ScanInput/ScanInput";
import { useCheckinStore } from "@/utils/store/checkinStore";

const { Text } = Typography;

type MachineInfo = {
    id: string;
    name: string;
    department: string;
    image: string;
};

const MOCK_MACHINES: Record<string, MachineInfo> = {
    "SN:6500A-512150636674": {
        id: "SN:6500A-512150636674",
        name: "Máy Ép Nhựa A01",
        department: "Xưởng Nhựa",
        image: "https://via.placeholder.com/120x80",
    },
};

const MachineStep = () => {
    const { machines, addMachine } = useCheckinStore();

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
                <div className={styles.titleHeader}>
                    <div className={styles.titleCommon}>THÔNG TIN MÁY</div>
                </div>
                <div className={styles.listCommon}>
                    <div className={styles.listContent}>
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
        </div>
    );
};

export default MachineStep;
