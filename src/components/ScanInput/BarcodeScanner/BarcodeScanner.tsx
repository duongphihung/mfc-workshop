import { useEffect } from "react";
import Quagga from "@ericblade/quagga2";

type Props = {
    onDetected: (code: string) => void;
};

let lastCode = "";
let sameCount = 0;

const BarcodeScanner = ({ onDetected }: Props) => {
    useEffect(() => {
        Quagga.init(
            {
                inputStream: {
                    type: "LiveStream",
                    target: document.querySelector("#barcode-area") as HTMLElement,
                    constraints: {
                        facingMode: "environment",
                        width: { min: 400 },
                        height: { min: 400 },
                    },
                },

                decoder: {
                    readers: [
                        {
                            format: "ean_reader",
                            config: { supplements: [] },
                        },
                        "ean_8_reader",
                        "code_128_reader",
                        "upc_reader",

                    ],
                    multiple: false,
                },

                locate: true,
                frequency: 10,
                numOfWorkers: navigator.hardwareConcurrency || 4,
            },
            (err) => {
                if (err) {
                    console.error("❌ Quagga init error:", err);
                    return;
                }
                console.log("✅ Quagga started");
                Quagga.start();
            }
        );

        // 🔍 LOG mọi frame detect (kể cả sai)
        Quagga.onDetected((data) => {
            const code = data.codeResult.code;
            const format = data.codeResult.format;
            const confidence = data.codeResult.decodedCodes?.reduce(
                (sum: number, d: any) => sum + (d.error || 0),
                0
            );

            console.group("📸 Barcode detected");
            console.log("Code:", code);
            console.log("Format:", format);
            console.log("Confidence (lower is better):", confidence);
            console.log("Raw data:", data);
            console.groupEnd();

            if (!code) return;

            // chống rung / false positive
            if (code === lastCode) {
                sameCount++;
            } else {
                lastCode = code;
                sameCount = 1;
            }

            if (sameCount >= 2) {
                console.log("✅ CONFIRMED barcode:", code);
                onDetected(code);
                Quagga.stop();
            }
        });

        return () => {
            console.log("🛑 Quagga stopped");
            Quagga.stop();
            lastCode = "";
            sameCount = 0;
        };
    }, []);

    return (
        <div
            id="barcode-area"
            style={{
                width: "100%",
                height: 320,
            }}
        />
    );
};

export default BarcodeScanner;
