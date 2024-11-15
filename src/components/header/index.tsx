import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaPhone, FaServicestack, FaUsers, FaHouseUser, FaBuilding, FaEnvelope } from 'react-icons/fa';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { BiMenu } from 'react-icons/bi';
import { CgMenuMotion } from "react-icons/cg";

const menuItems = [
    { name: 'Nossos Serviços', icon: <FaServicestack size={24} className='text-gray-600' />, href: "servicos" },
    { name: 'Quem Somos', icon: <FaUsers size={24} className='text-gray-600'/>, href: "sobre" },
    { name: 'Formulário', icon: <FaBuilding size={24} className='text-gray-600'/>, href: "formulario" },
    { name: 'Etapas', icon: <FaHouseUser size={24} className='text-gray-600'/>, href: "etapas" },
    { name: 'Contato', icon: <FaEnvelope size={24} className='text-gray-600'/>, href: "contato" },
];

const socialLinks = [
    { name: 'WhatsApp', icon: <FaWhatsapp size={24} color='white' />, href: "https://wa.me/51998682733" },
    { name: 'Instagram', icon: <FaInstagram size={24} color='white' />, href: "https://www.instagram.com" },
    { name: 'Facebook', icon: <FaFacebook size={24} color='white' />, href: "https://www.facebook.com" },
    { name: 'LinkedIn', icon: <FaLinkedin size={24} color='white' />, href: "https://www.linkedin.com" },
    { name: 'Twitter', icon: <FaTwitter size={24} color='white' />, href: "https://twitter.com" },
];

export function Header() {
    return (
        <header className="flex flex-col gap-1 shadow-[1px_5px_7px_rgba(0,0,0,0.25)] bg-white fixed w-full z-10">
            <div className="bg-blue-900 w-full flex justify-center py-2 pr-6 pl-6">
                <div className="max-w-screen-xl w-full flex justify-between py-1 pb-1">
                    <span className='w-full text-white hidden sm:flex sm:items-center gap-2 -tracking-tight text-lg'>
                        <a href="tel:+515998682733" className='flex items-center gap-2'>
                            <FaPhone size={24} className='text-xl text-white' />
                            (51) 99868-2733
                        </a>
                    </span>
                    <div className='w-full flex justify-end'>
                        {socialLinks.map(({ name, icon, href }) => (
                            <a key={name} href={href} className="mx-2" aria-label={name} target="_blank" rel="noopener noreferrer">
                                <span className="group">
                                    {icon}
                                    <style>{`
                                        .group:hover svg {
                                            transform: scale(1.1);
                                            transition: transform 0.2s;
                                        }
                                    `}</style>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full flex items-center justify-center py-2 pb-2 pr-6 pl-6">
                <div className="max-w-screen-xl w-full flex justify-between lg:justify-start gap-24 items-center">
                    <div>
                        <img src="./logo.jpeg" alt="quickshare" className="w-auto h-20 object rounded-md hover:cursor-pointer hover:scale-105 hover:transition-all" />
                    </div>

                    <nav className='hidden lg:flex gap-4'>
                        {menuItems.map(({ name, href }) => (
                            <a
                                key={name}
                                className='text-gray-600 font-normal border-b-2 border-transparent hover:border-b-2 hover:border-gray-600 transition-all'
                                href={`#${href}`}
                            >
                                {name}
                            </a>
                        ))}
                    </nav>

                    <div className='lg:hidden'>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button className='p-3'>
                                    <BiMenu size={24} />
                                    <span className='sr-only'>abrir / fechar menu</span>
                                </Button>
                            </SheetTrigger>

                            <SheetContent>
                                <nav>
                                    <div className='flex items-stretch gap-2'>
                                        <a href="#" className='flex h-10 w-10 mb-5 bg-primary rounded-full items-center justify-center'>
                                            <CgMenuMotion className='h-5 w-5 text-white transition-all' />
                                            <span className='sr-only'>Menu</span>
                                        </a>
                                        <p className='mt-2 font-semibold'>Menu Lateral</p>
                                    </div>
                                    {menuItems.map(({ name, icon, href }) => (
                                        <a
                                            key={name}
                                            className="flex items-center pl-4 pr-4 gap-2 text-gray-600 hover:bg-gray-100 rounded-sm hover:text-blue-600 transition-all py-2"
                                            href={`#${href}`}
                                        >
                                            {icon}
                                            {name}
                                        </a>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
