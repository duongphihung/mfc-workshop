import axiosClient from "./axios-client";

export const employeeApis = {
    getListEmployee: () => {
        const url = "/api/employee";
        return axiosClient.get(url);
    },
}