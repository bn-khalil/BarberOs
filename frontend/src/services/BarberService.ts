// http://localhost:3000/barber/4a969596-2e1d-4448-a0b1-b0b0e4bbfdd2/upgrade-to-barber

import type { BarberData } from "../sections/admin/BarberForm";
import apiClient from "./Api";

export const upgreateToBarber = async (userId:string, barberData: BarberData) => {
    try {
        const response = apiClient.patch(`barbers/${userId}/upgrade-to-barber`, barberData);
        return response;
    } catch (error: any) {
        throw error.response?.data || "Server Error";
    }
}

export const getAllBarbers = async () => {
    try {
        const response = apiClient.get("/barbers");
        return response;
    } catch (error: any) {
        throw error.response?.data || "Server Error";
    }
}

export const deleteBarber = async (userId: string) => {
    try {
        const response = apiClient.delete(`barbers/${userId}/delete-barber`);
        return response;
    } catch (error: any) {
        throw error.response?.data || "Server Error";
    }
}