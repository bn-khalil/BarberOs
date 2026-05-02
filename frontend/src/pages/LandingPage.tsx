import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import bg from "../assets/pos-4.jpg"
import { AboutSection } from "../sections/AboutSection";
import { ServicesSection } from "../sections/ServiceSection";
import { WorkingHours } from "../sections/WorkingHours";
import { Testimonial } from "../sections/Testimonial";
import { Gallery } from "../sections/GalerySection";
import { BookSection } from "../sections/BookSection";
import { Footer } from "../sections/Footer";

export function LandingPage() {
    return (
        <div className="w-full bg-main overflow-hidden">
            <div className="w-full relative h-screen container mx-auto">
                <img 
                    className="absolute top-0 right-0 w-1/2 h-full" 
                    src={bg} 
                    alt="Background" 
                />
                <div className="w-full h-full relative">
                    <Header/>
                    <Hero/>
                </div>
            </div>
            <AboutSection/>
            <ServicesSection/>
            <WorkingHours/>
            <Gallery/>
            <Testimonial/>
            <BookSection/>
            <Footer/>
        </div>
    );
}