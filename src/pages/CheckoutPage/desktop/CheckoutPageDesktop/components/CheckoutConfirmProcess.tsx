import { useState } from "react";
import styles from "../CheckoutPageDesktop.module.scss";
import { Input, InputNumber, Select, Table } from "antd";
import { render } from "sass";

const CheckoutConfirmProcess = () => {
    const [processes, setProcesses] = useState<any[]>([
        {
            id: "CP001",
            name: "Công đoạn Ép nhựa",
            product_name: "Sản phẩm A",
            quantity: 100,
            unit: "Cái",
            staff: "Nguyễn Văn A",
        },
        {
            id: "CP002",
            name: "Công đoạn Ép nhựa",
            product_name: "Sản phẩm B",
            quantity: 200,
            unit: "Cái",
            staff: "Nguyễn Văn B",
        },
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
        {
            title: 'Nhân viên',
            dataIndex: 'staff',
            key: 'staff',
            render: (staff: string) => (<Select defaultValue={staff} />),
        }
    ];
    return (
        <div className={styles.stepContent}>
            <Input
                className={styles.inputProcess}
                placeholder="Tìm kiếm công đoạn..."
            />
            <div className={styles.section}>
                <div className={styles.titleHeader}>
                    <div className={styles.titleCommon}>DANH SÁCH CÔNG ĐOẠN</div>
                </div>
                <div className={styles.listCommon}>
                    <div className={styles.listContent}>
                        <Table
                            dataSource={processes}
                            columns={columns}
                            rowKey="id"
                            pagination={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutConfirmProcess
