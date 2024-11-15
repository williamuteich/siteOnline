import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Container } from '../container';
import { ScrollArea } from '@/components/ui/scroll-area'; // Importando o ScrollArea

const faqData = [
    {
        question: "Quais são os principais tratamentos odontológicos disponíveis?",
        answer: "Os principais tratamentos incluem limpeza dental, restaurações, tratamento de canal, clareamento, ortodontia (aparelhos) e implantes dentários."
    },
    {
        question: "Quanto tempo leva um tratamento ortodôntico com aparelho?",
        answer: "O tempo varia de acordo com a complexidade do caso, mas geralmente leva entre 1 a 3 anos."
    },
    {
        question: "O que é um tratamento de canal e quando é necessário?",
        answer: "O tratamento de canal é necessário quando a polpa do dente está infectada ou danificada, e envolve a remoção da polpa, limpeza e selagem do canal radicular."
    },
    {
        question: "Com que frequência devo ir ao dentista?",
        answer: "É recomendado visitar o dentista a cada seis meses para consultas de rotina e limpezas, mas a frequência pode variar dependendo das necessidades individuais."
    },
    {
        question: "O que devo fazer se sentir dor de dente?",
        answer: "Se sentir dor de dente, agende uma consulta o quanto antes. Enquanto isso, você pode tomar analgésicos e evitar alimentos muito quentes ou frios."
    },
    {
        question: "Quais são os cuidados pós-operatórios após a extração de um dente?",
        answer: "Após a extração, evite alimentos duros e quentes, não use canudo e siga as orientações do dentista quanto a medicamentos e higiene bucal."
    },
    {
        question: "Os tratamentos dentários são cobertos por planos de saúde?",
        answer: "A cobertura varia de acordo com o plano. Verifique as cláusulas específicas do seu plano de saúde para tratamentos odontológicos."
    },
    {
        question: "É seguro usar clareamento dental em casa?",
        answer: "Clareamentos caseiros podem ser seguros, mas é essencial usar produtos aprovados e, preferencialmente, consultar um dentista antes de iniciar o tratamento."
    },
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <Container>
            <h1 className="text-4xl font-bold text-[#97872c] text-center mb-8">Perguntas Frequentes</h1>
            <div className="mx-auto">
                <ScrollArea className="h-96 rounded-md border">
                    <div className="p-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="border-b border-gray-200 last:border-b-0">
                                <div
                                    className="flex items-center justify-start p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200 w-full"
                                    onClick={() => toggleAnswer(index)}
                                >
                                    <FaAngleRight
                                        className={`transform transition-transform duration-200 mr-2 ${activeIndex === index ? 'rotate-90' : ''}`}
                                    />
                                    <span className="text-lg text-left w-full">{item.question}</span>
                                </div>
                                {activeIndex === index && (
                                    <p className="p-4 text-gray-800 bg-gray-100">{item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </Container>
    );
}
