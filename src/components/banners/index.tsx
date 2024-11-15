import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
  

export function Banners() {
    return (
        <div className="bg-slate-600 pt-[148px] md:pt-[152px]">

        <Carousel
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 3000,
                })
            ]}
        >
        <CarouselContent>
            <CarouselItem>      
                <img 
                    src="/bannerLimpeza.webp" 
                    alt="Banner de Limpeza" 
                    loading="lazy"
                    className="h-[550px] w-full object-cover opacity-70" />
                </CarouselItem>
            <CarouselItem>
                <img 
                    src="/bannerLimpeza.jpg" 
                    alt="Banner de Limpeza" 
                    loading="lazy"
                    className="h-[550px] w-full object-cover opacity-70" 
                />
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious  className="left-6 md:left-20"/>
        <CarouselNext className="right-6 md:right-20"/>
        </Carousel>


        </div>
    );
}
