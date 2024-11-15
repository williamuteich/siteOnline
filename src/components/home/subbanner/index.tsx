import { Container } from "@/components/home/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 

export function SubBanner(){

    const { ref, inView } = useInView({ triggerOnce: true });
    return(
        <section className="flex justify-center mt-12 text-center bg-gray-900 relative">
            <img 
                src="/subbanner.webp" 
                alt="sub banner" 
                className='w-full h-80 object-cover opacity-35'
            />
                <motion.div 
                    className="absolute top-6 md:top-14 lg:top-14 max-w-screen-xl pr-6 pl-6"
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }} 
                    animate={inView ? { opacity: 1, x: 0 } : {}} 
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-4 ">A Brilho Total Limpeza: Seu Parceiro em Ambientes Impecáveis</h3>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-base">
                        A Brilho Total Limpeza foi criada para oferecer soluções de limpeza de alta qualidade,
                        adaptadas às suas necessidades. Com uma equipe especializada e comprometida, garantimos ambientes limpos e saudáveis,
                        tanto em espaços comerciais quanto residenciais.
                    </p>
                    <Button className="mt-6 md:mt-14 bg-blue-900 uppercase text-xs sm:text-sm lg:text-base lg:p-[20px] lg:pr-16 lg:pl-16">
                        Agendar uma avaliação
                    </Button>
                </motion.div>
        </section>
    )
}