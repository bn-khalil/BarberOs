import type { ServiceData } from "../sections/admin/ServiceDashboard";
import apiClient from "./Api";


export const getAllServices = async () => {
    try {
        const response = apiClient.get('/services');
        return response;
    } catch (error: any) {
        throw error.response?.data || "Server Error";
    }
} 

export const addNewService = async (serviceData: ServiceData) => {
    try {
        const response = await apiClient.post("services", serviceData);
        return response;
    } catch (error: any) {
        throw error.response?.data || "Server Error";
    }
} 