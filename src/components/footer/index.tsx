import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 

export function Footer() {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <footer id="contato" title="contato" className="bg-black text-white pr-6 pl-6 flex justify-center mt-16 pt-10 pb-10">
            <div className="max-w-screen-xl w-full">
                <div className="flex flex-col md:flex-row justify-between text-center md:text-left gap-8 md:gap-24">
                    <motion.div 
                        ref={ref}
                        initial={{ opacity: 0, x: -100 }} 
                        animate={inView ? { opacity: 1, x: 0 } : {}} 
                        transition={{ duration: 0.8 }}
                        className="w-full md:max-w-[32%] mb-4 md:mb-0"
                    >
                        <h2 className="text-2xl text-center mb-2 text-blue-900 font-bold flex flex-col justify-center items-center" style={{ lineHeight: '0.75' }}>
                            QuickShare 
                            <span className='text-base text-green-700'>clean</span>
                        </h2>
                        <p className="text-sm text-center">
                            A QuickShare é uma empresa de limpeza que vai até a sua casa e oferece serviços de limpeza tanto para ambientes comerciais quanto residenciais. Nossa equipe é treinada para garantir a máxima qualidade e satisfação, proporcionando um ambiente limpo e agradável para você.
                        </p>
                        <div className="flex justify-center mt-4">
                            <a href="#" className="mx-2 transform transition-transform duration-200 hover:scale-110">
                                <FaFacebook size={18} className="text-blue-600" />
                            </a>
                            <a href="#" className="mx-2 transform transition-transform duration-200 hover:scale-110">
                                <FaInstagram size={18} className="text-pink-500" />
                            </a>
                            <a href="#" className="mx-2 transform transition-transform duration-200 hover:scale-110">
                                <FaTwitter size={18} className="text-blue-400" />
                            </a>
                            <a href="#" className="mx-2 transform transition-transform duration-200 hover:scale-110">
                                <FaLinkedin size={18} className="text-blue-700" />
                            </a>
                            <a href="#" className="mx-2 transform transition-transform duration-200 hover:scale-110">
                                <FaWhatsapp size={18} className="text-green-500" />
                            </a>
                        </div>
                    </motion.div>
                    <motion.div 
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }} 
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }} 
                        className="mb-4 md:mb-0"
                    >
                        <h2 className="text-2xl mb-4 font-bold">Contatos</h2>
                        <div className="text-sm flex flex-col items-center md:items-start">
                            <div className="flex items-center mb-1">
                                <FaPhone size={18} className="mr-2" /> (51) 99868-2733
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope size={18} className="mr-2" /> williamuteich14@gmail.com
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }} 
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }} 
                        className="mb-4 md:mb-0"
                    >
                        <h2 className="text-2xl mb-4 font-bold">Endereços</h2>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center mb-1">
                                <FaMapMarkerAlt size={18} className="mr-2" /> Ney da Gama 888
                            </div>
                            <span className="text-sm flex items-center">
                                <FaClock size={18} className="mr-2" /> De segunda à sexta das 9h às 20h
                            </span>
                        </div>
                    </motion.div>
                </div>
                <div className="mt-10 mb-10">
                    <iframe
                        title="Localização do Centro Administrativo Fernando Ferrari"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.8995818981034!2d-51.23365092365307!3d-30.039738631059706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197902db512e4b%3A0xdde4f560d3d9d5b8!2sCentro%20Administrativo%20Fernando%20Ferrari!5e0!3m2!1spt-BR!2sbr!4v1730414535681!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <span className="text-xs text-gray-500 flex justify-center">
                    @{anoAtual} - todos os direitos reservados - QuickShare
                </span>
            </div>
        </footer>
    );
}
