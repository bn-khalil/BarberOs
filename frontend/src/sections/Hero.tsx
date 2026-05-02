import Button from "../components/Button";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
    return (
        <section className="w-full h-[90%] flex">
            <div className="w-1/2 h-full flex flex-col justify-center gap-7 ">
                <h1 className="font-display text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                    Getting you <br />
                    <span className="text-gold">handsome</span> is <br />
                    our goal
                </h1>
                <p className=" font-sans text-white opacity-80 text-lg md:text-xl max-w-xl leading-relaxed">
                    Get the perfect cut every time of your dreams at 
                    the barber shop that cares about your style!
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                    <Button
                    label="Appointment" 
                    variant="primary" 
                    className="px-10 py-4 text-sm uppercase tracking-widest"
                    onClick={() => console.log("Booking...")}
                    />
                    <Button 
                    label="Contact us" 
                    variant="outline" 
                    className="px-10 py-4 text-sm uppercase tracking-widest"
                    onClick={() => console.log("Contacting...")}
                    />
                </div>
            </div>
            <div className="w-1/2 h-full relative">

                <div className=" absolute -left-8 bottom-1/5 opacity-70 w-[40%] h-fit bg-gold p-4 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-display text-xl font-bold text-main">
                        Review
                        </h3>
                        <ArrowUpRight className="text-main size-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <img 
                        src="https://randomuser.me/api/portraits/men/9.jpg" 
                        alt="John Doe" 
                        className="size-10 rounded-full object-cover border-2 border-main/10"
                        />
                        <div className="flex flex-col">
                        <span className="font-sans text-main text-md">John Doe</span>
                        <span className="font-sans text-main/70 text-xs italic">2 month ago</span>
                        </div>
                    </div>

                    <p className="font-sans text-main opacity-70 text-xs leading-relaxed font-medium">
                        Barbers cuts hair with care and attention to detail. A really good barbers who know their business.
                    </p>
                </div>

                <div className="absolute -right-8 -bottom-3 opacity-70 w-[40%] h-fit bg-gold p-4 flex flex-col justify-around">
                </div>

            </div>
        </section>
    );
}