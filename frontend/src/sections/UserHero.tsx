import { useEffect, useState } from "react";
import NewAppointment from "../components/NewAppointment";
import WellcomeUser from "../components/WellcomeUser";

export function UserHero({setIsBook}:any) {

    return (
        <section className="">
            <WellcomeUser/>
            <NewAppointment setIsBook={setIsBook}/>
        </section>
    );
}