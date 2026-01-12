export interface UnitObject {
    id: string;
    unit_cat: string;
    unit_measure: {
        id: string;
        unit_measure: string;
        type: string;
    }[];
}