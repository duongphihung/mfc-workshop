import { useState } from "react";
import styles from "../CheckinPageDesktop.module.scss";
import { Input, Table, TableProps, Typography } from "antd";

const ComfirmProcessStep = () => {
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const [processes, setProcesses] = useState<any[]>([
        {
            id: "CP001",
            name: "Công đoạn Ép nhựa",
            product_name: "Sản phẩm A",
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
            />
            <div className={styles.section}>
                <div className={styles.titleCommon}>DANH SÁCH CÔNG ĐOẠN</div>
                <div className={styles.listCommon}>
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
    )
}

export default ComfirmProcessStep
