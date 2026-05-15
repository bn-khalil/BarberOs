import { useEffect, useState } from "react";
import { Header } from "../sections/Header";
import Services from "../sections/Services";
import { UserHero } from "../sections/UserHero";
import type { ServiceData } from "../sections/admin/ServiceDashboard";
import { getAllServices } from "../services/ServiceService";
import AppointmentSection from "../sections/booking/AppointmentSection";


export default function UserDashboard() {
    const[isBook, setIsBook] = useState(false);
    const [services, setServices] = useState<ServiceData[]>([]);
    const [loading, setLoading] = useState(4);

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await getAllServices();
            if (response) {
                setLoading(0);
                console.log(response.data)
                setServices(response.data);
            }
        }
        fetchData();
    },[])
    return (
        <main className={`md:max-w-5xl mx-auto px-4 relative ${isBook ? "h-screen overflow-hidden": ""}`}>
            <Header/>
            <div className="w-full">
                <UserHero setIsBook={setIsBook}/>
            </div>
            <Services services={services} loading={loading}/>
            {
                isBook ?(
                    <AppointmentSection services={services} loading={loading} setIsBook={setIsBook}/>
                ):""
            }
        </main>
    );
}