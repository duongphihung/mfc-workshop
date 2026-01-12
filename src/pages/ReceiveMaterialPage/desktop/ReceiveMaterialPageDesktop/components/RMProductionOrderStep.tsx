import { Card, Typography, Image, message } from "antd";
import { useState } from "react";
import styles from "../ReceiveMaterialPageDesktop.module.scss";
import ScanInput from "@/components/ScanInput/ScanInput";

const { Text } = Typography;

type ProductionOrderInfo = {
    id: string;
    name: string;
    unit: string;
    quantity: number;
};

const MOCK_PRODUCTION_ORDERS: Record<string, ProductionOrderInfo> = {
    "8938525350190": {
        id: "8938525350190",
        name: "Tấm thép mạ kẽm SP001",
        unit: "Cái",
        quantity: 100,
    },
};

const RMProductionOrderStep = () => {
    const [productionOrders, setProductionOrders] = useState<ProductionOrderInfo[]>([]);

    const handleScanProductionOrder = (barcode: string) => {
        const productionOrder = MOCK_PRODUCTION_ORDERS[barcode];

        if (!productionOrder) {
            message.error("Không tìm thấy đơn hàng sản xuất");
            return;
        }

        const isExist = productionOrders.some((m) => m.id === barcode);
        if (isExist) {
            message.warning("Đơn hàng sản xuất đã được quét");
            return;
        }

        setProductionOrders((prev) => [...prev, productionOrder]);
        message.success(`Đã thêm ${productionOrder.name}`);
    };

    return (
        <div className={styles.stepContent}>
            <ScanInput
                placeholder="Quét barcode đơn hàng sản xuất..."
                onScan={handleScanProductionOrder}
            />

            <div className={styles.section}>
                <div className={styles.titleCommon}>THÔNG TIN ĐƠN HÀNG SẢN XUẤT</div>

                <div className={styles.listCommon}>
                    {productionOrders.map((item) => (
                        <Card key={item.id} className={styles.machineCard}>
                            <div>
                                <Text strong>{item.name}</Text>
                                <br />
                                <Text>Số lượng: {item.quantity}</Text>
                                <br />
                                <Text>Đơn vị: {item.unit}</Text>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RMProductionOrderStep
