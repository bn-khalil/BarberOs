import apiClient from "./Api";
import type { Appointment } from "./types";

export const getAllSlots = async(barberId: string, day: string) => {
    try {
        const response = apiClient.get(`/appointment/slots`, {
            params: {
                barber_id: barberId,
                day: day
            }
        });
        return response;
    } catch (error: any) {
        throw error.response?.data || "Server Error";
    }
} 

export const createAppointment = async (appointment: Appointment) => {
    try {
        const response = await apiClient.post(`/appointment`, appointment);
        return response;
    } catch (error: any) {
        throw error.response?.data?.message || "Server Error";
    }
};

export const getUserAppointment = async (id: string) => {
    try {
        const response = await apiClient.get(`/appointment/${id}`);
        return response;
    } catch (error: any) {
        throw error.response?.data?.message || "Server Error";
    }
};
