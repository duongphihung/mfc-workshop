import { useState } from "react";
import styles from "../CheckinPageDesktop.module.scss";
import { Button, DatePicker, Input, Table, TableProps } from "antd";

const ComfirmProcessStep = () => {
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const [processes, setProcesses] = useState<any[]>([
        {
            id: "CP001",
            name: "Công đoạn Ép nhựa",
            product_name: "Sản phẩm A",
        },
        {
            id: "CP002",
            name: "Công đoạn Ép nhựa",
            product_name: "Sản phẩm A",
        },
        {
            id: "CP003",
            name: "Công đoạn Ép nhựa",
            product_name: "Sản phẩm A",
        },
        {
            id: "CP004",
            name: "Công đoạn Ép nhựa",
            product_name: "Sản phẩm A",
        },
        {
            id: "CP005",
            name: "Công đoạn Ép nhựa",
            product_name: "Sản phẩm A",
        },
        {
            id: "CP006",
            name: "Công đoạn Ép nhựa",
            product_name: "Sản phẩm A",
        },
        {
            id: "CP007",
            name: "Công đoạn Ép nhựa",
            product_name: "Sản phẩm A",
        },
        {
            id: "CP008",
            name: "Công đoạn Ép nhựa",
            product_name: "Sản phẩm A",
        },
    ]);

    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            render: (text: any, record: any, index: number) => index + 1
        },
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
            title: 'Nhu cầu',
            dataIndex: '',
            key: '',
        },
    ];

    const rowSelection: TableProps<any>['rowSelection'] = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },

    };
    return (
        <div className={styles.stepContent}>
            <Input
                className={styles.inputProcess}
                placeholder="Tìm kiếm công đoạn..."
                size="large"
            />
            <div className={styles.section}>
                <div className={styles.titleHeader}>
                    <div className={styles.titleCommon}>DANH SÁCH CÔNG ĐOẠN</div>
                    <div className={styles.titleAction}>
                        <Button
                            onClick={() => setSelectionType('checkbox')}
                        >
                            Đã chọn
                        </Button>
                        <DatePicker />
                    </div>
                </div>
                <div className={styles.listCommon}>
                    <div className={styles.listContent}>
                        <Table
                            rowSelection={{ type: selectionType, ...rowSelection }}
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

export default ComfirmProcessStep
