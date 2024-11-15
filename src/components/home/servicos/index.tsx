import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/home/container";

const servicos = [
  {
    id: 1,
    title: "Limpeza Residencial",
    description: "Serviço completo de limpeza para sua casa, incluindo quartos, salas e banheiros.",
    image: "https://imgs.search.brave.com/-6RuTs6aFgzHU2pe4buHKcufckzlubZpsIslGhJmM8M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm9saW1wYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTIvYXN0cm9s/aW1wYS1lbXByZXNh/LXNlcnZpY29zLWxp/bXBlemEuanBn",
  },
  {
    id: 2,
    title: "Limpeza Comercial",
    description: "Limpeza profissional para escritórios e estabelecimentos comerciais.",
    image: "https://imgs.search.brave.com/63m858cr4sl6IKR6TYtUTf-Iy7OjK2XFJishfb_UJE4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE4/NTg2MjM4L3B0L2Zv/dG8vY29tZXJjaWFs/LWxpbXBlemEtZm9y/bmVjZWRvcmVzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1M/bVpUZkI3RFBpRC1L/LXA2MVVJak9VQ2dy/eTdNYjVKVFRjVHJn/Mk5keWI0PQ",
  },
  {
    id: 3,
    title: "Limpeza de Estofados",
    description: "Limpeza profunda de sofás, cadeiras, poltronas, tapetes e outros estofados.",
    image: "https://imgs.search.brave.com/SkmVhlp-2BwfAOMLaFR78OG3vvOWS5fhGu6xWb8xdho/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3RpL2ZvdG9z/LWdyYXRpcy90Mi85/ODg0MDgzLWVtcHJl/Z2FkYS1saW1wZXph/LWxhdmFyLWUtZXNm/cmVnYXItYmFjaWEt/bm8tYmFuaGVpcm8t/ZW0tY2FzYS1mb3Rv/LmpwZw",
  },
  {
    id: 4,
    title: "Limpeza Pós-Obra",
    description: "Serviço especializado para limpar sua casa após reformas e construções.",
    image: "https://imgs.search.brave.com/vInN3DykBaFoQ9WdzcwcK-y6tWsGlKDo2bamRdq_eRE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY1/ODM1NDEyL3B0L2Zv/dG8vcHJvZHV0b3Mt/ZGUtbGltcGV6YS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M25mQmU5NmpGYXh2/U2hNMTJFbVFXZm9s/dkhtNUFNY0pGYU5h/cElib2pVVT0",
  },
  {
    id: 5,
    title: "Limpeza de Janelas",
    description: "Limpeza completa de janelas, garantindo uma vista cristalina.",
    image: "https://imgs.search.brave.com/iU6qji72eXh7EpyqH43bUHULwWfvIXAGG-AjFgc1X8Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/Mjc5ODUwL3B0L2Zv/dG8vb3MtcHJvZHV0/b3MuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVMzaDd4RXVz/ZkI3bF8wRXYtLUFo/cjc2Q1I1QXo2ME52/YW9sak5pVVd4QUk9",
  },
];

export function Servicos() {
  return (
    <Container>
      <div id="servicos" title="servicos" className="border-b border-slate-200 border-b-1 pb-16">
        <h2 className="text-4xl font-bold text-[#97872c] text-center mt-6 mb-6">Nossos Serviços</h2>
        <Carousel
          opts={{
          align: "start",
          }}
        
          className="w-full"
        >
          <CarouselContent>
            {servicos.map((servico) => {
              const { ref, inView } = useInView({ triggerOnce: true }); 
              return (
                <CarouselItem key={servico.id} className=" md:basis-1/2 lg:basis-1/3 h-full">
                  <motion.div 
                    ref={ref} 
                    className="p-1"
                    initial={{ opacity: 0, y: 100 }} 
                    animate={inView ? { opacity: 1, y: 0 } : {}} 
                    transition={{ duration: 0.8 }} 
                  >
                    <Card>
                      <CardContent className="flex flex-col items-center pr-2 pl-2 pt-4 pb-4 shadow-lg rounded-lg">
                        <img
                          src={servico.image}
                          alt={servico.title}
                          className="mb-4 h-56 w-full object-cover rounded"
                        />
                        <h3 className="text-xl font-semibold mb-2 text-blue-900">{servico.title}</h3>
                        <p className="text-center mb-4 text-sm leading-4">{servico.description}</p>
                        <Button className="w-full bg-blue-900">
                          Solicitar
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-6 top-32 2xl:-left-14 2xl:top-1/2"/>
          <CarouselNext className="right-6 top-32 2xl:-right-14 2xl:top-1/2"/>
        </Carousel>
      </div>
    </Container>
  );
}
