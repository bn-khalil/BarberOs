import { Quote } from "lucide-react";
import clientImg from "../assets/hair-cut-3.jpg";

export function Testimonial() {
  return (
    <section className="bg-main-second py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="order-2 flex justify-end">
            <div className="relative w-[60%] p-6 border border-gold">
                <div className="absolute -top-6 -left-6 z-20">
                    <Quote className="size-10 text-gold fill-gold rotate-180" />
                </div>
                <img 
                src={clientImg} 
                alt="Client" 
                className=" object-cover"
                />
            </div>
        </div>

        <div className="relative flex order-1 flex-col gap-6">
          <h2 className="font-display text-gold text-4xl md:text-5xl font-bold">
            Client says
          </h2>
          
          <div className="relative">
            <p className="font-sans text-gray-300 text-lg md:text-xl leading-relaxed pr-10">
              Barbers cuts hair with care and attention to detail. Their
              expertise and professionalism are evident in their careful
              approach to cutting hair. With their knowledge and
              experience, they deliver top-notch haircuts that leave
              customers feeling confident and satisfied.
            </p>
            
            <div className="absolute -bottom-4 right-0 opacity-10">
              <Quote className="size-24 text-white fill-white" />
            </div>
          </div>

          <div className="font-display text-white text-2xl font-bold flex items-center gap-2">
            <span className="text-gold">—</span> Adam Smith
          </div>
        </div>

      </div>
    </section>
  );
}