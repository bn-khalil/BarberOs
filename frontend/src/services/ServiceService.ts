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

export const addNewService = async (serviceData: FormData) => {
    try {
        const response = await apiClient.post("services", serviceData, {headers: {
            'Content-Type': 'multipart/form-data',
        }});
        return response;
    } catch (error: any) {
        throw error.response?.data || "Server Error";
    }
} 