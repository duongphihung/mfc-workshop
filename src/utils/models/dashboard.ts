import { ObjectBase } from "./common"

export interface KeySummary {
    hour_before: number
    this_hour: number
    yesterday: number
    today: number
    last_month: number
    this_month: number
    this_year: number
    time_latest: number
}

export interface DashboardBot {
    id: string;
    name: string;
    created_time: number;
    description: string | null;
    code: string;
    type: string;
    active: boolean;
    location: string;
    other_information: any[];
    list_key: AssetKeyItem[];
}

export interface DashboardConsumption extends ObjectBase {
    created_time: number;
    description: string | null;
    code: string;
    type: string;
    active: boolean;
    other_information: any[];
    current_electricity_number: number | null;
    power_consumption: number | null;
    current_electricity_month: number | null;
}

export interface DashboardEnergyMeterReading {
    asset_id: string;
    asset_name: string;
    energy_start: number;
    energy_end: number;
    energy_consumption: number;
    [key: string]: any
}

export interface AssetKeyItem {
    key: string;
    value: number | string | EvnCost | null;
    ts: number;
}

export interface EvnCost {
    type: string;
    UNIT_PRICE: {
        Low: number;
        Peak: number;
        Normal: number;
    };
}