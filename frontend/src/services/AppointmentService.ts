import apiClient from "./Api";

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
