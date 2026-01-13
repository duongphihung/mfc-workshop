import { create } from "zustand";
import { MachineInfo } from "../models/machine";
import { EmployeeInfo } from "../models/employee";

type MachineStore = {
    machines: MachineInfo[];
    addMachine: (machine: MachineInfo) => boolean;
    clearMachines: () => void;

    employees: EmployeeInfo[];
    addEmployee: (employee: EmployeeInfo) => boolean;
    clearEmployees: () => void;
};

export const useCheckoutStore = create<MachineStore>((set, get) => ({
    machines: [],
    addMachine: (machine) => {
        const isExist = get().machines.some(
            (m) => m.id === machine.id
        );

        if (isExist) return false;

        set((state) => ({
            machines: [...state.machines, machine],
        }));

        return true;
    },
    clearMachines: () => set({ machines: [] }),

    employees: [{
        id: "NV001",
        name: "Nguyễn Văn A",
        position: "Công nhân",
    }],
    addEmployee: (employee) => {
        const isExist = get().employees.some(
            (e) => e.id === employee.id
        );
        if (isExist) return false;
        set((state) => ({
            employees: [...state.employees, employee],
        }));
        return true;
    },
    clearEmployees: () => set({ employees: [] }),
}));
