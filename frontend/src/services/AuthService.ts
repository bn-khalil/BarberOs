import apiClient from "./Api";


export const loginUser = (userData: any) => {
    try {
        const response = apiClient.post("/auth/login", userData);
        return response;
    } catch (error: any) {
        throw error.response?.data || "Server Error";
    }
}   