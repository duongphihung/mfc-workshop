import { Button, Card, Steps } from 'antd';
import styles from './CheckoutPageDesktop.module.scss';
import { useState } from 'react';
import StepHeader from '@/components/StepHeader/StepHeader';
import CheckoutMachineStep from './components/CheckoutMachineStep';
import CheckoutEmployeeStep from './components/CheckoutEmployeeStep';
import CheckoutConfirmProcess from './components/CheckoutConfirmProcess';
import { useNavigate } from 'react-router-dom';

const CheckoutPageDesktop = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className={styles.wrapper}>
            <Card className={styles.topCard}>
                <StepHeader
                    title="CHECK-OUT"
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
            {currentStep === 0 && <CheckoutMachineStep />}
            {currentStep === 1 && <CheckoutEmployeeStep />}
            {currentStep === 2 && <CheckoutConfirmProcess />}

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
                    Tiếp theo
                </Button>
            </div>
        </div>
    );
}


export default CheckoutPageDesktop
