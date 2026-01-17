import { Modal } from "antd";
import BarcodeScanner from "../BarcodeScanner/BarcodeScanner";

type Props = {
    open: boolean;
    onClose: () => void;
    onScanSuccess: (value: string) => void;
};

const CameraScanModal = ({ open, onClose, onScanSuccess }: Props) => {
    return (
        <Modal
            open={open}
            onCancel={onClose}
            footer={null}
            title="Quét barcode"
            destroyOnClose
        >
            {open && (
                <BarcodeScanner
                    onDetected={(code) => {
                        onScanSuccess(code);
                        onClose();
                    }}
                />
            )}
        </Modal>
    );
};

export default CameraScanModal;
