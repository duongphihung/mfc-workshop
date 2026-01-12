export interface MonitorEnergyProduct {
    key?: string;
    label?: string;
    unit?: string;
    value?: number;
    id?: string;
    equipment_id?: string;
    equipment_name?: string;
    name?: string;
}

export interface MonitorEnergyProductAreaObject {
    id: string;
    name?: string;
    type?: string;
    list_key?: MonitorEnergyProduct[]
    list_device?: {
        name: string;
        id: string;
        type?: string;
        list_key: MonitorEnergyProduct[]
    }[]
}

//Modal data electric chart 
export interface MonitorElectricChart {
    entity_id: string;
    stt: number;   
    day: string;
    peak_consumption: number;
    normal_consumption: number;
    low_consumption: number;
    total_consumption: number;
}

export interface MonitorTotalPriceChart {
    entity_id: string;
    stt: number;   
    day: string;
    low_cost: number;
    normal_cost: number;
    peal_cost: number;
    total_cost: number;
}

