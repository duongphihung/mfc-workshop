import { Card, Steps, Button } from "antd";
import { useState } from "react";
import styles from "./ReceiveMaterialPageDesktop.module.scss";
import StepHeader from "@/components/StepHeader/StepHeader";
import RMProductionOrderStep from "./components/RMProductionOrderStep";
import RMEmplyeeStep from "./components/RMEmplyeeStep";
import { useNavigate } from "react-router-dom";
const ReceiveMaterialPageDesktop = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className={styles.wrapper}>
            <Card className={styles.topCard}>
                <StepHeader
                    title="NHẬN VẬT LIỆU"
                />

                <Steps
                    current={currentStep}
                    className={styles.steps}
                    items={[
                        { title: "Kiểm tra & Xác nhận Vật liệu" },
                        { title: "Quét Barcode Nhân viên" },
                    ]}
                />
            </Card>

            {/* ===== STEP CONTENT ===== */}
            {currentStep === 0 && <RMProductionOrderStep />}
            {currentStep === 1 && <RMEmplyeeStep />}

            {/* ===== FOOTER ===== */}
            <div className={styles.footer}>
                {
                    currentStep > 0 && (
                        <Button
                            onClick={() => setCurrentStep((prev) => prev - 1)}
                            disabled={currentStep === 0}
                        >
                            Quay lại
                        </Button>
                    )
                }
                <Button
                    type="primary"
                    onClick={() => setCurrentStep((prev) => {
                        if (prev < 1) {
                            return prev + 1;
                        } else {
                            navigate("/home");
                        }
                    })}
                >
                    {currentStep < 1 ? "Tiếp theo" : "Hoàn thành"}
                </Button>
            </div>
        </div>
    );
}

export default ReceiveMaterialPageDesktop
