import {
    BrowserMultiFormatReader,
    IScannerControls,
} from "@zxing/browser";
import {
    BarcodeFormat,
    DecodeHintType,
} from "@zxing/library";
import { useEffect, useRef } from "react";
import styles from "./CameraScanner.module.scss";

type Props = {
    open: boolean;
    onClose: () => void;
    onScanSuccess: (value: string) => void;
};

const CameraScanner = ({ open, onClose, onScanSuccess }: Props) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const controlsRef = useRef<IScannerControls | null>(null);
    const readerRef = useRef<BrowserMultiFormatReader | null>(null);

    useEffect(() => {
        if (!open || !videoRef.current) return;

        const hints = new Map();
        hints.set(DecodeHintType.POSSIBLE_FORMATS, [
            BarcodeFormat.CODE_128,
            BarcodeFormat.EAN_13,
            BarcodeFormat.EAN_8,
        ]);

        const reader = new BrowserMultiFormatReader(hints, {
            delayBetweenScanAttempts: 150,
        });
        readerRef.current = reader;

        reader
            .decodeFromConstraints(
                {
                    video: {
                        facingMode: "environment",
                        width: { ideal: 1280 },
                        height: { ideal: 720 },
                    },
                },
                videoRef.current,
                (result) => {
                    if (result) {
                        onScanSuccess(result.getText());
                        handleClose();
                    }
                }
            )
            .then((controls) => {
                controlsRef.current = controls;
            })
            .catch(console.error);

        return () => {
            controlsRef.current?.stop(); // ✅ CÁCH ĐÚNG
            controlsRef.current = null;
        };
    }, [open]);

    const handleClose = () => {
        controlsRef.current?.stop();
        controlsRef.current = null;
        onClose();
    };

    if (!open) return null;

    return (
        <div className={styles.overlay}>
            <video
                ref={videoRef}
                className={styles.camera}
                muted
                autoPlay
                playsInline
            />

            <div className={styles.frame}>
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
