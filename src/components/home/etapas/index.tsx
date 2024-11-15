import { FaClipboardCheck, FaBroom, FaComments } from 'react-icons/fa'; 
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import { Container } from '@/components/home/container';

export function Etapas() {

    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <Container>
            <div id="etapas" title="etapas" className="max-w-screen-xl py-8 m-auto xl:pr-2 xl:pl-2">
                <section className="flex flex-col gap-4">
                    <h2 className="text-4xl font-bold font-medium text-[#97872c] text-center mt-6 mb-6">Nossas Etapas de Limpeza</h2>
                    <motion.div 
                        ref={ref} 
                        initial={{ opacity: 0, y: 100 }} 
                        animate={inView ? { opacity: 1, y: 0 } : {}} 
                        transition={{ duration: 0.8 }}
                        className="flex flex-col mt-32 xl:flex-row gap-8 justify-center  xl:mt-36"
                    >
                        <article className="flex flex-col items-center mb-36 xl:mb-8 border p-4 relative shadow-blue-200 shadow-md rounded-sm">
                            <div className="mb-4 text-blue-900 absolute -top-32 border-4 border-blue-900 p-6 rounded-full">
                                <div className='relative'>
                                    <p className='absolute -top-10 right-8 text-base bg-blue-900 text-white pt-2 pb-2 pl-4 pr-4 rounded-full'>1</p>
                                </div>
                                <FaClipboardCheck className="h-12 w-12" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-blue-900 mb-3">Avaliação Inicial</h3>
                                <p className="text-sm text-gray-700">
                                    O primeiro passo é agendar uma avaliação para entender suas necessidades específicas. Durante essa etapa, discutiremos suas preocupações e faremos uma análise detalhada do ambiente que precisa ser limpo.
                                </p>
                            </div>
                        </article>

                        <article className="flex flex-col items-center mb-36 xl:mb-8 border p-4 relative shadow-blue-200 shadow-md rounded-sm">
                            <div className="mb-4 text-blue-900 absolute -top-32 border-4 border-blue-900 p-6 rounded-full">
                                <div className='relative'>
                                    <p className='absolute -top-10 right-8 text-base bg-blue-900 text-white pt-2 pb-2 pl-4 pr-4 rounded-full'>2</p>
                                </div>
                                <FaBroom className="h-12 w-12" /> 
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-blue-900 mb-3">Execução da Limpeza</h3>
                                <p className="text-sm text-gray-700">
                                    Após a avaliação, nossa equipe irá executar a limpeza utilizando técnicas e produtos de alta qualidade. Esta etapa é crucial para garantir um ambiente limpo e saudável, adaptando-se às suas necessidades.
                                </p>
                            </div>
                        </article>

                        <article className="flex flex-col items-center xl:mb-8 border p-4 relative shadow-blue-200 shadow-md rounded-sm">
                            <div className="mb-4 text-blue-900 absolute -top-32 border-4 border-blue-900 p-6 rounded-full">
                                <div className='relative'>
                                    <p className='absolute -top-10 right-8 text-base bg-blue-900 text-white pt-2 pb-2 pl-4 pr-4 rounded-full'>3</p>
                                </div>
                                <FaComments className="h-12 w-12" /> 
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-blue-900 mb-3">Feedback e Resultado</h3>
                                <p className="text-sm text-gray-700">
                                    Após a limpeza, apresentamos um feedback detalhado dos resultados obtidos. Avaliaremos juntos as melhorias e discutiremos os próximos passos, garantindo a sua satisfação contínua.
                                </p>
                            </div>
                        </article>
                    </motion.div >
                </section>
            </div>
        </Container>
    );
}
