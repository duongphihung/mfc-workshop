import { Table, Typography, Select, Space, InputNumber, DatePicker, Input } from "antd";
import styles from "../ReceiveMaterialPageDesktop.module.scss";
import { useRMProductionOrderStore } from "@/utils/store/RMProductionOrderStore";
import { FiSearch } from "react-icons/fi";

const { Text } = Typography;

const RMProductionOrderStep = () => {
    const {
        projects,
        issueSlips,
        materials,
        setProject,
        setIssueSlip,
    } = useRMProductionOrderStore();

    const columns = [
        {
            title: "Mã Vật liệu",
            dataIndex: "materialCode",
            key: "materialCode",
        },
        {
            title: "Tên Vật liệu",
            dataIndex: "materialName",
            key: "materialName",
        },
        {
            title: "Số lượng Yêu cầu",
            dataIndex: "requiredQuantity",
            key: "requiredQuantity",
            render: (value: number) => <InputNumber min={0} defaultValue={value} />,
        },
    ];

    return (
        <div className={styles.stepContent}>
            {/* ===== BỘ LỌC ===== */}
            <div className={styles.filterSection}>
                <div className={styles.filterItem}>
                    <div className={styles.filterLabel}>Thời gian</div>
                    <DatePicker size="middle" style={{ width: "100%" }} />
                </div>

                <div className={styles.filterItem}>
                    <div className={styles.filterLabel}>Dự án</div>
                    <Select
                        placeholder="Chọn dự án"
                        onChange={setProject}
                        options={projects.map((p) => ({
                            label: p.name,
                            value: p.id,
                        }))}
                        size="middle"
                        style={{ width: "100%" }}
                    />
                </div>

                <div className={styles.filterItem}>
                    <div className={styles.filterLabel}>Phiếu VL</div>
                    <Select
                        placeholder="Chọn phiếu xuất vật liệu"
                        onChange={setIssueSlip}
                        options={issueSlips.map((p) => ({
                            label: p.code,
                            value: p.id,
                        }))}
                        disabled={!issueSlips.length}
                        size="middle"
                        style={{ width: "100%" }}
                    />
                </div>

                <div className={styles.filterItem}>
                    <div className={styles.filterLabel}>Tìm kiếm</div>
                    <Input
                        size="middle"
                        suffix={<FiSearch />}
                        placeholder="Tìm kiếm Vật liệu..."
                    />
                </div>
            </div>


            {/* ===== TABLE ===== */}
            <div className={styles.section}>
                <div className={styles.titleCommon}>
                    THÔNG TIN VẬT LIỆU YÊU CẦU
                </div>

                <div className={styles.listCommon}>
                    <Table
                        rowKey="materialCode"
                        dataSource={materials}
                        columns={columns}
                        pagination={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default RMProductionOrderStep;
