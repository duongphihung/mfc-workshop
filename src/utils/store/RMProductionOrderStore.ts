import { create } from "zustand";

type Project = {
    id: string;
    name: string;
};

type IssueSlip = {
    id: string;
    code: string;
    projectId: string;
};

type Material = {
    materialCode: string;
    materialName: string;
    requiredQuantity: number;
};

type Store = {
    projects: Project[];
    issueSlips: IssueSlip[];
    materials: Material[];

    selectedProject?: string;
    selectedIssueSlip?: string;

    setProject: (projectId: string) => void;
    setIssueSlip: (issueSlipId: string) => void;
};

/** MOCK DATA (sau này thay bằng API) */
const MOCK_PROJECTS: Project[] = [
    { id: "P1", name: "Dự án Nhà máy A" },
    { id: "P2", name: "Dự án Nhà máy B" },
];

const MOCK_ISSUE_SLIPS: IssueSlip[] = [
    { id: "PX01", code: "PX-001", projectId: "P1" },
    { id: "PX02", code: "PX-002", projectId: "P1" },
    { id: "PX03", code: "PX-003", projectId: "P2" },
];

const MOCK_MATERIALS: Record<string, Material[]> = {
    PX01: [
        { materialCode: "VT001", materialName: "Thép tấm", requiredQuantity: 10 },
        { materialCode: "VT002", materialName: "Bu lông", requiredQuantity: 50 },
    ],
    PX02: [
        { materialCode: "VT003", materialName: "Nhựa ABS", requiredQuantity: 20 },
    ],
    PX03: [
        { materialCode: "VT004", materialName: "Sơn đỏ", requiredQuantity: 5 },
    ],
};

export const useRMProductionOrderStore = create<Store>((set) => ({
    projects: MOCK_PROJECTS,
    issueSlips: [],
    materials: [],

    setProject: (projectId) =>
        set(() => ({
            selectedProject: projectId,
            issueSlips: MOCK_ISSUE_SLIPS.filter(
                (p) => p.projectId === projectId
            ),
            selectedIssueSlip: undefined,
            materials: [],
        })),

    setIssueSlip: (issueSlipId) =>
        set(() => ({
            selectedIssueSlip: issueSlipId,
            materials: MOCK_MATERIALS[issueSlipId] || [],
        })),
}));
