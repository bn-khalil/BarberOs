import { GiRazor, GiComb } from "react-icons/gi";
import { FaCut, FaSprayCan } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";
import shaving from "../assets/pos-2.jpg"
import haircut from "../assets/pos-1.jpg"
import trimming from "../assets/bg-1.jpg"
import style from "../assets/Style.jpg"

export const services = [
    { title: "Shaving", price: "55", image: shaving, Icon: GiRazor },
    { title: "Haircutting", price: "75", image: haircut, Icon: FaCut },
    { title: "Trimming", price: "35", image: trimming, Icon: FaSprayCan },
    { title: "Style", price: "45", image: style, Icon: GiComb },
  ];

export function ServicesSection() {
  return (
    <section id="services" className="bg-main py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-gold text-5xl md:text-6xl font-bold mb-6">
            Our services
          </h2>
          <p className="font-sans text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We are dedicated to providing you with the best possible experience. 
            Our team of experts is here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}