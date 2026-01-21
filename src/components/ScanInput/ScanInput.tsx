import { Input } from "antd";
import { useEffect, useRef, useState } from "react";
import type { InputRef } from "antd";
import { LuScanLine } from "react-icons/lu";
import CameraScanner from "./CameraScanner/CameraScanner";

type ScanInputProps = {
    placeholder?: string;
    onScan: (value: string) => void;
    autoFocus?: boolean;
    disabled?: boolean;
};

const ScanInput = ({
    placeholder,
    onScan,
    autoFocus = true,
    disabled = false,
}: ScanInputProps) => {
    const inputRef = useRef<InputRef>(null);
    const [value, setValue] = useState("");
    const [openCamera, setOpenCamera] = useState(false);

    useEffect(() => {
        if (autoFocus) inputRef.current?.focus();
    }, [autoFocus]);

    const handleSubmit = (val?: string) => {
        const v = (val ?? value).trim();
        if (!v) return;

        onScan(v);
        setValue("");
        setTimeout(() => inputRef.current?.focus(), 0);
    };


    return (
        <>
            <Input
                ref={inputRef}
                size="large"
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === "Tab") {
                        e.preventDefault();
                        handleSubmit();
                    }
                }}
                suffix={
                    <LuScanLine
                        size={20}
                        style={{ cursor: "pointer" }}
                        onClick={() => setOpenCamera(true)}
                    />
                }
            />

            <CameraScanner
                open={openCamera}
                onClose={() => setOpenCamera(false)}
                onScanSuccess={(code) => {
                    handleSubmit(code);
                    setOpenCamera(false);
                }}
            />
        </>
    );
};

export default ScanInput;
