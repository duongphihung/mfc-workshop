import { useState } from "react";
import styles from "../CheckoutPageDesktop.module.scss";
import { Input, InputNumber, Table } from "antd";
import { render } from "sass";

const CheckoutConfirmProcess = () => {
    const [processes, setProcesses] = useState<any[]>([
        {
            id: "CP001",
            name: "Công đoạn Ép nhựa",
            product_name: "Sản phẩm A",
            quantity: 100,
            unit: "Cái",
        }
    ]);

    const columns = [
        {
            title: 'Mã công đoạn',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Tên công đoạn',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'product_name',
            key: 'product_name',
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (quantity: number) => (<InputNumber min={0} defaultValue={quantity} />),
        },
        {
            title: 'Đơn vị',
            dataIndex: 'unit',
            key: 'unit',
        },
        
    ];
    return (
        <div className={styles.stepContent}>
            <Input
                className={styles.inputProcess}
                placeholder="Tìm kiếm công đoạn..."
            />
            <div className={styles.section}>
                <div className={styles.titleCommon}>DANH SÁCH CÔNG ĐOẠN</div>
                <div className={styles.listCommon}>
                    <Table
                        dataSource={processes}
                        columns={columns}
                        rowKey="id"
                        pagination={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default CheckoutConfirmProcess
