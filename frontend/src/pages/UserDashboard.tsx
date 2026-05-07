import { Header } from "../sections/Header";
import Services from "../sections/Services";
import { UserHero } from "../sections/UserHero";

export default function UserDashboard() {
    return (
        <main className="md:max-w-5xl mx-auto px-4">
            <Header/>
            <UserHero/>
            <Services/>
        </main>
    );
}