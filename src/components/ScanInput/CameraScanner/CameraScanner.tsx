import Quagga from "@ericblade/quagga2";
import { useEffect, useRef } from "react";
import styles from "./CameraScanner.module.scss";

type Props = {
    open: boolean;
    onClose: () => void;
    onScanSuccess: (value: string) => void;
};

const CameraScanner = ({ open, onClose, onScanSuccess }: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!open || !ref.current) return;

        let lastCode = "";
        let sameCount = 0;

        Quagga.init(
            {
                inputStream: {
                    type: "LiveStream",
                    target: ref.current,
                    constraints: {
                        facingMode: "environment",
                        width: { min: 1280 },
                        height: { min: 720 },
                    },
                    area: {
                        top: "45%",
                        right: "10%",
                        left: "10%",
                        bottom: "25%",
                    },
                },
                decoder: {
                    readers: ["code_128_reader", "ean_reader", "ean_8_reader"],
                    multiple: false,
                },
                locator: {
                    halfSample: true,
                },
                locate: true,
                numOfWorkers: navigator.hardwareConcurrency || 4,
            },
            (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                Quagga.start();
            }
        );

        const onDetected = (result: any) => {
            const code = result?.codeResult?.code;
            if (!code) return;

            if (code === lastCode) {
                sameCount++;
            } else {
                lastCode = code;
                sameCount = 1;
            }

            if (sameCount >= 3) {
                onScanSuccess(code);
                handleClose();
            }
        };

        Quagga.onDetected(onDetected);

        return () => {
            Quagga.offDetected(onDetected);
            Quagga.stop();
        };
    }, [open]);

    const handleClose = () => {
        Quagga.stop();
        onClose();
    };

    if (!open) return null;

    return (
        <div className={styles.overlay}>
            <div ref={ref} className={styles.camera} />

            <div className={`${styles.mask} ${styles.maskTop}`} />
            <div className={`${styles.mask} ${styles.maskBottom}`} />
            <div className={`${styles.mask} ${styles.maskLeft}`} />
            <div className={`${styles.mask} ${styles.maskRight}`} />

            <div className={styles.frame}>
                <div className={styles.frameBorder} />
                <span className={`${styles.corner} ${styles.tl}`} />
                <span className={`${styles.corner} ${styles.tr}`} />
                <span className={`${styles.corner} ${styles.bl}`} />
                <span className={`${styles.corner} ${styles.br}`} />
                <div className={styles.scanLine} />
            </div>

            <button className={styles.close} onClick={handleClose}>
                ✕
            </button>
        </div>
    );
};

export default CameraScanner;
