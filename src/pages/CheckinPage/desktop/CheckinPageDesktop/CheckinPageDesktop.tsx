import { Card, Steps, Button } from "antd";
import { useState } from "react";
import styles from "./CheckinPageDesktop.module.scss";
import MachineStep from "./components/MachineStep";
import EmployeeStep from "./components/EmployeeStep";
import ComfirmProcessStep from "./components/ComfirmProcessStep";
import StepHeader from "@/components/StepHeader/StepHeader";
import { useNavigate } from "react-router-dom";

const CheckinPageDesktop = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className={styles.wrapper}>
            <Card className={styles.topCard}>
                <StepHeader
                    title="CHECK-IN"
                />

                <Steps
                    current={currentStep}
                    className={styles.steps}
                    items={[
                        { title: "Quét Barcode Máy móc" },
                        { title: "Quét Barcode Nhân viên" },
                        { title: "Xác nhận Công đoạn" },
                    ]}
                />
            </Card>

            {/* ===== STEP CONTENT ===== */}
            <div
                style={{
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                {currentStep === 0 && <MachineStep />}
                {currentStep === 1 && <EmployeeStep />}
                {currentStep === 2 && <ComfirmProcessStep />}
            </div>

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
                        if (prev < 2) {
                            return prev + 1;
                        } else {
                            navigate("/home");
                        }
                    })}
                >
                    {currentStep < 2 ? "Tiếp theo" : "Check-in"}
                </Button>
            </div>
        </div>
    );
};

export default CheckinPageDesktop;
