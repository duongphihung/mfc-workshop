import { Input } from "antd";
import { useEffect, useRef, useState } from "react";
import type { InputRef } from "antd";
import { LuScanLine } from "react-icons/lu";

type ScanInputProps = {
    placeholder?: string;
    onScan: (value: string) => void;
    autoFocus?: boolean;
    disabled?: boolean;
};

const ScanInput = ({
    placeholder = "Quét barcode hoặc nhập thủ công ở đây...",
    onScan,
    autoFocus = true,
    disabled = false,
}: ScanInputProps) => {
    const inputRef = useRef<InputRef>(null);
    const [value, setValue] = useState("");

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const handleSubmit = () => {
        const trimmed = value.trim();
        if (!trimmed) return;

        onScan(trimmed);
        setValue("");

        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    return (
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
                <LuScanLine size={22}/>
            }
        />
    );
};

export default ScanInput;
