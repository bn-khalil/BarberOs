import type { BarberData } from "../sections/admin/BarberForm";
import apiClient from "./Api";

export const getAllUsers = async () => {
    try {
        const response = apiClient.get("/users");
        return response;
    } catch (error: any) {
        throw error.response?.data || "Server Error";
    }
}

export const getAllClients = async () => {
    try {
        const response = apiClient.get("/users/clients");
        return response;
    } catch (error: any) {
        throw error.response?.data || "Server Error";
    }
}