export const ALARM_ENVIROMENT_KEY = [
    {
        key: 'temp_max',
        label: 'Nhiệt độ tiêu thụ (Max)',
        unit: '°C',
    },
    {
        key: 'temp_min',
        label: 'Nhiệt độ tiêu thụ (Min)',
        unit: '°C',
    },
    {
        key: 'hum_max',
        label: 'Độ ẩm tiêu thụ (Max)',
        unit: '%',
    },
    {
        key: 'hum_min',
        label: 'Độ ẩm tiêu thụ (Min)',
        unit: '%',
    },
    
];

export const ALARM_ELECTRIC_KEY = [
    {
        key: 'V1N',
        label: 'V1N - Điện áp từng pha',
        unit: 'V',
    },
    {
        key: 'V12',
        label: 'V12 - Điện áp giữa các pha',
        unit: 'V',
    },
    {
        key: 'I1',
        label: 'I1 - Dòng điện',
        unit: 'A',
    },
    {
        key: 'kW1',
        label: 'P - Công suất thực',
        unit: 'kW',
    },
    {
        key: 'kVAR1',
        label: 'Q - Công suất phản kháng',
        unit: 'kVAR',
    }
];

export const TOTAL_ALARM_KEY = [
    ...ALARM_ENVIROMENT_KEY,
    ...ALARM_ELECTRIC_KEY,
];