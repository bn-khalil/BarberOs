import Button from "../components/Button";

export function AboutSection() {
  return (
    <section id="about" className="bg-main-second py-20 px-6 md:px-12 lg:px-24 max-lg:text-center">
      <div className="container mx-auto max-w-7xl gap-12 grid grid-cols-1 md:grid-cols-3">
        
        <div className="text-center border-r-0 md:border-r border-white/10 pr-0 md:pr-12">
          <span className="font-display text-gold text-8xl md:text-9xl font-bold leading-none">
            15
          </span>
          <div className="font-display text-white text-4xl md:text-5xl font-bold mt-2 leading-tight">
            Years <br /> Experience
          </div>
        </div>

        <div className="flex flex-col gap-8 md:col-span-2">
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
              type="button"
              label="More about us" 
              variant="primary" 
              className="max-sm:px-5 max-sm:text-[10px] px-12 py-5 text-sm"
              onClick={() => console.log("Navigating to About page")}
            />
          </div>
        </div>

      </div>
    </section>
  );
}