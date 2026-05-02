import Button from "../components/Button";

export function AboutSection() {
  return (
    <section className="bg-main-second py-20 px-6 md:px-12 lg:px-24">
      <div className=" container mx-auto max-w-7xl gap-12 flex justify-between">
        
        <div className="flex flex-col items-start md:items-center text-left md:text-center border-r-0 md:border-r border-white/10 pr-0 md:pr-12">
          <span className="font-display text-gold text-8xl md:text-9xl font-bold leading-none">
            15
          </span>
          <div className="font-display text-white text-4xl md:text-5xl font-bold mt-2 leading-tight">
            Years <br /> Experience
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col gap-8">
          <h2 className="font-display text-gold text-4xl md:text-5xl font-bold">
            Who we are
          </h2>
          
          <p className="font-sans text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
            Barbers is a team of passionate and experienced professionals dedicated to providing 
            the highest quality hair styling tools on the market. Our mission is to help you achieve 
            your best hair day, every day. We believe that beauty should be accessible to everyone, 
            which is why we offer affordable and innovative products that are easy to use and 
            deliver professional results.
          </p>

          <div className="mt-4">
            <Button 
              label="More about us" 
              variant="primary" 
              className="px-12 py-5 text-sm"
              onClick={() => console.log("Navigating to About page")}
            />
          </div>
        </div>

      </div>
    </section>
  );
}