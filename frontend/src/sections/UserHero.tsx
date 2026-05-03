import NewAppointment from "../components/NewAppointment";
import WellcomeUser from "../components/WellcomeUser";

export function UserHero() {
    return (
        <section className="">
            <WellcomeUser/>
            <NewAppointment/>
        </section>
    );
}