import Button from "../components/Button";
import bg from "../assets/bbg.jpg"


export function BookSection() {
    return (
        <section className="w-full relative flex items-center bg-bg h-[50vh]">
            <img 
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" 
                    src={bg} 
                    alt="Barber Background" 
                />
            <div className="relative w-full bg-main-second">
                <div className=" container mx-auto flex justify-between py-6">
                    <h1 className="text-white font-display text-4xl">
                        Book your <br />
                        appointement online
                    </h1>
                    <p className="font-sans text-gray-300 text-sm md:text-xl leading-relaxed mb-10">
                        Schedule your next haircut service online. Our <br className="hidden md:block" />
                        online booking is fast and available 24/7. Book <br className="hidden md:block" />
                        now and get ready to look your best.
                    </p>
                    <div className="flex items-center">
                        <Button label="Make Appointement"/>
                    </div>
                </div>
            </div>
        </section>
    );
}