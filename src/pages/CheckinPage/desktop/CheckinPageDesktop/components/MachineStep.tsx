import { Card, Typography, Image, message } from "antd";
import { useState } from "react";
import styles from "../CheckinPageDesktop.module.scss";
import ScanInput from "@/components/ScanInput/ScanInput";
import { useCheckinStore } from "@/utils/store/checkinStore";
import { MachineInfo } from "@/utils/models/machine";

const { Text } = Typography;

const MACHINE_LIST: MachineInfo[] = [
    {
        id: "WC-456-20260119080320",
        name: "Máy Ép Nhựa A01",
        department: "Xưởng Nhựa",
    },
    {
        id: "WC-789-20260119090000",
        name: "Máy Ép Nhựa A02",
        department: "Xưởng Nhựa",
    },
];


const MachineStep = () => {
    const { machines, addMachine } = useCheckinStore();

    const handleScanMachine = (barcode: string) => {
        const machine = MACHINE_LIST.find((m) => m.id === barcode.trim());

        if (!machine) {
            message.error("Mã: " + barcode + " không tìm thấy" );
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
