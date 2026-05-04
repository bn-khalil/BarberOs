import Button from "../components/Button";
import bg from "../assets/bbg.jpg"
import { useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";


export function BookSection() {
    const navigate = useNavigate();
    return (
        <section className="w-full relative flex items-center bg-bg h-[50vh]">
            <img 
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" 
                    src={bg} 
                    alt="Barber Background" 
                />
            <div className="relative w-full bg-main-second max-md:bg-transparent max-md:px-2">
                <div className="container mx-auto grid grid-cols-1 gap-3 py-6">
                    <h1 className="text-white font-display text-4xl">
                        Book your <br />
                        appointement online
                    </h1>
                    <p className="font-sans text-gray-300 text-sm md:text-xl leading-relaxed">
                        Schedule your next haircut service online. Our <br className="hidden md:block" />
                        online booking is fast and available 24/7. Book <br className="hidden md:block" />
                        now and get ready to look your best.
                    </p>
                    <div className="flex items-center">
                        <Button className="max-sm:px-5 max-sm:text-[10px]" type="button" label="Make Appointement" onClick={()=>navigate(PATHS.LOGIN)}/>
                    </div>
                </div>
            </div>
        </section>
    );
}