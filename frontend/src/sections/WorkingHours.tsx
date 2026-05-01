import workingImg from "../assets/pos-3.jpg";

export function WorkingHours() {
  return (
    <section className="bg-main-second py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="relative group">
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-4 border-b-4 border-gold z-10"></div>
          
          <div className="relative p-4 border border-gold">
            <img 
              src={workingImg} 
              alt="Barber working" 
              className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <div className="bg-main p-12 md:p-16 text-center shadow-2xl">
          <h2 className="font-display text-gold text-4xl md:text-5xl font-bold mb-6">
            Working hours
          </h2>
          <p className="font-sans text-gray-400 text-sm leading-relaxed mb-12">
            Our hours are flexible and convenient, with early morning<br className="hidden md:block" />
             and late evening appointments available.
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="font-display text-white text-lg font-medium">Weekdays</span>
              <span className="font-display text-gray-400">9 AM - 9 PM</span>
            </div>
            
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="font-display text-white text-lg font-medium">Saturday</span>
              <span className="font-display text-gray-400">10 AM - 7 PM</span>
            </div>
            
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="font-display text-white text-lg font-medium">Sunday</span>
              <span className="font-sans text-red-800 font-bold italic">Closed</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}