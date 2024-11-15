import { Input } from "@/components/ui/input";
import { Container } from "../container";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 

export function Formulario() {
    const { ref, inView } = useInView({ triggerOnce: true }); 

    return (
        <Container>
            <div  id="formulario" title="formulario" className="bg-white space-y-6 flex justify-between flex-col md:flex-row">
                <motion.div
                    className="md:w-1/2 flex items-center justify-center"
                    ref={ref}
                    initial={{ x: -100 }} 
                    animate={inView ? { x: 0 } : {}} 
                    transition={{ duration: 0.8 }} 
                >
                    <img 
                        src="/contato.jpg" 
                        alt="Contato"
                        className="h-[450px] w-full object-cover rounded-lg" 
                    />
                </motion.div>

                <motion.div 
                    className="md:w-1/2 p-4"
                    initial={{ x: 100 }} 
                    animate={inView ? { x: 0 } : {}} 
                    transition={{ duration: 0.8 }} 
                >
                    <h2 className="text-4xl font-bold text-center text-[#97872c]">Contato</h2>
                    <p className="text-gray-600 mt-2 text-center">
                        Entre em contato conosco para esclarecer dúvidas ou obter mais informações sobre nossos serviços. Estamos aqui para ajudar e garantir que você tenha a melhor experiência possível. Não hesite em nos enviar suas perguntas ou comentários!
                    </p>

                    <article className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                            <Input 
                                type="text" 
                                id="name" 
                                placeholder="Digite seu nome" 
                                className="mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#97872c] transition duration-150" 
                            />
                        </div>
                        <div>
                            <label htmlFor="sobrenome" className="block text-sm font-medium text-gray-700">Sobrenome</label>
                            <Input 
                                type="text" 
                                id="sobrenome" 
                                placeholder="Digite seu sobrenome" 
                                className="mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#97872c] transition duration-150" 
                            />
                        </div>
                    </article>
                    
                    <article className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                            <Input 
                                type="email" 
                                id="email" 
                                placeholder="Digite seu e-mail" 
                                className="mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#97872c] transition duration-150" 
                            />
                        </div>
                        <div>
                            <label htmlFor="cel" className="block text-sm font-medium text-gray-700">Telefone</label>
                            <Input 
                                type="tel" 
                                id="cel" 
                                placeholder="Digite seu telefone" 
                                className="mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#97872c] transition duration-150" 
                            />
                        </div>
                    </article>

                    <div className="mt-4">
                        <label htmlFor="textarea" className="block text-sm font-medium text-gray-700">Observações</label>
                        <Textarea 
                            placeholder="Escreva suas observações aqui." 
                            className="mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#97872c] transition duration-150 h-32" 
                        />
                    </div>

                    <div className="text-center mt-6">
                        <Button className="w-full md:w-auto bg-blue-900 text-white hover:bg-blue-800 transition duration-150">Enviar Mensagem</Button>
                    </div>
                </motion.div>
            </div>
        </Container>
    );
}
