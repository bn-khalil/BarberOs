import type { IconType } from "react-icons/lib";

interface ServiceProps {
  title: string;
  price: string;
  image: string;
  Icon: IconType;
}

const ServiceCard = ({ title, price, image, Icon }: ServiceProps) => (
    <div className="group cursor-pointer">
        <div className="relative p-2.5 border border-gold/50 group-hover:border-gold transition-colors duration-500">
            <div className="relative">
                <img 
                src={image} 
                alt={title} 
                className="w-full h-80 object-cover group-hover:grayscale-0 transition-all duration-700 scale-100" 
                />
                
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-main border border-gold rounded-full p-4 ">
                    <Icon className="text-gold size-6" />
                </div>
            </div>
            <div className="  mt-10 mb-5 text-center">
                <h3 className="font-display text-gold text-2xl tracking-wide">
                    {title}
                </h3>
                <p className="font-sans text-white mt-2 text-md opacity-70">
                    Charge: <span className="text-gold">${price}</span>
                </p>
            </div>
        </div>
    </div>
);

export default ServiceCard;