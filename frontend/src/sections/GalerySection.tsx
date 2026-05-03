
import galery1 from "../assets/galery-1.jpg"
import galery2 from "../assets/galery-2.jpg"
import galery3 from "../assets/galery-3.jpg"
import galery4 from "../assets/galery-4.jpg"
import galery5 from "../assets/galery-6.jpg"
import galery6 from "../assets/galery-7.jpg"
import galery7 from "../assets/galery-8.jpg"
import galery8 from "../assets/galery-9.jpg"

const columns = [
    {
        spanIm1: 1,
        spanIm2: 2,
        imagePath1: galery1,
        imagePath2: galery2,
    },
    {
        spanIm1: 2,
        spanIm2: 1,
        imagePath1: galery3,
        imagePath2: galery4,
    },
    {
        spanIm1: 1,
        spanIm2: 2,
        imagePath1: galery5,
        imagePath2: galery6,
    },
    {
        spanIm1: 2,
        spanIm2: 1,
        imagePath1: galery7,
        imagePath2: galery8,
    },
]

export function Gallery() {
  return (
    <section className="bg-main py-20  px-6 md:px-12 lg:px-24 h-screen max-md:hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-gold text-center text-4xl md:text-5xl font-bold mb-16">
          Featured gallery
        </h2>
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[30%]">
            
            {
                columns.map((column)=> (
                    <>
                        <div className={` overflow-hidden`}>
                            <img src={column.imagePath1} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Barber work" />
                        </div>
                        <div className={` overflow-hidden`}>
                            <img src={column.imagePath2} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Barber work" />
                        </div>
                    </>
                ))
            }
        </div>
      </div>
    </section>
  );
}