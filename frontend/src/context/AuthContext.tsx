import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { jwtDecode } from "jwt-decode";

type User = {
    id: string,
    phone: string,
    role: "admin" | "customer" | "barber"
}

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext< AuthContextType | undefined > (undefined);

export const AuthProvider = ({children} : {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const login = (token : string) =>{
        verifyToken(token);
    }

    const logout = () =>{
        localStorage.removeItem("token");
        setUser(null);
    }

    const verifyToken = (token: string)=>{
        try {
            const decoded: User = jwtDecode(token);
            setUser(decoded)
            localStorage.setItem("token", token);
        } catch (error) {
            logout();
        }
    }

    useEffect(()=> {
        const token = localStorage.getItem("token");
        if (token)
            verifyToken(token);
        setLoading(false);
    },[]);

    const contextValue: AuthContextType = useMemo(()=>({
        user,
        loading,
        login,
        logout
    }), [user, loading])

    return (
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};